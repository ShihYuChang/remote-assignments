import React, { useState } from "react";

const MainContent = () => {
  return (
    <main>
      <h2>{sectionTitle}</h2>
      <ContentBox className="box" firstBoxNumber={1} lastBoxNumber={4} />
      <BoxVisibility className="btn" type="button" text="Call to Action" />
    </main>
  );
};

const ContentBox = (props) => {
  let boxList = [];
  for (let i = props.firstBoxNumber; i <= props.lastBoxNumber; i++) {
    boxList.push({ num: i, id: i });
  }
  return (
    <ul className={props.className} style={props.style}>
      {boxList.map((item) => (
        <li key={item.id.toString()}>Content Box {item.num}</li>
      ))}
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
        firstBoxNumber={5}
        lastBoxNumber={8}
        style={{ display: isVisible ? "flex" : "none" }}
      />
    </div>
  );
};

const sectionTitle = "Section Title";

export default MainContent;
