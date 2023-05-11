import React from "react";
import { statistics } from "../../data/data";

const Info = () => {
  return (
    <div className="home__info">
      {statistics.map((item) => {
        return (
          <div className="home__box" key={item.id}>
            {<item.icon className="box__icon" />}
            <h3>{item.title}</h3>
            <small>{item.desc}</small>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
