import React, { useState } from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";

// internal import
import Style from "./AudioCard.module.css";
import images from "../../../img";
import LikeProfile from "../../LikeProfile/LikeProfile.jsx";








const AudioCard = () => {
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);

  const likeNft = () => setLike((prev) => !prev);
  const musicPlay = () => setPlay((prev) => !prev);

  return (
    <div className={Style.audioCard}>
      <div className={Style.audioCard_box}>
        {/* Background image — moved INSIDE the grid box */}
        <div className={Style.audioCard_box_img}>
          <Image
            src={images.creatorbackground10}
            alt="background"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
          />
        </div>

        {/* Like + time row */}
        <div className={Style.audioCard_box_like_time}>
          <div
            className={Style.audioCard_box_like}
            onClick={likeNft}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && likeNft()}
          >
            {like ? (
              <AiFillHeart className={Style.audioCard_box_like_icon} />
            ) : (
              <AiOutlineHeart
                className={Style.audioCard_box_like_icon_unlike}
              />
            )}
            <span>24</span>
          </div>
          <div className={Style.audioCard_box_time}>
            <div className={Style.audioCard_box_time_reaming}>
              <small>Remaining time</small>
              <h5>3h: 15m: 20s</h5>
            </div>
          </div>
        </div>

        {/* Player controls */}
        <div className={Style.audioCard_box_player}>
          <Image src={images.musiceWave} alt="music" width={200} height={80} />
          <div
            className={Style.audioCard_box_musicPlayer}
            onClick={musicPlay}
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && musicPlay()
            }
          >
            <div className={Style.audioCard_box_musicPlayer_icon}>
              {play ? <TbPlayerPause /> : <TbPlayerPlay />}
            </div>
          </div>
        </div>

        {/* Details footer — moved INSIDE grid box */}
        <div className={Style.audioCard_box_details}>
          <div className={Style.audioCard_box_details_info}>
            <h4>NFT music #12232</h4>
            <div className={Style.audioCard_box_details_info_price}>
              <small>Price</small>
              <p>$3,232.33</p>
            </div>
          </div>
          <div className={Style.audioCard_box_details_stock}>
            <LikeProfile/>
            <small>24 in stock</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioCard;
