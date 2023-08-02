import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import "./views/Nav.scss";

const App = () => {
  // like Class

  const [name, setName] = useState("Eric");

  const handleClickEvent = () => {
    setName();

  };

  const handleOnChangeEvent = (e) => {
    console.log(">>> Checking modification: ", e.target.value);
  };

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world with ReactJS {name}!</p>
        <input value={name} onChange={(e) => handleOnChangeEvent(e)}></input>
        <button type="button" onClick={() => handleClickEvent()}>
          Click me!
        </button>
      </header>
    </div>
  );
};

export default App;
