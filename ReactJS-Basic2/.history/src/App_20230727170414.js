import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import "./views/Nav.scss";

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
    
    let newTodo = { id: todo};
    setTodos([...todos, newTodo]);
    // setName(placeholder);
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
        <ul className="todos-container">
          {todos &&
            todos.length > 0 &&
            todos.map((item, index) => {
              return (
                <li className="todos-child" key={index}>
                  {item.id} - {item.title}
                </li>
              );
            })}
        </ul>
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
