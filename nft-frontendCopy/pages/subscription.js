import React from "react";

//INTERNAL IMPORT
import Style from "../styles/subscription.module.css";
import Subscription from "../Subscription/Subscription.jsx";

const SubscriptionPage = () => {
  const subscriptionArray = [
    {
      plan: "STARTER",
      price: "$5/mo",
      popular: "",
      service: ["Automated reporting", "Faster processing", "Customizations"],
      info: "Perfect for individuals and small teams who are just getting started.",
    },
    {
      plan: "BASIC",
      price: "$15/mo",
      popular: "POPULAR",
      service: [
        "Everything in Starter",
        "100 Builds",
        "Progress Reports",
        "Premium Support",
      ],
      info: "Best for growing teams that need more power and support.",
    },
    {
      plan: "PLUS",
      price: "$25/mo",
      popular: "",
      service: [
        "Everything in Basic",
        "Unlimited Builds",
        "Advanced Analytics",
        "Company Evaluations",
      ],
      info: "Built for larger companies with advanced reporting needs.",
    },
  ];

  return (
    <div className={Style.subscription}>
      <div className={Style.subscription_box}>
        <div className={Style.subscription_box_info}>
          <h1>💎 Subscription</h1>
         </div>

        <div className={Style.subscription_box_box}>
          {subscriptionArray.map((el, i) => (
            <Subscription key={i + 1} i={i} el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
