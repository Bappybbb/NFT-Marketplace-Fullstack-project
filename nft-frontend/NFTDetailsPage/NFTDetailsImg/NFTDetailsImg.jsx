import { useState } from "react";
import Image from "next/image";
import { BsImages } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

// INTERNAL IMPORT
import Style from "./NFTDetailsImg.module.css";
import images from "../../img";

const NFTDetailsImg = () => {
  const [description, setDescription] = useState(true);
  const [details, setDetails] = useState(true);
  const [like, setLike] = useState(false);

  const openDescription = () => setDescription((prev) => !prev);
  const openDetails = () => setDetails((prev) => !prev);
  const likeNFT = () => setLike((prev) => !prev);

  return (
    <div className={Style.NFTDetailsImg}>
      <div className={Style.NFTDetailsImg_box}>
        <div className={Style.NFTDetailsImg_box_NFT}>
          <div className={Style.NFTDetailsImg_box_NFT_like}>
            <BsImages
              className={Style.NFTDetailsImg_box_NFT_like_icon}
              aria-hidden="true"
            />
            <button
              type="button"
              className={Style.NFTDetailsImg_box_NFT_like_button}
              onClick={likeNFT}
              aria-label={like ? "Unlike this NFT" : "Like this NFT"}
              aria-pressed={like}
            >
              {like ? (
                <AiFillHeart
                  className={Style.NFTDetailsImg_box_NFT_like_icon}
                />
              ) : (
                <AiOutlineHeart
                  className={Style.NFTDetailsImg_box_NFT_like_icon}
                />
              )}
              <span>23</span>
            </button>
          </div>
          <div className={Style.NFTDetailsImg_box_NFT_img}>
            <Image
              src={images.nft_image_1}
              className={Style.NFTDetailsImg_box_NFT_img_img}
              alt="NFT image"
              width={700}
              height={800}
              sizes="(max-width: 40em) 100vw, (max-width: 64em) 88vw, 45vw"
            />
          </div>
        </div>
        {/* Description */}
        <button
          type="button"
          className={Style.NFTDetailsImg_box_description}
          onClick={openDescription}
          aria-expanded={description}
          aria-controls="nft-description"
        >
          <p>Description</p>
          {description ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </button>
        {description && (
          <div
            className={Style.NFTDetailsImg_box_description_box}
            id="nft-description"
          >
            <p>
              tattooed Kitty Gang (&quot;TKG&quot;) is a collection of 666
              badass kitty gangstars, with symbol of tattoos, living in the
              Proud Kitty gang. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Impedit, architecto.
            </p>
          </div>
        )}
        {/* Details */}
        <button
          type="button"
          className={Style.NFTDetailsImg_box_details}
          onClick={openDetails}
          aria-expanded={details}
          aria-controls="nft-details"
        >
          <p>Details</p>
          {details ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </button>
        {details && (
          <div
            className={Style.NFTDetailsImg_box_details_box}
            id="nft-details"
          >
            <small>20000 x 2000 px.IMAGE(685KB)</small>
            <p>
              <small>Contract Address</small>
              <br />
              <br />
              0x894543KJFEFNK5403594350845uf458fs9
            </p>
            <p>
              <small>Token ID</small>
              18341498099
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NFTDetailsImg;
