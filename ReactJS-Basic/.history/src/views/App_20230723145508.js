import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent.js';
import ListTodo from './Todos/ListTodo';
import ListUser from './Users/ListUser';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import DetailUser from './Users/DetailUser';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


/**
 * 2 components: class component / function component ( function, arrow)
 * JSX
 */

function App() {
  // const  App = () =>  {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>

            <Route path="/user" exact>
              <ListUser />
            </Route>

            <Route path="/user/:id">
              <DetailUser />
            </Route>

          </Switch>

        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
