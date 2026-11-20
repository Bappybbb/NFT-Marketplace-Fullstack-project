import React, { useState } from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";

//internal import
import Style from "./FollowerTabCard.module.css";
import images from "../../../img";







const FollowerTabCard = ({ i, el }) => {



        
        const [following, setFollowing] = useState(false);

        const followMe = () => {
          setFollowing((prev) => !prev);
        };

  if (!el) return null;

  return (
    <div className={Style.followertabCard}>
      <div className={Style.followertabCard_rank}>
        <p>
          #{i + 1} <span>🏅</span>
        </p>
      </div>

      <div className={Style.followertabCard_box}>
        <div className={Style.followertabCard_box_img}>
          <Image
            className={Style.followertabCard_box_img_img}
            src={el.background}
            alt="profile background"
            width={500}
            height={300}
          />
        </div>

        <div className={Style.followertabCard_box_profile}>
          <Image
            className={Style.followertabCard_box_profile_img}
            alt="profile picture"
            width={100}
            height={100}
            src={el.user}
          />
        </div>

        <div className={Style.followertabCard_box_info}>
          <div className={Style.followertabCard_box_info_name}>
            <h4>
              Giada Mann{" "}
              <span>
                <MdVerified />
              </span>
            </h4>
            <p>12.321 ETH</p>
          </div>

          <div className={Style.followertabCard_box_info_following}>
            <button type="button" onClick={followMe}>
              {following ? (
                <>
                  Following{" "}
                  <span>
                    <TiTick />
                  </span>
                </>
              ) : (
                "Follow"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowerTabCard;
