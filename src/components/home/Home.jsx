import React from "react";
import "./Home.css";
import homeImg from "../../assets/sevenajjy.jpeg";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="home section">
      <div className="dots home__port"></div>
      <div className="dots home__port"></div>
      <div className="dots home__port"></div>
      <div className="circle-draw circle-draw__welcome circle-draw--bordered"></div>
      <div className="circle-draw circle-draw__welcome circle-draw--bordered"></div>
      <div className="circle-draw circle-draw__welcome circle-draw--bordered"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="home__container"
      >
        <motion.div
          initial={{ transform: "translateY(100px)" }}
          animate={{ transform: "translateY(0px)" }}
          exit={{
            transform: "translateY(100px)",
            transition: { duration: 0.1 },
          }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="welcome__portrait-container"
        >
          <div className="mask-container">
            <svg
              style={{ stroke: "#a1a1a1", fill: "none" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 477.49 790"
              width="160"
              height="160"
              className="picture__frame picture__frame--animation"
            >
              <path d="m145.6.5h248c13.35,0,24.2,10.84,24.2,24.2v610c0,84.68-68.75,153.43-153.43,153.43H19.36c-10.41,0-18.86-8.45-18.86-18.86V145.6C.5,65.52,65.52.5,145.6.5Z"></path>
            </svg>
            <div className="picture__colored picture"></div>
          </div>
        </motion.div>
        <motion.div
          initial={{ transform: "translateY(-100px)" }}
          animate={{ transform: "translateY(0px)" }}
          exit={{
            transform: "translateY(-100px)",
            transition: { duration: 0.1 },
          }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="home__text"
        >
          <span style={{ display: "flex" }}>
            Hi there ! I'm{" "}
            <span style={{ color: "var(--main-color)" }}>SevenAJJY</span>.
          </span>
          <h1>Portfolio</h1>
          <p>of a Creative Freelancer & Fullstack Developer ―</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
