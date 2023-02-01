import React from "react";
import ReactDOM from "react-dom/client";
import ContentTable from "./Components/ContentTable";
import "./style.css";
import "./normalize.css";

// Render
const App = () => (
  <div className="wrapper">
    <div className="mainContent">
      <ContentTable boxNum={5} />
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
