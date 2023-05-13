import React from "react";
import "./Contact.css";

import { TbBrandGithub, TbArrowRightRhombus } from "react-icons/tb";
import { RiMailSendLine } from "react-icons/ri";
import { FiSend, FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact section">
      <div className="dots home__port"></div>
      <div
        className="dots home__port"
        style={{ bottom: "-15%", left: "0%" }}
      ></div>
      <div className="dots home__port"></div>
      <div className="circle-draw circle-draw__welcome circle-draw--bordered"></div>
      <div className="section-title">
        <h2 className="section__title title-size">Get in touch</h2>
        <p className="section__subtitle">Contact</p>
      </div>
      <div className="contact__container container grid section-padd">
        <div className="contact__data">
          <h3 className="contact__title">
            {" "}
            <span style={{ color: "var(--main-color-light)" }}>―</span> Let's
            talk!
          </h3>
          <p className="contact__desc">
            If to here any work from me or any types of queries , you can send
            me a message from here . It's my pleasure to help you.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <RiMailSendLine className="info__icon" />
              <div>
                <a
                  href="mailto:yassine.elhajjy@gmail.com?subject=Contact from Portfolio!"
                  target="_blank"
                  rel="noreferrer"
                  className="info__title"
                >
                  Mail Me <TbArrowRightRhombus className="info__title-icon" />
                </a>
                <span className="info__desc">yassine.elhajjy@gmail.com</span>
              </div>
            </div>

            <div className="info__item">
              <FiPhoneCall className="info__icon" />
              <div>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=212709239818&text=Hello,more information!"
                  className="info__title"
                >
                  Call Me <TbArrowRightRhombus className="info__title-icon" />
                </a>
                <span className="info__desc">+212709239818</span>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://www.instagram.com/yassine_elhajjy/"
              className="contact__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/elhajjy.yassine"
              className="contact__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://github.com/SevenAJJY"
              className="contact__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <TbBrandGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yassineelhajjy/"
              className="contact__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <form className="contact__form">
          <h3 className="contact__title">
            {" "}
            <span style={{ color: "var(--main-color-light)" }}>―</span> Send us
            a message
          </h3>
          <div className="input__box">
            <input type="text" name="fullname" required />
            <span>Full name</span>
          </div>
          <div className="input__box">
            <input type="text" name="email" required />
            <span>Email</span>
          </div>
          <div className="input__box">
            <input type="text" name="subject" required />
            <span>Subject</span>
          </div>
          <div className="input__box">
            <textarea name="message" required></textarea>
            <span>Write your message here</span>
          </div>
          <button type="submit" className="about__btn">
            <span className="top-key"></span>
            <span className="text">Send Now</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
