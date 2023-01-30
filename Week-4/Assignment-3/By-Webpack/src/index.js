import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";

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
