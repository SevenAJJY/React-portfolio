import React from "react";
import { TbArrowAutofitRight } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import Collapse from "./Collapse";
import { motion } from "framer-motion";

const Item = ({ projectItems }) => {
  return (
    <>
      {projectItems.map(
        ({ id, img, category, name, desc, languages, preview, code }) => (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.3 }}
            className="portfolio__item card"
            key={id}
          >
            <div className="portfolio__img-wrapper">
              <img src={img} alt="project image" className="portfolio__img" />
            </div>
            <span className="portfolio__category">{category}</span>
            <h3 className="portfolio__name">{name}</h3>
            <div className="portfolio__languages-desc">
              <Collapse languages={languages} limit="40">
                {desc}
              </Collapse>
            </div>
            <div className="portfolio__links">
              <a
                href={code}
                className="portfolio__code"
                target="_blank"
                rel="noreferrer"
              >
                {code && "Code"}
                {code && <BsGithub className="link__icon" />}
              </a>
              <a
                href={preview}
                className="portfolio__preview"
                target="_blank"
                rel="noreferrer"
              >
                {preview && "Live Demo"}{" "}
                {preview && <TbArrowAutofitRight className="link__icon" />}
              </a>
            </div>
            <div className="dots dots-card"></div>
          </motion.div>
        )
      )}
    </>
  );
};

export default Item;
