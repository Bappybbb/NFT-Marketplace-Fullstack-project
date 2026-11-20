import React, { useState, useEffect, useContext } from "react";

//INTRNAL IMPORT
import Style from "../styles/uploadnft.module.css";
import { UploadNFT } from "../UploadNFT/uploadNFTIndex";

//Smart contract import
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const UploadNFTPage = () => {
  const { uploadToIpfs, createNFT } = useContext(NFTMarketplaceContext);

  return (
    <div className={Style.uploadNFT}>
      <div className={Style.uploadNFT_box}>
        <div className={Style.uploadNFT_box_heading}>
          <h1>Create New NFT</h1>
          <p>
            You can set preferred display name,create your profile and NFT URL
            with best settings.
          </p>
        </div>
        <div className={Style.uploadNFT_box_title}>
          <h2> Image, Video,Audio,or 3D Model</h2>
          <p>
            File types supported:JPG, PNG, GIF, SVG, MP4, WEBM,MP3,WAV, OGG,
            GLB,GLFT, Max seze:100 MB
          </p>
        </div>
        <div className={Style.uploadNFT_box_title}>
          <UploadNFT uploadToIpfs={uploadToIpfs} createNFT={createNFT} />
        </div>
      </div>
    </div>
  );
};

export default UploadNFTPage;
