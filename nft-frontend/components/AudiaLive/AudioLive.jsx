import React from "react";

// internal import
import Style from "./AudioLive.module.css";
import AudioCard from "./AudioCard/AudioCard.jsx";
import AudioCardSmall from "./AudioCardSmall/AudioCardSmall.jsx";

const AudioLive = () => {
  return (
    <div className={Style.audioLive}>
      <div className={Style.audioLive_box}>
        {/* Left column: two big cards side by side */}
        <div className={Style.audioLive_box_left}>
          <AudioCard />
          <AudioCard />
        </div>

        {/* Right column: three small cards stacked */}
        <div className={Style.audioLive_box_right}>
          <AudioCardSmall />
          <AudioCardSmall />
          <AudioCardSmall />
        </div>
      </div>
    </div>
  );
};

export default AudioLive;
