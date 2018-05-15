import React, { Component } from "react";
import PropTypes from "prop-types";
import { Section } from "bloomer";

import ProductsTile from "../components/ProductsTile/ProductsTile";
import Splash from '../components/Splash/Splash';
import SearchBar from '../components/SearchBar/SearchBar';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {}, {}, {}, {},
        {}, {}, {}, {},
        {}, {}, {}, {},
        {}, {}, {}, {},
        {}, {}, {}, {},
      ]
    };
  }

  render() {
    return (
      <Section>
        <Splash />
        <SearchBar />
        <ProductsTile products={this.state.products} />
      </Section>
    );
  }
}

export default Home;
