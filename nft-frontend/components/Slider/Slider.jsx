import React, { useRef, useState } from "react";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import Style from "./Slider.module.css";
import SliderCard from "./SliderCard/SliderCard";
import images from "../../img";

const Slider = () => {
  const sliderArray = [
    { background: images.creatorbackground1, user: images.user1 },
    { background: images.creatorbackground2, user: images.user2 },
    { background: images.creatorbackground3, user: images.user3 },
    { background: images.creatorbackground4, user: images.user4 },
    { background: images.creatorbackground5, user: images.user5 },
    { background: images.creatorbackground6, user: images.user6 },
    { background: images.creatorbackground7, user: images.user7 },
    { background: images.creatorbackground8, user: images.user8 },
    { background: images.creatorbackground9, user: images.user9 },
    { background: images.creatorbackground10, user: images.user10 },
  ];

  const slider = useRef(null);
  const drag = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (event) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;

    const element = event.currentTarget;
    drag.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: element.scrollLeft,
      moved: false,
    };
    element.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    const activeDrag = drag.current;
    if (!activeDrag || activeDrag.pointerId !== event.pointerId) return;

    const distance = event.clientX - activeDrag.startX;
    if (!activeDrag.moved && Math.abs(distance) < 4) return;

    activeDrag.moved = true;
    setIsDragging(true);
    event.preventDefault();
    event.currentTarget.scrollLeft = activeDrag.startScrollLeft - distance;
  };

  const stopDragging = (event) => {
    if (!drag.current || drag.current.pointerId !== event.pointerId) return;

    drag.current = null;
    setIsDragging(false);
  };

  const handleScroll = (direction) => {
    const element = slider.current;
    if (!element) return;

    const card = element.firstElementChild;
    if (!card) return;

    const gap =
      Number.parseFloat(window.getComputedStyle(element).columnGap) || 0;
    const scrollAmount = card.getBoundingClientRect().width + gap;

    element.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className={Style.lider} aria-labelledby="nft-slider-title">
      <div className={Style.lider_box}>
        <div className={Style.lider_heading}>
          <div className={Style.lider_heading_copy}>
            <span className={Style.lider_eyebrow}>CURATED DIGITAL ART</span>
            <h2 id="nft-slider-title">Explore NFT Videos</h2>
            <p>One-of-a-kind motion art, collected in one place.</p>
          </div>
          <div className={Style.lider_controls}>
            <span className={Style.lider_count}>
              <strong>{String(sliderArray.length).padStart(2, "0")}</strong>
              <span>COLLECTIBLES</span>
            </span>
            <div className={Style.lider_box_button_btn}>
              <button
                type="button"
                aria-label="Scroll to previous NFTs"
                className={Style.lider_box_button_btn_icon}
                onClick={() => handleScroll("left")}
              >
                <TiArrowLeftThick />
              </button>
              <button
                type="button"
                aria-label="Scroll to next NFTs"
                className={Style.lider_box_button_btn_icon}
                onClick={() => handleScroll("right")}
              >
                <TiArrowRightThick />
              </button>
            </div>
          </div>
        </div>

        <div
          className={`${Style.slider_box_items} ${
            isDragging ? Style.slider_box_items_dragging : ""
          }`}
          ref={slider}
          role="region"
          aria-label="NFT video cards"
          tabIndex={0}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
          onLostPointerCapture={stopDragging}
        >
          {sliderArray.map((image, index) => (
            <SliderCard
              key={index} // key হিসেবে index ব্যবহার করা হলো
              el={image} // পুরো image অবজেক্টটি el হিসেবে পাঠানো হলো
              i={index}
              nftId={index + 1}
              currentBid="1.000 ETH"
              total={100}
              current={index + 1}
              timeLeft="3h :15m :20s"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
