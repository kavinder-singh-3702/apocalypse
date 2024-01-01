import React, { useState } from "react";
import "./index.css";
import cloud from "./../../data/images/cloud.svg";

export default function index() {
  const [isRainVisible, setIsRainVisible] = useState(true);
  const rainHandler = () => {
    setIsRainVisible(!isRainVisible); // Toggle the state to show/hide overlay
  };

  return (
    <div className="page-2 h-screen w-screen overlay-2">
      <div className={`${isRainVisible ? "overlay-2" : ""}`}>
        <div className="overlay-3 flex items-center">
          <p className="text-white absolute shadow right-[60px] w-[55%] text-[3.9vh] font-nosifier tracking-wide">
            The world is at a turning point, and it's a crucial moment. I need
            your assistance to avoid a big problem that could change everything.
          </p>
        </div>

        <div
          className={`${isRainVisible ? "rain" : ""} w-[screen] h-screen`}
        ></div>
        <div className={`${isRainVisible ? "lightning" : ""}`}></div>
      </div>

      <div className="absolute z-10 top-[5vh] left-[3vw]">
        <p className=" text-white text-[5vh] font-serif italic shadow">
          When the world feels dim,
        </p>
        {!isRainVisible && (
          <div>
            <p className=" text-white text-[5vh] font-serif italic shadow">
              I'll shine bright for you.
            </p>
          </div>
        )}

        <button className="button-82-pushable right-0" role="button">
          <span className="button-82-shadow"></span>
          <span className="button-82-edge"></span>
          <span className="button-82-front text" onClick={rainHandler}>
            click me
          </span>
        </button>
      </div>
    </div>
  );
}
