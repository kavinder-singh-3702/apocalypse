import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import cloud from "./../../data/images/cloud.svg";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";

export default function index() {
  const [isRainVisible, setIsRainVisible] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const rainHandler = () => {
    setIsRainVisible(!isRainVisible); // Toggle the state to show/hide overlay
  };

  return (
    <div className="page-2 h-screen w-screen overlay-2">
      <div className={`${isRainVisible ? "overlay-2" : ""}`}>
        <motion.div
          className="overlay-3 flex items-center"
          initial={{ x: 400, opacity: 0, scale: 0.5 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            initial={{ x: 200, opacity: 0, scale: 0 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-white rounded-lg absolute shadow right-[60px] w-[55%] text-[3.9vh] font-nosifier tracking-wide"
          >
            The world is at a turning point, and it's a crucial moment. I need
            your assistance to avoid a big problem that could change everything.
          </motion.p>
        </motion.div>

        <div
          className={`${isRainVisible ? "rain" : ""} w-[screen] h-screen`}
        ></div>
        <div className={`${isRainVisible ? "lightning" : ""}`}></div>
      </div>
      <AnimatePresence>
        <motion.div
          className="absolute z-10 top-[5vh] left-[3vw]"
          initial={{ y: 300, opacity: 0, scale: 0.5, rotate: 10 }}
          whileInView={{ y: 0, opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
        >
          <p className=" text-white text-[5vh] font-serif italic shadow">
            When the world feels dim,
          </p>
          {!isRainVisible && (
            <div>
              <p className=" text-white text-[5vh] font-serif italic shadow pb-5">
                I'll shine bright for you.
              </p>
            </div>
          )}

          <motion.button
            className={`button-82-pushable right-0 ${
              !isRainVisible ? "opacity-30" : ""
            }`}
            role="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              rotate: [0, -10, 10, -10, 10, 0],
            }}
            transition={{
              duration: 0.5,
              delay: 3,
              loop: Infinity,
            }}
          >
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text" onClick={rainHandler}>
              click me
            </span>
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
