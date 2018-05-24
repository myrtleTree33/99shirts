import React, { Component } from "react";
import PropTypes from "prop-types";
import { Control, Field, Input, Button, Section, Container } from "bloomer";

class MailingListForm extends Component {
  constructor() {
    super();
    this.state = {
      email: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Field hasAddons="centered" isPulled="left">
          <Control>
            <Input isSize="small" name="email" type="email" isRequired onChange={this.handleChange} />
          </Control>
          <Control>
            <Button isColor="info" isSize="small" type="submit">
              Register
            </Button>
          </Control>
        </Field>
      </form>
    );
  }
}

export default MailingListForm;
