import React from "react";
import { skills } from "../../data/data";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      {skills.map((skill) => {
        return (
          <motion.div
            initial={{ transform: "translateY(100px)" }}
            animate={{ transform: "translateY(0px)" }}
            exit={{
              transform: "translateY(100px)",
              transition: { duration: 0.1 },
            }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="skill__box"
            key={skill.id}
          >
            <div className="progress__circle">
              <CircularProgressbar
                value={skill.progress}
                text={skill.progress}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "var(--main-color-x-light)",
                  textColor: "var(--main-color)",
                  pathColor: "var(--main-color)",
                  trailColor: "transparent",
                })}
              />
            </div>

            <small className="skills__name">{skill.name}</small>
          </motion.div>
        );
      })}
    </>
  );
};

export default Skills;
