import React from "react";
import Image from "next/image";
import Style from "./Banner.module.css";

const Banner = ({ bannerImage }) => {
  return (
    <div className={Style.banner}>
      {/* মোবাইল */}
      <div className={Style.banner_img}>
        <Image
          src={bannerImage}
          alt="background"
          fill
          style={{ objectFit: "cover" }}
          priority
          sizes="100vw"
        />
      </div>

      {/* ট্যাবলেট/ডেস্কটপ */}
      <div className={Style.banner_img_desktop}>
        <Image
          src={bannerImage}
          alt="background"
          fill
          style={{ objectFit: "cover" }}
          priority
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default Banner;
