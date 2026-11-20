 
// const Button = ({ btnName, handleClick, icon, classStyle }) => {
//   return (
//     <div className={Style.box}>
//       <button className={Style.button} 
//          onClick={() => handleClick()}
//          >
//         {icon}  {btnName}
//       </button>
//     </div>
//   );
// };

// export default Button;


import React from "react";
import Style from "./Button..module.css";
const Button = ({ btnName, handleClick, icon, classStyle }) => {
  return (
    <div className={Style.box}>
      {/* 👈 এখানে handleClick && handleClick() করা হয়েছে */}
      <button
        className={`${Style.button} ${classStyle || ""}`}
        onClick={() => handleClick && handleClick()}
      >
        {icon} {btnName}
      </button>
    </div>
  );
};

export default Button;