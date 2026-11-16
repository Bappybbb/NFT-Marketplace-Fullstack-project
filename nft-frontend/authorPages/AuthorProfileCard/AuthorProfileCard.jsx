import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  MdVerified,
  MdCloudUpload,
  MdOutlineReportProblem,
} from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./AuthorProfileCard.module.css";
import images from "../../img";
import { Button } from "../../components/componentsindex";

const AuthorProfileCard = () => {
  const [share, setShare] = useState(false);
  const [report, setReport] = useState(false);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  // copy function (navigation -> navigator, useRef instead of getElementById)
  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(inputRef.current.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      inputRef.current.select();
      document.execCommand("copy");
    }
  };

  const openShare = () => {
    setShare((prev) => !prev);
    setReport(false);
  };

  const openReport = () => {
    setReport((prev) => !prev);
    setShare(false);
  };

  return (
    <div className={Style.AuthorProfileCard}>
      <div className={Style.AuthorProfileCard_box}>
        <div className={Style.AuthorProfileCard_box_img}>
          <Image
            src={images.user1} /* change to the image name you have in /img */
            className={Style.AuthorProfileCard_box_img_img}
            alt="Author profile"
            width={220}
            height={220}
          />
        </div>

        <div className={Style.AuthorProfileCard_box_info}>
          <h2>
            Dony Herrera
            <span className={Style.AuthorProfileCard_box_info_verified}>
              <MdVerified />
            </span>
          </h2>

          <div className={Style.AuthorProfileCard_box_info_address}>
            <input
              type="text"
              value="0x40955009D88JK98so88...AL34454"
              id="myInput"
              ref={inputRef}
              readOnly
            />
            <FiCopy
              onClick={copyAddress}
              className={Style.AuthorProfileCard_box_info_address_icon}
              title="Copy address"
            />
            {copied && (
              <small
                className={Style.AuthorProfileCard_box_info_address_copied}
              >
                Copied!
              </small>
            )}
          </div>

          <div>
            <p className={Style.AuthorProfileCard_box_info_bio}>
              Punk #5455 / An OG Cryptopunk Collector, honored of NTS.
              Contributing to @ether_cards, an NFT Monetizing Platform.
            </p>
            <div className={Style.AuthorProfileCard_box_info_social}>
              <a href="#" aria-label="Facebook">
                <TiSocialFacebook />
              </a>
              <a href="#" aria-label="LinkedIn">
                <TiSocialLinkedin />
              </a>
              <a href="#" aria-label="Instagram">
                <TiSocialInstagram />
              </a>
              <a href="#" aria-label="Twitter">
                <TiSocialTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className={Style.AuthorProfileCard_box_share}>
          <Button btnName="Follow" handleClick={() => {}} />

          <MdCloudUpload
            onClick={openShare}
            className={Style.AuthorProfileCard_box_share_icon}
          />
          {share && (
            <div className={Style.AuthorProfileCard_box_share_upload}>
              <p>
                <span>
                  <TiSocialFacebook />
                </span>{" "}
                Facebook
              </p>
              <p>
                <span>
                  <TiSocialTwitter />
                </span>{" "}
                Twitter
              </p>
              <p>
                <span>
                  <TiSocialInstagram />
                </span>{" "}
                Instagram
              </p>
              <p>
                <span>
                  <TiSocialLinkedin />
                </span>{" "}
                LinkedIn
              </p>
            </div>
          )}

          <BsThreeDots
            onClick={openReport}
            className={Style.AuthorProfileCard_box_share_icon}
          />
          {report && (
            <p className={Style.AuthorProfileCard_box_share_report}>
              <span>
                <MdOutlineReportProblem />
              </span>{" "}
              Report abuse
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorProfileCard;
