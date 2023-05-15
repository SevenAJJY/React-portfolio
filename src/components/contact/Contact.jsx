import React, { useState, useRef } from "react";
import "./Contact.css";

import { TbBrandGithub, TbArrowRightRhombus } from "react-icons/tb";
import { RiMailSendLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jjo2pn8",
        "template_tmk1ldd",
        form.current,
        "uYn0JKCEK4zVmKXh-"
      )
      .then(
        (result) => {
          setMessage("Your message has been sent");
        },
        (error) => {
          setMessage("Error Sending message");
        }
      );
    setShowAlert(!showAlert);
    e.target.reset();
  };

  return (
    <section className="contact section">
      <div className="dots home__port"></div>
      <div
        className="dots home__port"
        style={{ bottom: "-15%", left: "0%" }}
      ></div>
      <div className="dots home__port"></div>
      <div className="circle-draw circle-draw__welcome circle-draw--bordered"></div>
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
        <h2 className="section__title title-size">Get in touch</h2>
        <p className="section__subtitle">Contact</p>
      </motion.div>
      <div className="contact__container container grid section-padd">
        <div className="contact__data">
          <motion.h3
            initial={{ transform: "translateY(100px)" }}
            animate={{ transform: "translateY(0px)" }}
            exit={{
              transform: "translateY(100px)",
              transition: { duration: 0.1 },
            }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="contact__title"
          >
            {" "}
            <span style={{ color: "var(--main-color-light)" }}>―</span> Let's
            talk!
          </motion.h3>
          <motion.p
            initial={{ transform: "translateY(100px)" }}
            animate={{ transform: "translateY(0px)" }}
            exit={{
              transform: "translateY(100px)",
              transition: { duration: 0.1 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="contact__desc"
          >
            If to here any work from me or any types of queries , you can send
            me a message from here . It's my pleasure to help you.
          </motion.p>

          <motion.div
            initial={{ transform: "translateY(100px)" }}
            animate={{ transform: "translateY(0px)" }}
            exit={{
              transform: "translateY(100px)",
              transition: { duration: 0.1 },
            }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="contact__info"
          >
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

            <motion.div
              initial={{ transform: "translateY(100px)" }}
              animate={{ transform: "translateY(0px)" }}
              exit={{
                transform: "translateY(100px)",
                transition: { duration: 0.1 },
              }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="info__item"
            >
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
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ transform: "translateY(100px)" }}
            animate={{ transform: "translateY(0px)" }}
            exit={{
              transform: "translateY(100px)",
              transition: { duration: 0.1 },
            }}
            transition={{ duration: 0.95, ease: "easeOut" }}
            className="contact__socials"
          >
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
          </motion.div>
        </div>

        <form ref={form} className="contact__form" onSubmit={sendEmail}>
          <motion.h3
            initial={{ transform: "translateY(100px)" }}
            animate={{ transform: "translateY(0px)" }}
            exit={{
              transform: "translateY(100px)",
              transition: { duration: 0.1 },
            }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="contact__title"
          >
            {" "}
            <span style={{ color: "var(--main-color-light)" }}>―</span> Send us
            a message
          </motion.h3>
          <motion.div
            initial={{ transform: "translateY(100px)" }}
            animate={{ transform: "translateY(0px)" }}
            exit={{
              transform: "translateY(100px)",
              transition: { duration: 0.1 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="input__box"
          >
            <input type="text" name="fullname" required />
            <span>Full name</span>
          </motion.div>
          <motion.div
            initial={{ transform: "translateY(100px)" }}
            animate={{ transform: "translateY(0px)" }}
            exit={{
              transform: "translateY(100px)",
              transition: { duration: 0.1 },
            }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="input__box"
          >
            <input type="text" name="email" required />
            <span>Email</span>
          </motion.div>
          <motion.div
            initial={{ transform: "translateY(100px)" }}
            animate={{ transform: "translateY(0px)" }}
            exit={{
              transform: "translateY(100px)",
              transition: { duration: 0.1 },
            }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="input__box"
          >
            <input type="text" name="subject" required />
            <span>Subject</span>
          </motion.div>
          <motion.div
            initial={{ transform: "translateY(100px)" }}
            animate={{ transform: "translateY(0px)" }}
            exit={{
              transform: "translateY(100px)",
              transition: { duration: 0.1 },
            }}
            transition={{ duration: 0.95, ease: "easeOut" }}
            className="input__box"
          >
            <textarea name="message" required></textarea>
            <span>Write your message here</span>
          </motion.div>
          <motion.button
            initial={{ transform: "translateY(100px)" }}
            animate={{ transform: "translateY(0px)" }}
            exit={{
              transform: "translateY(100px)",
              transition: { duration: 0.1 },
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            type="submit"
            className="about__btn"
          >
            <span className="top-key"></span>
            <span className="text">Send Now</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </motion.button>
        </form>

        <div
          className={showAlert ? "alert__box show__alert" : "alert__box"}
          onClick={() => setShowAlert(!showAlert)}
        >
          <div className="alert__info" onClick={() => setShowAlert(!showAlert)}>
            <button className="alert__close">
              <CgClose />
            </button>
            <div className="success-animation">
              <svg
                className="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                <circle
                  className="checkmark__circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  className="checkmark__check"
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
            </div>
            <h1 className="alert__title">Thank you!</h1>
            {message && <span className="alert__message">{message}</span>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
