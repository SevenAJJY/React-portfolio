import React, { useState } from "react";

const List = ({ list, filterItems }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="portfolio__list">
      {list.map((category, index) => (
        <button
          onClick={() => {
            setActive(index);
            filterItems(category);
          }}
          className={
            active === index
              ? "portfolio__list-item active-work"
              : "portfolio__list-item"
          }
          key={index}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default List;
