import React, { Component } from "react";
import {
  Container,
  Section,
  Title,
  Image,
  Level,
  LevelLeft,
  LevelRight,
  Columns,
  Column,
  Content,
  Button,
  Field,
  Control,
  Label,
  Input
} from "bloomer";

import "./ContentWidget.css";

class ContentWidget extends Component {
  constructor() {
    super();
  }

  render() {
    const { product = {} } = this.props;
    const {
      id = "0",
      title = "Product title",
      description = "Product Description",
      price = "0.00",
      currency = "SGD",
      symbol = "$",
      sizes = ["S", "M", "L"]
    } = product;
    const formattedPrice = symbol + price;
    return (
      <form>
        <Title isSize="4">{title}</Title>
        <span className="contentWidget-id">ID #: {id}</span>
        <Content>
          <Section>
            <Label>Size</Label>
            <Field isGrouped>
              {sizes.map(s => (
                <Control>
                  <Button isColor="dark" isOutlined>
                    {s.toUpperCase()}
                  </Button>
                </Control>
              ))}
            </Field>
            <Field>
              <Label>Quantity</Label>
              <Control>
                <Input
                  className="contentWidget-qty"
                  type="text"
                  placeholder="1"
                />
              </Control>
            </Field>
          </Section>
          <Section>
            <Button type="submit" isSize="medium" isColor="info">
              Add to cart
            </Button>
          </Section>
        </Content>
      </form>
    );
  }
}

export default ContentWidget;
