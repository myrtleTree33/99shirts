import React, { Component } from "react";
import PropTypes from "prop-types";

import Splash from '../components/Splash/Splash';

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Splash />
      </div>
    );
  }
}

export default Home;