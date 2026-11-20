import Image from "next/image";

//INTERNAL import
import Style from "./NFTTabs.module.css";

const NFTTabs = ({ dataTab = [], icon = null }) => {
  return (
    <div className={Style.NFTTabs}>
      {dataTab.map((image, index) => (
        <div className={Style.NFTTabs_box} key={index}>
          <Image
            src={image}
            alt={`Collector profile ${index + 1}`}
            width={40}
            height={40}
            className={Style.NFTTabs_box_img}
          />
          <div className={Style.NFTTabs_box_info}>
            <span>
              Offer of $770 by <span>Shoaib Vhai</span>
            </span>
            {icon && <span className={Style.NFTTabs_box_verified}>{icon}</span>}
            <small>Jun 14 - 4:12</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTTabs
