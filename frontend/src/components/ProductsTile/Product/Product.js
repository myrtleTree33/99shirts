import React, { Component } from "react";

import "./Product.css";
import { Title, Image } from "bloomer";

class Product extends Component {
  constructor() {
    super();
  }

  render() {
    const { product = {} } = this.props;
    const { title = "title", price = "$0.00" } = product;
    return (
      <div>
        <div>
          <Image isRatio="1:1" src="https://via.placeholder.com/480x480" />
        </div>
        <div>
          <Title isSize="6">{title}</Title>
        </div>
        <div>{price}</div>
      </div>
    );
  }
}

export default Product;
