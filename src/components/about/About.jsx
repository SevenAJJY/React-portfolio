import React, { useState } from "react";
import aboutImg from "../../assets/sevenajjy.jpeg";
import Info from "./Info";
import "./About.css";
import cv from "../../assets/cv.pdf";
import Skills from "./Skills";
import { SlBriefcase, SlGraduation } from "react-icons/sl";
import { GoCalendar } from "react-icons/go";

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
        <div className="section-title">
          <h2 className="section__title">About Me</h2>
          <p className="section__subtitle">Who I am</p>
        </div>
        <div className="about-container grid section-padd">
          <div className="about__img">
            <img src={aboutImg} alt="its me!" />
          </div>
          <div className="about__text">
            <Info />
            <article className="about__text-content">
              <p>
                ― Fullstack Developer, experienced in both Front-end and
                Back-end development, my name is yassine ELhajjy and my friends
                call me SevenAJJY.
              </p>
            </article>
            <article className="about__text-content">
              <p>
                I'm smiling, I'm positive, super motivated, always willing to
                learn. I'm here to build positive relationships, find creative
                solutions to complex problems. I love programming and have a
                good team spirit.
              </p>
            </article>
            <div className="about-btn">
              <a className="about__btn" href={cv} download="s">
                <span className="top-key"></span>
                <span className="text">Download CV</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="skills section">
        <div className="dots home__port-5"></div>
        <div className="dots home__port-6"></div>
        <div className="dots home__port-7"></div>
        <div className="circle-draw circle-draw__welcome-8 circle-draw--bordered"></div>
        <div className="section-title">
          <h2 className="section__title">Skills</h2>
          <p className="section__subtitle">My technical level</p>
        </div>
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
            <div
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
            </div>

            <div
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
                    <GoCalendar /> 2021 - present
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
