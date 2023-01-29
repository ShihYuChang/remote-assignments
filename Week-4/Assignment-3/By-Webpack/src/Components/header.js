import React, { useState } from "react";

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

const naviTitle = "Website Title / Logo";

export default Header;
