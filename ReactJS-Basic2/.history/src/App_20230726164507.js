import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import "./views/Nav.scss";
import { useState } from "react";

const App = () => {
  // like Class

  const [name] = useState('')

  const handleClickEvent = () => {
    alert("Clicked!");
  };

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world with ReactJS!</p>
        <button type="button" onClick={() => handleClickEvent()}>
          Click me!
        </button>
      </header>
    </div>
  );
};

export default App;
