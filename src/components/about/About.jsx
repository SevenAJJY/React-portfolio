import React, { useState } from "react";
import aboutImg from "../../assets/sevenajjy.jpeg";
import Info from "./Info";
import "./About.css";
import cv from "../../assets/cv.pdf";
import Skills from "./Skills";
import { SlBriefcase, SlGraduation } from "react-icons/sl";
import { GoCalendar } from "react-icons/go";
import { motion } from "framer-motion";

const About = () => {
  const [toggleState, setToggleState] = useState("edu");

  const toggleTab = (tab) => {
    setToggleState(tab);
  };
  return (
    <main className="container">
      <section className="about section">
        <div className="dots home__port-1"></div>
        <div className="dots home__port-2"></div>
        <div className="dots home__port-3"></div>
        <div className="circle-draw circle-draw__welcome-4 circle-draw--bordered"></div>
        <motion.div
          initial={{ transform: "translateY(-100px)" }}
          animate={{ transform: "translateY(0px)" }}
          exit={{
            transform: "translateY(-100px)",
            transition: { duration: 0.1 },
          }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="section-title"
        >
          <h2 className="section__title">About Me</h2>
          <p className="section__subtitle">Who I am</p>
        </motion.div>
        <div className="about-container grid section-padd">
          <motion.div
            initial={{ transform: "scale(.5)" }}
            animate={{ transform: "scale(1)" }}
            exit={{
              transform: "scale(.5)",
              transition: { duration: 0.1 },
            }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="about__img"
          >
            <img src={aboutImg} alt="its me!" />
          </motion.div>
          <motion.div
            initial={{ transform: "translateY(100px)" }}
            animate={{ transform: "translateY(0px)" }}
            exit={{
              transform: "translateY(100px)",
              transition: { duration: 0.1 },
            }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="about__text"
          >
            <Info />
            <motion.article
              initial={{ transform: "translateY(100px)" }}
              animate={{ transform: "translateY(0px)" }}
              exit={{
                transform: "translateY(100px)",
                transition: { duration: 0.1 },
              }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="about__text-content"
            >
              <p>
                ― Fullstack Developer, experienced in both Front-end and
                Back-end development, my name is yassine ELhajjy and my friends
                call me SevenAJJY.
              </p>
            </motion.article>
            <motion.article
              initial={{ transform: "translateY(100px)" }}
              animate={{ transform: "translateY(0px)" }}
              exit={{
                transform: "translateY(100px)",
                transition: { duration: 0.1 },
              }}
              transition={{ duration: 0.95, ease: "easeOut" }}
              className="about__text-content"
            >
              <p>
                I'm smiling, I'm positive, super motivated, always willing to
                learn. I'm here to build positive relationships, find creative
                solutions to complex problems. I love programming and have a
                good team spirit.
              </p>
            </motion.article>
            <motion.div
              initial={{ transform: "translateY(100px)" }}
              animate={{ transform: "translateY(0px)" }}
              exit={{
                transform: "translateY(100px)",
                transition: { duration: 0.1 },
              }}
              transition={{ duration: 1.01, ease: "easeOut" }}
              className="about-btn"
            >
              <a className="main__btn" href={cv} download="">
                <span className="top-key"></span>
                <span className="text">Download CV</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="skills section">
        <div className="dots home__port-5"></div>
        <div className="dots home__port-6"></div>
        <div className="dots home__port-7"></div>
        <div className="circle-draw circle-draw__welcome-8 circle-draw--bordered"></div>
        <motion.div
          initial={{ transform: "translateY(-100px)" }}
          animate={{ transform: "translateY(0px)" }}
          exit={{
            transform: "translateY(-100px)",
            transition: { duration: 0.1 },
          }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="section-title"
        >
          <h2 className="section__title">Professional Skills</h2>
          <p className="section__subtitle">My talent</p>
        </motion.div>
        <div className="skills__container grid section-padd">
          <Skills />
        </div>
      </section>

      <section className="resume section">
        <div className="dots home__port-9"></div>
        <div className="dots home__port-10"></div>
        <div className="dots home__port-11"></div>
        <div className="circle-draw circle-draw__welcome-12 circle-draw--bordered"></div>
        <div className="section-title">
          <h2 className="section__title title-size">Experience & Education</h2>
          <p className="section__subtitle">My personal journey</p>
        </div>
        <div className="resume__container ">
          <div className="resume__tabs">
            <div
              className={
                toggleState === "edu"
                  ? "resume__button tabs-active"
                  : "resume__button"
              }
              onClick={() => toggleTab("edu")}
            >
              <SlGraduation /> Education
            </div>

            <div
              className={
                toggleState === "exp"
                  ? "resume__button tabs-active"
                  : "resume__button"
              }
              onClick={() => toggleTab("exp")}
            >
              <SlBriefcase /> Experience
            </div>
          </div>

          <div className="resume__sections">
            <motion.div
              layout
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.6 }}
              exit={{ opacity: 0.8, scale: 0.6 }}
              transition={{ duration: 0.3 }}
              className={
                toggleState === "edu"
                  ? "resume__content resume__content-active"
                  : "resume__content"
              }
            >
              <div className="resume__data">
                <div>
                  <h3 className="resume__title">
                    DTS en Développement Multimédia
                  </h3>
                  <span className="resume__subtitle">OFPPT - Morocco</span>
                  <div className="resume__calender">
                    <GoCalendar /> 2020 - 2022
                  </div>
                </div>

                <div>
                  <span className="resume__rounder"></span>
                  <span className="resume__line"></span>
                </div>
              </div>

              <div className="resume__data">
                <div></div>
                <div>
                  <span className="resume__rounder"></span>
                  <span className="resume__line"></span>
                </div>
                <div>
                  <h3 className="resume__title">Baccalauréat SVT</h3>
                  <span className="resume__subtitle">
                    Lycée Alqods - Morocco
                  </span>
                  <div className="resume__calender">
                    <GoCalendar /> 2019 - 2020
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              layout
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.6 }}
              exit={{ opacity: 0.8, scale: 0.6 }}
              transition={{ duration: 0.3 }}
              className={
                toggleState === "exp"
                  ? "resume__content resume__content-active"
                  : "resume__content"
              }
            >
              <div className="resume__data">
                <div>
                  <h3 className="resume__title">Freelancer</h3>
                  <span className="resume__subtitle">Morocco</span>
                  <div className="resume__calender">
                    <GoCalendar /> 2022 - present
                  </div>
                </div>

                <div>
                  <span className="resume__rounder"></span>
                  <span className="resume__line"></span>
                </div>
              </div>

              <div className="resume__data">
                <div></div>
                <div>
                  <span className="resume__rounder"></span>
                  <span className="resume__line"></span>
                </div>
                <div>
                  <h3 className="resume__title">Stagiaire</h3>
                  <span className="resume__subtitle">Radeec - Morocco</span>
                  <div className="resume__calender">
                    <GoCalendar /> 2022
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
