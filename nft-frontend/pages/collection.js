import React from 'react';

// INTERNAL IMPORT
import Style from "../styles/collection.module.css";
import images from "../img";

import { CollectionProfile, Banner,NFTCardTwo } from "../collectionPage/collectionIndex";
import { Slider, Brand } from "../components/componentsindex";
import Filter from "../components/Filter/Filter.jsx";

const collection = () => {


  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
  ];

  return (
    <div className={Style.collection_page}>
      {/* ✅ ব্যানারকে একটি র‍্যাপার দিয়ে ঘিরে দেওয়া হলো */}
      <div className={Style.banner_wrapper}>
        <Banner bannerImage={images.creatorbackground1} />
      </div>

      <CollectionProfile />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />

      <Slider />
      <Brand />
    </div>
  );
};

export default collection;