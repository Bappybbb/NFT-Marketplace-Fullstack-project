import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import axios from "axios";

// INTERNAL IMPORT
import { NFTMarketplaceAddress, NFTMarketplaceABI } from "./constants";

const uploadToPinata = async (body, contentType) => {
  const headers = contentType ? { "Content-Type": contentType } : undefined;
  const response = await fetch("/api/pinata/upload", {
    method: "POST",
    headers,
    body,
  });

  let result;
  try {
    result = await response.json();
  } catch {
    throw new Error("Pinata upload returned an invalid response.");
  }

  if (!response.ok) {
    throw new Error(result.error || "Pinata upload failed.");
  }

  if (!result.url) {
    throw new Error("Pinata upload did not return a file URL.");
  }

  return result.url;
};

// FETCHING SMART CONTRACT
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider,
  );

// CONNECT WITH SMART CONTRACT
const connectingWithSmartContract = async () => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.log("Something went wrong while connecting with contract", error);
  }
};

export const NFTMarketplaceContext = React.createContext();

export const NFTMarketplaceProvider = ({ children }) => {
  const titleData = "Discover, collect, and sell NFTs 🦊";
  const [currentAccount, setCurrentAccount] = useState("");

  // ----- Check if wallet is connected
  const checkIFWalletConnected = async () => {
    try {
      if (!window.ethereum) return console.log("Install MetaMask");
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No Account Found");
      }
    } catch (error) {
      console.log("Something went wrong while connecting to wallet");
    }
  };

  useEffect(() => {
    checkIFWalletConnected();
  }, []);

  // ---- Connect Wallet Function
  const connectWallet = async () => {
    try {
      if (!window.ethereum) return console.log("Install MetaMask");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log("Error while connecting to wallet", error);
    }
  };

  // Upload to IPFS function
  const uploadToIpfs = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    return uploadToPinata(formData);
  };

  // Create NFT function
  const createNFT = async (name, price, fileUrl, description, router) => {
    if (!name || !description || !price || !fileUrl)
      throw new Error("Name, description, price, and image are required.");

    const url = await uploadToPinata(
      JSON.stringify({ name, description, image: fileUrl }),
      "application/json",
    );
    await createSale(url, price);
    router.push("/");
  };

  // --- createSale function
  const createSale = async (url, formInputPrice, isReselling, id) => {
    try {
      const price = ethers.utils.parseUnits(formInputPrice, "ether");
      const contract = await connectingWithSmartContract();
      const listingPrice = await contract.getListingPrice();

      const transaction = !isReselling
        ? await contract.createToken(url, price, {
            value: listingPrice.toString(),
          })
        : await contract.reSellToken(id, price, {
            value: listingPrice.toString(),
          });

      await transaction.wait();
    } catch (error) {
      console.log("Error while creating sale", error);
      throw error;
    }
  };

  // -- Fetch NFTs function
  const fetchNFTs = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        "http://127.0.0.1:8545/",
      );
      const contract = fetchContract(provider);
      const data = await contract.fetchMarketItem();

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);
            const {
              data: { image, name, description },
            } = await axios.get(tokenURI);
            const price = ethers.utils.formatUnits(
              unformattedPrice.toString(),
              "ether",
            );

            return {
              price,
              tokenId: tokenId.toNumber(),
              seller,
              owner,
              image,
              name,
              description,
              tokenURI,
            };
          },
        ),
      );
      return items;
    } catch (error) {
      console.log("Error while fetching NFTs", error);
    }
  };

  // Fetch My NFT or Listed NFTs
  const fetchMyNFTsOrListedNFTs = async (type) => {
    try {
      const contract = await connectingWithSmartContract();
      const data =
        type === "fetchItemsListed"
          ? await contract.fetchItemsListed()
          : await contract.fetchMyNFT();

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);
            const {
              data: { image, name, description },
            } = await axios.get(tokenURI);
            const price = ethers.utils.formatUnits(
              unformattedPrice.toString(),
              "ether",
            );

            return {
              price,
              tokenId: tokenId.toNumber(),
              seller,
              owner,
              image,
              name,
              description,
              tokenURI,
            };
          },
        ),
      );
      return items;
    } catch (error) {
      console.log("Error while fetching listed nfts", error);
    }
  };

  // BUY NFTs Function
  const buyNFT = async (nft) => {
    try {
      const contract = await connectingWithSmartContract();
      const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
      const transaction = await contract.createMarketSale(nft.tokenId, {
        value: price,
      });
      await transaction.wait();
    } catch (error) {
      console.log("Error while buying NFT", error);
    }
  };

  return (
    <NFTMarketplaceContext.Provider
      value={{
        checkIFWalletConnected,
        titleData,
        connectWallet,
        uploadToIpfs,
        createNFT,
        fetchNFTs,
        fetchMyNFTsOrListedNFTs,
        buyNFT,
        currentAccount,
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  );
};
