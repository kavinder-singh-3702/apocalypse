import React from "react";
import "./index.css";

export default function index() {
  return (
    <div className="container flex h-screen w-screen">
      <div className="w-screen flex flex-col justify-start top-[7vh] relative items-center">
        {/* <p className="flex justify-center items-center text-[10vh] font-vanilla text-red-500">
          Will you be my valentine?
        </p> */}
        {/* <img
          src="https://i.postimg.cc/pdNqPxx1/milk-and-mocha-cute.gif"
          alt=""
          className=" absolute w-[30vw] h-auto top-[12vh]"
        /> */}
        {/* 
        <button>YES</button>
        <button>NO</button> */}
      </div>
    </div>
  );
}

// const moveButton = () => {
//   const noButton = document.getElementById("noButton");
//   const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
//   const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
//   noButton.style.left = `${x}px`;
//   noButton.style.top = `${y}px`;
// };
