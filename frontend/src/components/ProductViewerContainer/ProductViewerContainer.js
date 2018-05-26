import React, { Component } from "react";
import {
  Container,
  Section,
  Title,
  Image,
  Columns,
  Column,
  Level,
  LevelLeft,
  LevelRight
} from "bloomer";

import "./ProductViewerContainer.css";
import ContentWidget from "./ContentWidget/ContentWidget";

class ProductViewer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <Section>
          <Columns>
            <Column isSize="1/2" className="productItem-img">
              <Image isRatio="2:3" src="https://via.placeholder.com/280x420" />
            </Column>
            <Column
              isSize="1/2"
              hasTextAlign="left"
              className="productItem-content"
            >
              <ContentWidget />
            </Column>
          </Columns>
        </Section>
      </Container>
    );
  }
}

export default ProductViewer;
