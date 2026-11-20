import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";

// Internal import
import Style from "./NFTCard.module.css";
import images from "../../img";

const BASE_LIKES = 22;

const NFTCard = () => {
  const CardArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_1,
    images.nft_image_3,
    images.nft_image_3,
    images.nft_image_2,
  ];

  // one "liked" flag per card
  const [likedMap, setLikedMap] = useState({});

  const likeNft = (id) => {
    setLikedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className={Style.NFTCard}>
      {/* এখানে (el, i) ব্যবহার করা হয়েছে */}
      {CardArray.map((el, i) => {
        const liked = !!likedMap[el];

        return (
          <div className={Style.NFTCard_box} key={i}>
            <div className={Style.NFTCard_box_img}>
              <Image
                src={el}
                alt="NFT images"
                width={600}
                height={600}
                className={Style.NFTCard_box_img_img}
              />
            </div>

            <div className={Style.NFTCard_box_update}>
              <div className={Style.NFTCard_box_update_left}>
                <div
                  className={Style.NFTCard_box_update_left_like}
                  onClick={() => likeNft(el)}
                >
                  {liked ? (
                    <AiFillHeart
                      className={Style.NFTCard_box_update_left_like_icon}
                    />
                  ) : (
                    <AiOutlineHeart />
                  )}
                  <span>{BASE_LIKES + (liked ? 1 : 0)}</span>
                </div>
              </div>

              <div className={Style.NFTCard_box_update_right}>
                <div className={Style.NFTCard_box_update_right_info}>
                  <small>Remaining time</small>
                  <p>3h : 15m : 20s</p>
                </div>
              </div>
            </div>

            <div className={Style.NFTCard_box_update_details}>
              <div className={Style.NFTCard_box_update_details_price}>
                <div className={Style.NFTCard_box_update_details_price_box}>
                  <h4>Clone #43454</h4>
                  <div
                    className={Style.NFTCard_box_update_details_price_box_box}
                  >
                    <div
                      className={
                        Style.NFTCard_box_update_details_price_box_box_bid
                      }
                    >
                      <small>Current Bid</small>
                      <p>1.000 ETH</p>
                    </div>
                    <div
                      className={
                        Style.NFTCard_box_update_details_price_box_stock
                      }
                    >
                      <small>61 in stock</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.NFTCard_box_update_details_category}>
                <BsImages />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NFTCard;
