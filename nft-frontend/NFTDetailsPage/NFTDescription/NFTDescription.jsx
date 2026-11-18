import { useState } from "react";
import Image from "next/image";
import {
  MdVerified,
  MdCloudUpload,
  MdReportProblem,
  MdOutlineDeleteSweep,
} from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet, FaPercentage } from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { BiTransferAlt, BiDollar } from "react-icons/bi";

// INTERNAL IMPORT
import Style from "./NFTDescription.module.css";
import images from "../../img";
import { Button } from "../../components/componentsindex";
import { NFTTabs } from "../NFTDetailsIndex";

const NFTDescription = () => {
  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("history");

  const historyArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
  ];
  const provananceArray = [
    images.user6,
    images.user7,
    images.user8,
    images.user9,
    images.user10,
  ];
  const ownerArray = [
    images.user1,
    images.user8,
    images.user2,
    images.user6,
    images.user9,
  ];

  const openSocial = () => {
    if (!social) {
      setSocial(true);
      setNFTMenu(false);
    } else {
      setSocial(false);
    }
  };

  const openNFTMenu = () => {
    if (!NFTMenu) {
      setNFTMenu(true);
      setSocial(false);
    } else {
      setNFTMenu(false);
    }
  };

  return (
    <div className={Style.NFTDescription}>
      <div className={Style.NFTDescription_box}>
        {/* part one */}
        <div className={Style.NFTDescription_box_share}>
          <p>Virtual World</p>
          <div className={Style.NFTDescription_box_share_box}>
            <button
              type="button"
              className={Style.NFTDescription_box_share_box_action}
              onClick={openSocial}
              aria-label="Share NFT"
              aria-expanded={social}
            >
              <MdCloudUpload
                className={Style.NFTDescription_box_share_box_icon}
                aria-hidden="true"
              />
            </button>
            {social && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <TiSocialFacebook /> Facebook
                </a>
                <a href="#">
                  <TiSocialLinkedin />
                  Linkedin
                </a>
                <a href="#">
                  <TiSocialTwitter /> Twitter
                </a>
                <a href="#">
                  <TiSocialYoutube /> Youtube
                </a>
                <a href="#">
                  <TiSocialInstagram /> Instagram
                </a>
              </div>
            )}
            <button
              type="button"
              className={Style.NFTDescription_box_share_box_action}
              onClick={openNFTMenu}
              aria-label="More NFT actions"
              aria-expanded={NFTMenu}
            >
              <BsThreeDots
                className={Style.NFTDescription_box_share_box_icon}
                aria-hidden="true"
              />
            </button>
            {NFTMenu && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <BiDollar />
                  Change price
                </a>
                <a href="#">
                  <BiDollar />
                  Change price
                </a>
                <a href="#">
                  <BiTransferAlt />
                  Transfer
                </a>
                <a href="#">
                  <MdReportProblem />
                  Report abuse
                </a>
                <a href="#">
                  <MdOutlineDeleteSweep />
                  Delete item
                </a>
              </div>
            )}
          </div>
        </div>

        {/* part two */}
        <div className={Style.NFTDescription_box_profile}>
          <h1>BearX #3432343</h1>
          <div className={Style.NFTDescription_box_profile_box}>
            <div className={Style.NFTDescription_box_profile_box_left}>
              <Image
                src={images.user1}
                alt="profile"
                width={40}
                height={40}
                className={Style.NFTDescription_box_profile_box_left_img}
              />
              <div className={Style.NFTDescription_box_profile_box_left_info}>
                <small>Creator</small> <br />
                <span>
                  Karli Costa <MdVerified />
                </span>
              </div>
            </div>
            <div className={Style.NFTDescription_box_profile_box_right}>
              <Image
                src={images.user2}
                alt="profile"
                width={40}
                height={40}
                className={Style.NFTDescription_box_profile_box_left_img}
              />
              <div>
                <small>Creator</small> <br />
                <span>
                  Karli Costa <MdVerified />
                </span>
              </div>
            </div>
          </div>

          <div className={Style.NFTDescription_box_profile_box_profile_bidding}>
            <p>
              <MdVerified /> <span>Auction ending in:</span>
            </p>
            <div
              className={
                Style.NFTDescription_box_profile_box_profile_bidding_box_timer
              }
            >
              <div
                className={
                  Style.NFTDescription_box_profile_box_profile_bidding_box_timer_item
                }
              >
                <p>2</p>
                <span>Days</span>
              </div>
              <div
                className={
                  Style.NFTDescription_box_profile_box_profile_bidding_box_timer_item
                }
              >
                <p>22</p>
                <span>hours</span>
              </div>
              <div
                className={
                  Style.NFTDescription_box_profile_box_profile_bidding_box_timer_item
                }
              >
                <p>55</p>
                <span>minutes</span>
              </div>
              <div
                className={
                  Style.NFTDescription_box_profile_box_profile_bidding_box_timer_item
                }
              >
                <p>43</p>
                <span>seconds</span>
              </div>
            </div>

            <div
              className={
                Style.NFTDescription_box_profile_box_profile_bidding_box_price
              }
            >
              <div
                className={
                  Style.NFTDescription_box_profile_box_profile_bidding_box_price_bid
                }
              >
                <small>Current Bid</small>
                <p>
                  1.000 ETH <span>(≈ $3,453.23)</span>
                </p>
              </div>
              <span>[96 in stock]</span>
            </div>

            <div
              className={
                Style.NFTDescription_box_profile_box_profile_bidding_box_button
              }
            >
              <Button
                icon={<FaWallet />}
                btnName="Place a bid"
                handleClick={() => {}}
                classStyle={Style.button}
              />
              <Button
                icon={<FaPercentage />}
                btnName="Mark offer"
                handleClick={() => {}}
                classStyle={Style.button}
              />
            </div>

            <div
              className={
                Style.NFTDescription_box_profile_box_profile_bidding_box_tabs
              }
            >
              <button
                type="button"
                onClick={() => setActiveTab("history")}
                aria-pressed={activeTab === "history"}
              >
                Bid History
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("provenance")}
                aria-pressed={activeTab === "provenance"}
              >
                Provenance
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("owner")}
                aria-pressed={activeTab === "owner"}
              >
                Owner
              </button>
            </div>

            {activeTab === "history" && (
              <div
                className={
                  Style.NFTDescription_box_profile_box_profile_bidding_box_card
                }
              >
                <NFTTabs dataTab={historyArray} />
              </div>
            )}
            {activeTab === "provenance" && (
              <div
                className={
                  Style.NFTDescription_box_profile_box_profile_bidding_box_card
                }
              >
                <NFTTabs dataTab={provananceArray} />
              </div>
            )}
            {activeTab === "owner" && (
              <div
                className={
                  Style.NFTDescription_box_profile_box_profile_bidding_box_card
                }
              >
                <NFTTabs dataTab={ownerArray} icon={<MdVerified />} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDescription;
