import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Nav = () => {
  return (
    <div className="topnav">
      <NavLink className="active" exact to="/">
        Home
      </NavLink>
      <NavLink to="/timer">Timer App</NavLink>
      <NavLink href="/todo">Todo App</NavLink>
      <a href="/about">About</a>
    </div>
  );
};

export default Nav;
