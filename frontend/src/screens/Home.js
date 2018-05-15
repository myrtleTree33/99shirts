import React, { Component } from "react";
import PropTypes from "prop-types";

import Splash from '../components/Splash/Splash';
import SearchBar from "../components/SearchBar/SearchBar";
import ProductsTile from "../components/ProductsTile/ProductsTile";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {},
        {},
        {},
        {},
      ]
    }
  }

  render() {
    return (
      <div>
        <Splash />
        <SearchBar />
        <ProductsTile products = {this.state.products} />
      </div>
    );
  }
}

export default Home;