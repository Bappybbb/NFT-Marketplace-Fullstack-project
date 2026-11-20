import React, { useState, useCallback } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy } from "react-icons/md";
import { TiSocialTwitter, TiSocialInstagram } from "react-icons/ti";

// INTERNAL IMPORT
import Style from "./Form.module.css";
import Button from "../../components/Button/Button"; // adjust path to your Button

const Form = () => {
  const [filter, setFilter] = useState(null);

  return (
    <div className={Style.From}>
      <div className={Style.From_box}>
        <form>
          <div className={Style.From_box_input}>
            <label htmlFor="name">UserName</label>
            <input
              type="text"
              id="name"
              placeholder="bappy hasan"
              className={Style.From_box_input_userName}
            />
          </div>

          <div className={Style.From_box_input}>
            <label htmlFor="email">Email</label>
            <div className={Style.From_box_input_box}>
              <div className={Style.From_box_input_box_icon}>
                <HiOutlineMail />
              </div>
              <input type="text" id="email" placeholder="Email*" />
            </div>
          </div>

          <div className={Style.From_box_input}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              cols="30"
              rows="6"
              placeholder="something about yourself in few words"
            />
          </div>

          <div className={Style.From_box_input}>
            <label htmlFor="website">Website</label>
            <div className={Style.From_box_input_box}>
              <div className={Style.From_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input type="text" id="website" placeholder="website" />
            </div>
          </div>

          <div className={Style.From_box_input_social}>
            <div className={Style.From_box_input}>
              <label htmlFor="twitter">Twitter</label>
              <div className={Style.From_box_input_box}>
                <div className={Style.From_box_input_box_icon}>
                  <TiSocialTwitter />
                </div>
                <input
                  type="text"
                  id="twitter"
                  placeholder="http://bappy-hasan"
                />
              </div>
            </div>

            <div className={Style.From_box_input}>
              <label htmlFor="instagram">Instagram</label>
              <div className={Style.From_box_input_box}>
                <div className={Style.From_box_input_box_icon}>
                  <TiSocialInstagram />
                </div>
                <input
                  type="text"
                  id="instagram"
                  placeholder="http://bappy-hasan"
                />
              </div>
            </div>
          </div>

          <div className={Style.From_box_input}>
            <label htmlFor="wallet">Wallet Address</label>
            <div className={Style.From_box_input_box}>
              <div className={Style.From_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input
                type="text"
                id="wallet"
                placeholder="0x4uFJEH348Dh905Fhe395kj045uHIO"
              />
              <div className={Style.From_box_input_box_icon}>
                <MdOutlineContentCopy />
              </div>
            </div>
          </div>

          <div className={Style.From_box_btn}>
            <Button
              btnName="Upload profile"
              handleClick={() => {}}
              className={Style.button}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
