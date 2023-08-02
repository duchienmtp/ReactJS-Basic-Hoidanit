import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import "./views/Nav.scss";

const App = () => {
  // like Class

  const handleClickEvent = () => {
    alert("Clicked!");
  };

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world with ReactJS!</p>
        <button type="button" onClick={() => handleClickEventd}>
          Click me!
        </button>
      </header>
    </div>
  );
};

export default App;
