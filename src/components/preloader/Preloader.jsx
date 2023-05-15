import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="pre-loader">
      <div className="logo">
        <a href="https://github.com/SevenAJJY">
          seven<span>ajjy</span>
        </a>
      </div>
      <div className="loader"></div>
    </div>
  );
};

export default Preloader;
