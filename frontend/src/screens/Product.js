import React, { Component } from "react";
import PropTypes from "prop-types";
import ProductViewerContainer from "../components/ProductViewerContainer/ProductViewerContainer";

class Product extends Component {
  constructor() {
    super();
  }

  render() {
    return <ProductViewerContainer />;
  }
}

export default Product;
