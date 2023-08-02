import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";


const Nav = () => {
  return (
    <div className="topnav">
      <NavLink className="active" exact to="/">
        Home
      </NavLink>
      <NavLink to="/timer">Timer App</NavLink>
      <NavLink to="/todo">Todo App</NavLink>
      <NavLink href="/about">About</NavLink>
    </div>
  );
};

export default Nav;
