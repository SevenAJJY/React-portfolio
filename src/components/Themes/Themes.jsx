import React, { useEffect, useState } from "react";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { BsSun, BsMoon } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import "./Themes.css";

const hueValue = localStorage.getItem("_hue")
  ? localStorage.getItem("_hue")
  : 272;

const themeDarkLight =
  localStorage.getItem("_theme-dark") === "false" ? false : true;

const Themes = () => {
  const [hue, setHue] = useState(hueValue);
  const [checkbox, setCheckbox] = useState(themeDarkLight);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const html = document.querySelector("html");
    localStorage.setItem("_hue", hue);
    localStorage.setItem("_theme-dark", checkbox);
    html.style.setProperty("--hue", hue);
    if (checkbox) {
      document.body.classList.add("theme-dark");
    } else {
      document.body.classList.remove("theme-dark");
    }
  }, [hue, checkbox]);
  return (
    <div className={isOpen ? "style__switcher open" : "style__switcher"}>
      <button
        className="style__switcher-toggler"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <IoClose className="style__switcher-toggler-icon" />
        ) : (
          <HiOutlineCog6Tooth className="style__switcher-toggler-icon" />
        )}
      </button>
      <div className="style__switcher-main">
        <h2>
          <span style={{ color: "var(--main-color", fontWeight: 700 }}>―</span>{" "}
          Style Switcher
        </h2>
        <div className="style__switcher-item">
          <p>Theme Color</p>
          <div className="theme__color">
            <input
              onChange={(e) => setHue(e.target.value)}
              type="range"
              min="0"
              max="360"
              className="hue__slider"
            />
            <div className="hue">
              Hue:
              {hue && <span className="hue__value">{hue}</span>}
            </div>
          </div>
        </div>
        <div className="style__switcher-item">
          <label htmlFor="form-switcher" className="form-switch">
            <span className="form-switcher-title">Dark Mode</span>
            <input
              onChange={(e) => setCheckbox(e.target.checked)}
              type="checkbox"
              id="form-switcher"
              checked={checkbox}
            />
            <div className="dark-light_switch">
              <span>
                {checkbox ? <BsMoon /> : <BsSun className="rotate" />}
              </span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Themes;
