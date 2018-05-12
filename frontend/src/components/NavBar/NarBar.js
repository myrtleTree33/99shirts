import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, Link } from "react-router-dom";
import {
  Navbar,
  NavbarItem,
  NavbarMenu,
  NavbarStart,
  NavbarEnd
} from "bloomer";

/**
 * This is a custom component, as Bloomer / Bulma does not have a way 
 * to override href to use React Router to avoid reloading entire page.
 */
class NavbarItemCustom extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (this.props.toUrl) {
      window.location.href = this.props.toUrl;
    }
  }

  render() {
    return (
      <NavbarItem href="/" onClick={this.handleClick}>
        <Link to={this.props.to || this.props.toUrl}>
          {this.props.children}
        </Link>
      </NavbarItem>
    );
  }
}

class NavBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Navbar>
        <NavbarMenu>
          <NavbarStart>
            <NavbarItemCustom to="/">Home</NavbarItemCustom>
            <NavbarItemCustom to="/about">About</NavbarItemCustom>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItemCustom to="/cart">Cart</NavbarItemCustom>
            <NavbarItemCustom to="/account">Account</NavbarItemCustom>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    );
  }
}

export default NavBar;
