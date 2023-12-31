import React, { useState } from "react";
import "./index.css";
import cloud from "./../../data/images/cloud.svg";

export default function index() {
  const [isThunderVisible, setIsThunderVisible] = useState(true);
  const thunderHandler = () => {
    setIsThunderVisible(!isThunderVisible); // Toggle the state to show/hide overlay
  };
  return (
    <div className="page-2 h-screen w-screen overlay-2">
      <div className="overlay-2">
        <div className="overlay-3 flex items-center">
          <p className="text-white absolute shadow right-[60px] w-[55%] text-[3.9vh] font-nosifier tracking-wide">
            The world is at a turning point, and it's a crucial moment. I need
            your assistance to avoid a big problem that could change everything.
          </p>
        </div>
        {/* <div className="cloud top-[-2vh] left-[0]" onClick={thunderHandler}>
          <img
            src={cloud}
            alt=""
            className="absolute w-[15vw] h-auto  left-[10vw]"
          />
          <img
            src={cloud}
            alt=""
            className="absolute w-[15vw] h-auto  left-[14vw] z-[5]"
          />
          <img
            src={cloud}
            alt=""
            className="absolute w-[15vw] h-auto left-[16vw] z-[4]"
          />
          <img
            src={cloud}
            alt=""
            className="absolute w-[15vw] h-auto left-[19vw] z-[4]"
          />
        </div> */}
        <div className="rain w-[screen] h-screen"></div>
      </div>
    </div>
  );
}
