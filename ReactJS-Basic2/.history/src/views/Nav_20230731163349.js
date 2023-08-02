import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Nav = () => {
  return (
    <div className="topnav">
      <NavLink className="active" exact to="/">
        Home
      </NavLink>
      <Nav href="/timer">Timer App</Nav>
      <a href="/todo">Todo App</a>
      <a href="/about">About</a>
    </div>
  );
};

export default Nav;
