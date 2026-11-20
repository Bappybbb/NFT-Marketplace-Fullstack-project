import React, { useState } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/connectWallet.module.css";
import images from "../img";

const ConnectWallet = () => {
  const [activeBtn, setActiveBtn] = useState(1);

  const providerArray = [
    { provider: images.provider1, name: "Metamask" },
    { provider: images.provider2, name: "WalletConnect" },
    { provider: images.provider3, name: "WalletLink" },
    { provider: images.provider4, name: "Fortmatic" },
  ];

  return (
    <div className={Style.connectWallet}>
      <div className={Style.connectWallet_box}>
        <h1>Connect Your Wallet</h1>
        <p className={Style.connectWallet_box_para}>
          Connect with one of our available wallet providers or create a new
          wallet.
        </p>
        <div className={Style.connectWallet_box_provider}>
          {providerArray.map((el, i) => (
            <div
              className={`${Style.connectWallet_box_provider_item} ${
                activeBtn === i + 1 ? Style.active : ""
              }`}
              key={i + 1}
              onClick={() => setActiveBtn(i + 1)}
            >
              <Image
                src={el.provider}
                alt={el.name}
                width={50}
                height={50}
                className={Style.connectWallet_box_para_item_img}
              />
              <p>{el.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
