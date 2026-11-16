// import React, { useState } from "react";
// import Image from "next/image";
// import { BsImage } from "react-icons/bs";
// import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
// import { MdTimer } from "react-icons/md";

// //INTERNAL IMPORT
// import Style from "./NFTCardTwo.module.css";
// import { LikeProfile } from "../../components/componentsindex";

// // Each card owns its own like state (before, all cards shared one state)
// const NFTCard = ({ src, index }) => {
//   const [liked, setLiked] = useState(false);
//   const [likes, setLikes] = useState(24);

//   const toggleLike = () => {
//     setLikes((n) => (liked ? n - 1 : n + 1));
//     setLiked((v) => !v);
//   };

//   const hours = index + 1;

//   return (
//     <div className={Style.NFTCardTwo_box}>
//       {/* image + overlay stacked in the same grid cell */}
//       <div className={Style.NFTCardTwo_box_media}>
//         <Image
//           className={Style.NFTCardTwo_box_img_img}
//           src={src}
//           alt={`Clone #${index + 1}`}
//           width={500}
//           height={500}
//         />
//         <div className={Style.NFTCardTwo_box_like}>
//           <BsImage className={Style.NFTCardTwo_box_like_icon} />
//           <button
//             type="button"
//             className={Style.NFTCardTwo_box_like_btn}
//             onClick={toggleLike}
//             aria-pressed={liked}
//             aria-label={liked ? "Unlike" : "Like"}
//           >
//             {liked ? <AiFillHeart /> : <AiOutlineHeart />}
//             <span>{likes}</span>
//           </button>
//         </div>
//       </div>

//       <div className={Style.NFTCardTwo_box_info}>
//         <div className={Style.NFTCardTwo_box_info_left}>
//           <LikeProfile />
//           <p>Clone #{index + 1}</p>
//         </div>
//         <small>{42 + index}</small>
//       </div>

//       <div className={Style.NFTCardTwo_box_price}>
//         <div className={Style.NFTCardTwo_box_price_box}>
//           <small>Current Bid</small>
//           <p>{15 + index}.0032 ETH</p>
//         </div>
//         <p className={Style.NFTCardTwo_box_price_stock}>
//           <MdTimer /> <span>{hours} hours left</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// const NFTCardTwo = ({ NFTData = [] }) => (
//   <div className={Style.NFTCardTwo}>
//     {NFTData.map((el, i) => (
//       <NFTCard key={i} src={el} index={i} />
//     ))}
//   </div>
// );

// export default NFTCardTwo;

import React, { useState } from "react";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdTimer } from "react-icons/md";

//INTERNAL IMPORT
import Style from "./NFTCardTwo.module.css";
import { LikeProfile } from "../../components/componentsindex";

// Each card owns its own like state
// NFTData here = single item object: { src, index }
const NFTCard = ({ NFTData }) => {
  const { src, index } = NFTData;

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(24);

  const toggleLike = () => {
    setLikes((n) => (liked ? n - 1 : n + 1));
    setLiked((v) => !v);
  };

  const hours = index + 1;

  return (
    <div className={Style.NFTCardTwo_box}>
      {/* image + overlay stacked in the same grid cell */}
      <div className={Style.NFTCardTwo_box_media}>
        <Image
          className={Style.NFTCardTwo_box_img_img}
          src={src}
          alt={`Clone #${index + 1}`}
          width={500}
          height={500}
        />
        <div className={Style.NFTCardTwo_box_like}>
          <BsImage className={Style.NFTCardTwo_box_like_icon} />
          <button
            type="button"
            className={Style.NFTCardTwo_box_like_btn}
            onClick={toggleLike}
            aria-pressed={liked}
            aria-label={liked ? "Unlike" : "Like"}
          >
            {liked ? <AiFillHeart /> : <AiOutlineHeart />}
            <span>{likes}</span>
          </button>
        </div>
      </div>

      <div className={Style.NFTCardTwo_box_info}>
        <div className={Style.NFTCardTwo_box_info_left}>
          <LikeProfile />
          <p>Clone #{index + 1}</p>
        </div>
        <small>{42 + index}</small>
      </div>

      <div className={Style.NFTCardTwo_box_price}>
        <div className={Style.NFTCardTwo_box_price_box}>
          <small>Current Bid</small>
          <p>{15 + index}.0032 ETH</p>
        </div>
        <p className={Style.NFTCardTwo_box_price_stock}>
          <MdTimer /> <span>{hours} hours left</span>
        </p>
      </div>
    </div>
  );
};

// NFTData here = array of image sources
const NFTCardTwo = ({ NFTData = [] }) => (
  <div className={Style.NFTCardTwo}>
    {NFTData.map((el, i) => (
      <NFTCard key={i} NFTData={{ src: el, index: i }} />
    ))}
  </div>
);

export default NFTCardTwo;