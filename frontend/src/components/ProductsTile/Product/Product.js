import React, { Component } from "react";

import "./Product.css";
import { Title, Image } from "bloomer";

class Product extends Component {

  constructor() {
    super();
  }

  render() {
    const { product = {} } = this.props;
    const {
      id = '0',
      title = 'Product title',
      description = 'Product Description',
      price = '0.00',
      currency = 'SGD',
      symbol = '$'
    } = product;
    const formattedPrice = symbol + price;
    return (
      <div>
        <div>
          <Image src="https://via.placeholder.com/280x420" />
        </div>
        <div>
          <Title isSize="6">{title}</Title>
        </div>
        <div>{formattedPrice}</div>
      </div>
    );
  }
}

export default Product;
