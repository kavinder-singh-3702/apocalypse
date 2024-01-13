import React, { useState } from "react";
import bg from "./../../data/images/bg-1.jpg";
import moon from "./../../data/images/moon.png";

import "./index.css";

export default function index() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const moonHandler = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <div className={`page-1 z-1 ${isOverlayVisible ? "overlay" : ""}`}>
      <div className="thunder"></div>
      <img src={bg} alt="" className="z-0 h-screen w-screen" />
      <div className="z-1 flex absolute top-[31vh] right-[6vw] space-x-[4vw] items-center">
        <img
          src={moon}
          alt=""
          className="moon h-[15vh] w-[15vh] z-2 "
          onClick={moonHandler}
        />
        <p className="text-white text-[2vh] font-bold z-[5] flex-wrap whitespace-normal w-[14vw] font-serif italic ">
          {isOverlayVisible
            ? "It's too dark here, can you tap on the moon to wake it."
            : "Now it aglow in space, shines just like your lovely face."}
        </p>
      </div>

      <div className="absolute z-[1] top-[19.5vh] left-[8vw]">
        <p className="text-[5vw] shadow text-[#D3D3D3] font-broken z-[3] font-bold">
          This is a special
        </p>
        <p className="text-[8vw] shadow absolute text-[#A4161A] top-[9.5vh] font-nosifier">
          REQUEST
        </p>
      </div>

      {/* */}
    </div>
  );
}
// absolute flex justify-center bottom-[18vh] item-end h-[10vh] w-screen
