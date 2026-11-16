import React from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialTwitter,
} from "react-icons/ti";

import Style from "./CollectionProfile.module.css";
import images from "../../img";

const CollectionProfile = () => {
  const cardArray = [
    { label: "$95,5345", value: "+ 2.11%" },
    { label: "$95,5445", value: "+ 3.11%" },
    { label: "$95,6345", value: "+ 4.11%" },
    { label: "$95,7445", value: "+ 5.11%" },
  ];

  return (
    <div className={Style.collectionProfile}>
      <div className={Style.collectionProfile_box}>
        {/* বাম দিকের ইমেজ ও সোশ্যাল আইকন */}
        <div className={Style.collectionProfile_box_left}>
          <div className={Style.image_wrapper}>
            {/* ✅ এখানে nft_image_1 ব্যবহার করুন */}
            <Image
              src={images.nft_image_1}
              alt="nft image"
              width={100}
              height={100}
              className={Style.collectionProfile_box_left_img}
            />
          </div>
          <div className={Style.collectionProfile_box_left_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
          </div>
        </div>

        {/* ডান দিকের টেক্সট ও স্ট্যাট */}
        <div className={Style.collectionProfile_box_middle}>
          <h1>Awesome NFTs Collection</h1>
          <p>
            Karafuru is home to 5,555 generative arts where colors reign
            supreme. Leave the drab reality and enter the world of Karafuru by
            Museum of Toys.
          </p>

          <div className={Style.collectionProfile_box_middle_box}>
            {cardArray.map((el, i) => (
              <div
                key={i}
                className={Style.collectionProfile_box_middle_box_item}
              >
                <small>{el.label}</small>
                <span>{el.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionProfile;
