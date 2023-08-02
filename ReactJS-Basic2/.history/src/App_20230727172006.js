import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Nav from "./views/Nav";
import "./views/Nav.scss";
import Todo from "./views/Todo";

const App = () => {
  // like Class

  const [placeholder, setPlaceholder] = useState("");
  const [name, setName] = useState("Eric");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Doing homework",
      completed: false,
    },
    {
      id: 2,
      title: "Playing games",
      completed: false,
    },
    {
      id: 3,
      title: "Learing ReactJS",
      completed: false,
    },
  ]);

  // Hook doesn't merge state like Class
  const handleClickEvent = () => {
    if (!placeholder) {
      alert("Please enter somethings");
      return;
    }

    let newTodo = { id: todos.length + 1, title: placeholder };
    setTodos([...todos, newTodo]);
    setPlaceholder("");
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
        <Todo todos=/>
        <input
          value={placeholder}
          placeholder="Enter here to change title"
          onChange={(e) => handleOnChangeEvent(e)}
        ></input>
        <button
          type="button"
          onClick={(placeholder) => handleClickEvent(placeholder)}
        >
          Click me!
        </button>
      </header>
    </div>
  );
};

export default App;
