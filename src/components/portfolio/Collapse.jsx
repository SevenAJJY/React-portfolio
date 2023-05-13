import React, { useState } from "react";
import Tag from "./Tag";

const Collapse = ({ languages, limit, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="portfolio__desc">
        {isOpen ? children : children.substr(0, limit)}
      </div>
      {isOpen ? <Tag languages={languages} /> : ""}
      <button
        className="read__mode-read__less"
        onClick={() => setIsOpen(!isOpen)}
      >
        {" "}
        {isOpen ? "Less More" : "...Read More"}{" "}
      </button>
    </div>
  );
};

export default Collapse;
