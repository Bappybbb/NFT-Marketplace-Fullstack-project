//INTRNAL IMPORT
import Style from "./Button..module.css";
import React from "react";

const Button = ({ btnName, handleClick, icon, classStyle }) => {
  return (
    <div className={Style.box}>
      <button className={Style.button} 
         onClick={() => handleClick()}
         >
        {icon}  {btnName}
      </button>
    </div>
  );
};

export default Button;
