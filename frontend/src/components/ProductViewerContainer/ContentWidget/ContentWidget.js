import React, { Component } from 'react';
import {
  Container, Section, Title, Image,
  Level, LevelLeft, LevelRight,
  Columns, Column, Content
} from 'bloomer';

import './ContentWidget.css';

class ContentWidget extends Component {
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
      <Container>
            <Title isSize="4">{title}</Title>
            <span className="contentWidget-id">ID #: {id}</span>
            <Content>
              <Section>
                {formattedPrice}
              </Section>
            </Content>
      </Container>
    );
  }
}

export default ContentWidget;