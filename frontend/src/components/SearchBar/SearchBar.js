import React, { Component } from "react";
import {} from "bloomer";

import "./SearchBar.css";
import { Control } from "bloomer/lib/elements/Form/Control";
import { Field } from "bloomer/lib/elements/Form/Field/Field";
import { Input } from "bloomer/lib/elements/Form/Input";
import { Button } from "bloomer/lib/elements/Button";
import { Section } from "bloomer/lib/layout/Section";
import { Container } from "bloomer/lib/layout/Container";

class SearchBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Section>
        <Container>
          <form>
            <Field hasAddons="centered">
              <Control>
                <Input isSize="medium" />
              </Control>
              <Control>
                <Button isColor="info" isSize="medium">Search</Button>
              </Control>
            </Field>
          </form>
        </Container>
      </Section>
    );
  }
}

export default SearchBar;
