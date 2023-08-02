import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world with ReactJS!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with React version: {React.version}
        </a>
      </header>
    </div>
  );
};

export default App;
