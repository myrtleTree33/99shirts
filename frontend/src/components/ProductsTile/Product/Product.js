import React, { Component } from "react";

import "./Product.css";
import { Title } from "bloomer/lib/elements/Title";

class Product extends Component {
  constructor() {
    super();
  }

  render() {
    const { product = {} } = this.props;
    const {title = 'title', price = '$0.00'} = product;
    return (
      <div>
        <div>
          <Title isSize="6">{title}</Title>
        </div>
        <div>
            {price}
        </div>
      </div>
    );
  }
}

export default Product;
