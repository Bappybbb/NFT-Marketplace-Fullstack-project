import React from "react";
import { TiTick } from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./Subscription.module.css";
import { Button } from "../components/componentsindex.js";

const Subscription = ({ el, i }) => {
  return (
    <div
      className={`${Style.SubscriptionBox} ${
        el.popular ? Style.SubscriptionBox_popular : ""
      }`}
    >
      <div className={Style.SubscriptionBox_box}>
        <span className={Style.SubscriptionBox_box_span}>{el.plan}</span>

        {el.popular && (
          <small className={Style.SubscriptionBox_box_small}>
            {el.popular}
          </small>
        )}

        <p className={Style.SubscriptionBox_box_para}>{el.price}</p>

        {el.info && <p className={Style.SubscriptionBox_box_text}>{el.info}</p>}

        <div className={Style.SubscriptionBox_box_info}>
          {el.service.map((item, idx) => (
            <p className={Style.SubscriptionBox_box_info_para} key={idx + 1}>
              <span>
                <TiTick />
              </span>
              {item}
            </p>
          ))}
        </div>

        <div className={Style.button}>
          <Button btnName="Submit" handleClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
