import React from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import Image from "next/image";

// INTERNAL IMPORT
import Style from "./SliderCard.module.css";
import images from "../../../img";
import LikeProfile from "../../LikeProfile/LikeProfile.jsx";

const SliderCard = ({
  el,
  i,
  nftId = "12323",
  currentBid = "1.000 ETH",
  total = 100,
  current = 1,
  timeLeft = "3h :15m :20s",
}) => {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(pointerY, { stiffness: 180, damping: 22 });
  const rotateY = useSpring(pointerX, { stiffness: 180, damping: 22 });

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    pointerX.set((x - 0.5) * 14);
    pointerY.set((0.5 - y) * 14);
  };

  const resetTilt = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.article
      className={Style.sliderCard}
      aria-label={`NFT Video ${nftId}, current bid ${currentBid}`}
      style={
        reduceMotion
          ? undefined
          : { rotateX, rotateY, transformPerspective: 900 }
      }
      whileHover={reduceMotion ? undefined : { scale: 1.035, z: 24 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onPointerCancel={resetTilt}
    >
      <div className={Style.sliderCard_box}>
        <div className={Style.sliderCard_box_img}>
          <Image
            src={el.background} // el থেকে background নেওয়া হলো
            alt={`NFT ${nftId}`}
            draggable={false}
            fill
            sizes="(max-width: 599px) 82vw, (max-width: 899px) 44vw, (max-width: 1279px) 30vw, 340px"
            style={{ objectFit: "cover" }}
          />
          <div className={Style.sliderCard_image_shade} />
          <div className={Style.sliderCard_image_topline}>
            <span className={Style.sliderCard_collection}>MOTION / NFT</span>
            <span className={Style.sliderCard_edition}>
              #{String(nftId).padStart(2, "0")}
            </span>
          </div>
          <div className={Style.sliderCard_image_caption}>
            <span>FEATURED COLLECTIBLE</span>
            <h3>NFT Video #{nftId}</h3>
          </div>
        </div>

        <div className={Style.sliderCard_box_details}>
          <div className={Style.sliderCard_collectors}>
            <span>COLLECTORS</span>
            <LikeProfile />
            <small>
              {current} / {total}
            </small>
          </div>
          <div className={Style.sliderCard_box_price}>
            <div className={Style.sliderCard_box_price_box}>
              <small>Current bid</small>
              <p>{currentBid}</p>
            </div>
            <div className={Style.sliderCard_box_price_time}>
              <small>Auction ends in</small>
              <p>{timeLeft}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default SliderCard;
