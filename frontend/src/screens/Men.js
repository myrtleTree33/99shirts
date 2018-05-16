import React, { Component } from "react";
import PropTypes from "prop-types";
import ProductsContainer from "../components/ProductsContainer/ProductsContainer";

class Men extends Component {
  constructor() {
    super();
    this.state = {
      title: "Men",
      products: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    };
  }

  render() {
    const { products } = this.state;
    return <ProductsContainer title="Men" products={products} />;
  }
}

export default Men;
