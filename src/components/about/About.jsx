import React from "react";
import aboutImg from "../../assets/sevenajjy.jpeg";
import Info from "./Info";
import "./About.css";
import cv from "../../assets/cv.pdf";
import Skills from "./Skills";

const About = () => {
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
    </main>
  );
};

export default About;
