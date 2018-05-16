import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Level,
  LevelLeft,
  LevelRight,
  Title,
  Section,
  Columns,
  Column
} from "bloomer";

import ProductsTile from "../ProductsTile/ProductsTile";
import ProductsMenu from "./ProductsMenu/ProductsMenu";
import { Container } from "bloomer/lib/layout/Container";

class ProductsContainer extends Component {
  constructor() {
    super();
  }

  render() {
    const props = this.props;
    const { title = "", products = [{}, {}, {}, {}] } = props;
    return (
      <Container>
        <Section>
          <Title>{title}</Title>
        </Section>
        <Section>
          <Columns>
            <Column isSize="1/4">
              <ProductsMenu />
            </Column>
            <Column isSize="3/4">
              <ProductsTile products={products} />
            </Column>
          </Columns>
          {/* <Level>
          <LevelLeft>
            <ProductsMenu />
          </LevelLeft>
          <LevelRight>
            <ProductsTile products={products} />
          </LevelRight>
        </Level> */}
        </Section>
      </Container>
    );
  }
}

export default ProductsContainer;
