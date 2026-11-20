import React, { useState } from "react";
import Image from "next/image";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";

// internal import
import Style from "./AudioCardSmall.module.css";
import images from "../../../img";
import LikeProfile from "../../LikeProfile/LikeProfile.jsx";



const AudioCardSmall = () => {
  const [play, setPlay] = useState(false);

  const playMusic = () => setPlay((prev) => !prev);

  return (
    <div className={Style.audioPlayer}>
      <div className={Style.audioPlayer_box}>
        <div className={Style.audioPlayer_box_img}>
          <Image
            src={images.creatorbackground1}
            alt="music cover"
            width={100}
            height={100}
          />
        </div>

        <div className={Style.audioPlayer_box_info}>
          <h4>NFT music #13434</h4>
          <div className={Style.audioPlayer_box_info_box}>
            <LikeProfile/>
            <div className={Style.audioPlayer_box_info_box_price}>
              <small>Price</small>
              <p>1.00 ETH</p>
            </div>
          </div>
        </div>

        <div
          className={Style.audioPlayer_box_playBtn}
          onClick={playMusic}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && playMusic()}
        >
          {play ? <TbPlayerPause /> : <TbPlayerPlay />}
        </div>
      </div>
    </div>
  );
};

export default AudioCardSmall;
