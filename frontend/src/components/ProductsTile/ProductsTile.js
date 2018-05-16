import React, { Component } from "react";

import "./ProductsTile.css";
import { Section } from "bloomer/lib/layout/Section";
import { Container } from "bloomer/lib/layout/Container";
import { Columns } from "bloomer/lib/grid/Columns";
import { Column } from "bloomer/lib/grid/Column";

import Product from "./Product/Product";

class ProductsTile extends Component {
  constructor() {
    super();
  }

  render() {
    const { products = [{}, {}] } = this.props;
    return (
      <Section>
        <Columns isCentered className="columns-wrap">
          {products.map(p => (
            <Column isSize="1/3">
              <Product product={p} />
            </Column>
          ))}
        </Columns>
      </Section>
    );
  }
}

export default ProductsTile;
