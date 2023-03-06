import React from "react";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Products from "./components/Products";
import Select from "./components/Select";
import Slick from "./components/Slick";
import Zero from "./components/Zero";

function App() {
  return (
    <div className="App">
      {" "}
      <Header />
      <Select />
      <Slick />
      <Main />
      <Products />
      <Zero />
      <Footer />
    </div>
  );
}

export default App;
