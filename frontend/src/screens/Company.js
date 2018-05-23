import React, { Component } from "react";
import PropTypes from "prop-types";
import {Section, Title} from 'bloomer';

class Company extends Component {
  constructor() {
    super();
  }

  render() {
    return (<div>
    <Title isSize={2}>About us</Title>
    <Section>
    </Section>
    <Title isSize={2}>Contribute an idea</Title>
    </div>
      )
  }
}

export default Company;
