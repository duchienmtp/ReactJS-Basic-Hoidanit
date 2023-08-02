import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import "./views/Nav.scss";

const App = () => {
  // like Class

  const [placeholder, setPlaceholder] = useState('');
  const [name, setName] = useState("Eric");
  const [todos, setTodos] = useState([{
    id: 1,
    title: "Todo 1",
    completed: false,
  }]);

  const handleClickEvent = () => {
    setName(placeholder);

  };

  const handleOnChangeEvent = (e) => {
    setPlaceholder(e.target.value);
  };

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world with ReactJS {name}!</p>
        <input value={placeholder} placeholder="Enter here to change title" onChange={(e) => handleOnChangeEvent(e)}></input>
        <button type="button" onClick={(placeholder) => handleClickEvent(placeholder)}>
          Click me!
        </button>
      </header>
    </div>
  );
};

export default App;
