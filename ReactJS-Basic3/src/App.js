import logo from "./logo.svg";
import "./App.scss";
import TodoList from "./components/TodoList";
import AddNewProduct from "./components/AddNewProduct";
import Product from "./components/Products/Product";
import "react-image-lightbox/style.css";
import Nav from "./components/Navigation/Nav";
import Weather from "./components/Weather/Weather";
import OTP from "./components/OTP/OTP";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WeatherByLocation from "./components/Weather/WeatherByLocation";

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <div className="App">
            <header className="App-header content-left">
              <div style={{ textAlign: "center" }}>
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <p>
                <span>Hello world React</span> with Eric
              </p>
              <TodoList />
            </header>
            <div className="content-right">
              <AddNewProduct />
              <hr />
              <Product />
            </div>
          </div>
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route exact path="/weather">
          <Weather />
        </Route>
        <Route path="/about">
          <div>I'm Eric</div>
        </Route>
        <Route path="/otp">
          <OTP />
        </Route>
        <Route path="/weather/detail/:woeid">
          <WeatherByLocation />
        </Route>
        <Route path="*">
          <div>404 Not Found!</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
