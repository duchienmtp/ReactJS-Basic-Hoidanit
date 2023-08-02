import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Nav from "./views/Nav";
import "./views/Nav.scss";
import Todo from "./views/Todo";
import "./views/Todo.scss";

const App = () => {
  // like Class

  const [placeholder, setPlaceholder] = useState("");
  const [name, setName] = useState("Eric");
  let [todos, setTodos] = useState([
    {
      id: 1,
      title: "Doing homework",
      author: "Kagami",
    },
    {
      id: 2,
      title: "Playing games",
      author: "Kagami",
    },
    {
      id: 3,
      title: "Learning ReactJS",
      author: "Kagami",
    },
    {
      id: 4,
      title: "Learning NodeJS",
      author: "Eric",
    },
  ]);

  // pass empty array as dependency => useEffect == ComponentDidMount
  useEffect(() => {
      console.log("Run use Effect");
    }, []);

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

  const deleteTodo = (todoID) => {
    todos = todos.filter((item) => item.id !== todoID);
    setTodos(todos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world with ReactJS {name}!</p>
        <div className="TodoList">
          <Todo todos={todos} title={"Todo List"} deleteTodo={deleteTodo} />
          <Todo
            todos={todos.filter((item) => item.author === "Kagami")}
            title={"Kagami's Todo List"}
            deleteTodo={deleteTodo}
          />
        </div>
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
