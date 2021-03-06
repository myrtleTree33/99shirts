import React, { Component } from "react";
import { Redirect, Link, Switch, Route } from "react-router-dom";
import { Section, Container } from "bloomer";

import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SiteHero from "./components/SiteHero/SiteHero";
import SiteFooter from './components/SiteFooter/SiteFooter';
import Home from "./screens/Home";
import Login from "./screens/Login";
import Protected from "./screens/Protected";
import userService from "./services/users";
import Men from "./screens/Men";
import Help from "./screens/Help";
import Company from './screens/Company';
import Product from './screens/Product';

/**
 * Allows the creation of a protected route, if the user is not signed in.
 * @param {*} param0
 */
const PrivateRoute = ({ component: Component, ...rest }) => {
  // TODO refactor this if needed
  const isAuthenticated = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

class App extends Component {
  constructor() {
    super();
    this.bootstrapUser = this.bootstrapUser.bind(this);
  }

  componentDidMount() {
    this.bootstrapUser();
  }

  bootstrapUser() {
    userService
      .getUser()
      .then(res => {
        const { user } = res;
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch(err => console.error(`Unable to connect to backend API=${err}`));
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Container>
          <header className="App-header">
            <SiteHero />
            {/* <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/protected">Protected</Link>
          </nav> */}
          </header>
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/men" component={Men} />
              <Route path="/help" component={Help} />
              <Route path="/company" component={Company} />
              <Route path="/product" component={Product} />
              <PrivateRoute path="/protected" component={Protected} />
            </Switch>
          </Container>
          <SiteFooter />
        </Container>
      </div>
    );
  }
}

export default App;
