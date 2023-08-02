import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Nav from "./views/Nav";
import "./views/Nav.scss";
import Todo from "./views/Todo";
import "./views/Todo.scss";
// import Covid from "./views/Covid";
import { CountDown, NewCountDown } from "./views/Countdown";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
  // run only 1 time when app rendered for the first time

  useEffect(() => {}, []);

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

  const onTimesup = () => {
    alert("times up");
  };

  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            {/* <Covid /> */}
          </Route>
          <Route path="/timer">
            <CountDown onTimesup={onTimesup} />
            <span>---------------------</span>
            <NewCountDown onTimesup={onTimesup} />

          </Route>
          <Route path="/todo">
            <Todo
              todos={todos}
              title={'All todos'}
              deleteTodo={deleteTodo}
            />
            <input type="text" value={placeholder} onChange={(event) => handleOnChangeEvent(event)} />
            <button type="button" onClick={(event) => handleClickEvent(event)}>Click me</button>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
