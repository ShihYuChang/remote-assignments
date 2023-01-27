import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import "./normalize.css";
import "./mediaQuery.css";

//Hooks
const TopMenu = () => {
  return <MenuItems className="menu" />;
};

const MenuVisibilty = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button
        id={props.id}
        className={props.className}
        types={props.type}
        onClick={() => setIsVisible(!isVisible)}
      />
      <button
        id={"exitIcon"}
        style={{ display: isVisible ? "block" : "none" }}
        onClick={() => setIsVisible(!isVisible)}
      >
        X
      </button>
      <MenuItems
        className={"hiddenRightMenu"}
        style={{ display: isVisible ? "block" : "none" }}
      />
    </div>
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

// Main Layout
const Header = () => {
  return (
    <header>
      <ul className="navigator">
        <li id="title">{naviTitle}</li>
        <TopMenu />
        <MenuVisibilty id="menu_icon" className="gg-menu" type="button" />
      </ul>
    </header>
  );
};

const MainContent = () => {
  return (
    <main>
      <h2>{sectionTitle}</h2>
      <ContentBox className="box" boxNumber={1} />
      <BoxVisibility className="btn" type="button" text="Call to Action" />
    </main>
  );
};

const Footer = () => {
  return <footer></footer>;
};

// Menu

// Boxes
const Banner = () => {
  return (
    <div className="welcome_banner">
      <h1>{welcomeMessage}</h1>
    </div>
  );
};

const MenuItems = (props) => {
  return (
    <ul className={props.className} style={props.style}>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
      <li>item 4</li>
    </ul>
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

// Contents
const naviTitle = "Website Title / Logo";
const welcomeMessage = "Welcome Message";
const sectionTitle = "Section Title";

// APP
const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Banner />
      <MainContent />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
