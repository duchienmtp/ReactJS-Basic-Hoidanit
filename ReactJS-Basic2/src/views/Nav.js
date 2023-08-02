import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

const Nav = () => {
  return (
    <div className="topnav">
      <NavLink activeClassName="active" to="/" exact>
        Home
      </NavLink>
      <NavLink to="/timer">Timer App</NavLink>
      <NavLink to="/todo">Todo App</NavLink>
      <NavLink to="/blog">Blog Apps</NavLink>
      <NavLink to="/search">About</NavLink>
    </div>
  );
};

export default Nav;
