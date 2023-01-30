import React, { useState } from "react";

const MainContent = () => {
  return (
    <main>
      <h2>{sectionTitle}</h2>
      <ContentBox className="box" boxNumber={1} />
      <BoxVisibility className="btn" type="button" text="Call to Action" />
    </main>
  );
};

const ContentBox = (props) => {
  return (
    <ul className={props.className} style={props.style}>
      <li>Content Box {props.boxNumber}</li>
      <li>Content Box {props.boxNumber + 1}</li>
      <li>Content Box {props.boxNumber + 2}</li>
      <li>Content Box {props.boxNumber + 3}</li>
    </ul>
  );
};

const BoxVisibility = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button
        className={props.className}
        type={props.type}
        onClick={() => setIsVisible(!isVisible)}
      >
        {props.text}
      </button>
      <ContentBox
        className={"hiddenBox"}
        boxNumber={5}
        style={{ display: isVisible ? "flex" : "none" }}
      />
    </div>
  );
};

const sectionTitle = "Section Title";

export default MainContent;
