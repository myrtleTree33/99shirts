import React, { Component } from "react";
import PropTypes from "prop-types";
import { Control, Field, Input, Button, Section, Container } from "bloomer";

class MailingListForm extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form>
        <Field hasAddons="centered" isPulled="left">
          <Control>
            <Input isSize="small" />
          </Control>
          <Control>
            <Button isColor="info" isSize="small">
              Register
            </Button>
          </Control>
        </Field>
      </form>
    );
  }
}

export default MailingListForm;
