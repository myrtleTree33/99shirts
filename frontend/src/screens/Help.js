import React, { Component } from "react";
import PropTypes from "prop-types";
import {Section, Title} from 'bloomer';

class Help extends Component {
  constructor() {
    super();
  }

  render() {
    return (<div>
    <Title isSize={2}>Help</Title>
    <Section>
      <Title isSize={3}>FAQ</Title>
      <p>
      <div><strong>How are designs sourced?</strong></div>
      <div>Designs are sourced from </div>
      </p>
    </Section>
    <Section>
      <Title isSize={3}>Shipping</Title>
    </Section>
    <Section>
      <Title isSize={3}>Return policy</Title>
    </Section>
    <Section>
      <Title isSize={3}>Terms and conditions</Title>
    </Section>
    </div>
      )
  }
}

export default Help;
