import React, { Component } from "react";

import "./SiteFooter.css";
import { Content, Columns, Column, Title, Footer, Container } from "bloomer";
import { Section } from "bloomer/lib/layout/Section";
import { Level } from "bloomer/lib/components/Level/Level";

class SiteFooter extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Footer>
        <Container hasTextAlign="left">
          <Columns>
            <Column isSize="1/4">
              <div>
                <Title isSize="6">Help</Title>
              </div>
              <div>
                <p>FAQ</p>
                <p>Shipping</p>
                <p>Returns</p>
                <p>Terms and conditions</p>
              </div>
            </Column>
            <Column isSize="1/4">hello world</Column>
            <Column isSize="1/4">hello world</Column>
            <Column isSize="1/4">hello world</Column>
          </Columns>
        </Container>
        <Section>
            <div>Copyright (c) Code Anthem.</div>
            <div>Made in Singapore.</div>
        </Section>
      </Footer>
    );
  }
}

export default SiteFooter;
