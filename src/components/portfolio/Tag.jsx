import React from "react";

const Tag = ({ languages }) => {
  console.log(languages);
  return (
    <>
      <div className="portfolio__languages">
        {languages &&
          languages.map((lang) => {
            return (
              <span className="tag-item" key={lang}>
                #{lang}
              </span>
            );
          })}
      </div>
    </>
  );
};

export default Tag;
