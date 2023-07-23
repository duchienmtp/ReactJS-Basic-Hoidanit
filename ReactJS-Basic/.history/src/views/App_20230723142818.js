import logo from "./logo.svg";
import "./App.scss";
import "./nav/Nav.scss";
import "./Users/ListUser.scss"
import MyComponent from "./example/MyComponent";
import ListTodo from "./todos/ListTodo";
import Navigation from "./nav/NavComponent";
import Home from "./example/Home";
import ListUser from "./Users/ListUser";
import DetailUser from "./Users/DetailUser";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

/*
 * 2 components: Class component and function component
 * Differences: + Function component just take an input and render output, not handling any logic if using without hook
 *              + Class component can handle logic, such as handling state, changing prop
 */

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navigation />
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route exact path="/users">
              <ListUser />
            </Route>
            <Route path="/users/:id">
              <DetailUser />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
