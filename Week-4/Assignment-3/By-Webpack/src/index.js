import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/header";
import MainContent from "./Components/main-content";
import Banner from "./Components/banner";
import Footer from "./Components/footer";

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
