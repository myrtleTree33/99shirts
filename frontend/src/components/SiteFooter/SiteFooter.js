import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Icon, Content, Columns, Column, Title, Footer, Container } from "bloomer";
import { Section } from "bloomer/lib/layout/Section";
import { Level } from "bloomer/lib/components/Level/Level";

import "./SiteFooter.css";
import MailingListForm from './MailingListForm/MailingListForm';

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
                <Title isSize="6"><Link to="/help">Help</Link></Title>
              </div>
              <div>
                <p>FAQ</p>
                <p>Shipping</p>
                <p>Returns</p>
                <p>Terms and conditions</p>
              </div>
            </Column>
            <Column isSize="1/4">
              <div>
                <Title isSize="6"><Link to="/company">Company</Link></Title>
              </div>
              <div>
                <p>About us</p>
                <p>Contribute an idea</p>
              </div>
            </Column>
            <Column isSize="1/4">
              <div>
                <Title isSize="6">Social Media</Title>
              </div>
              <div>
                <span><Icon isSize="medium" className="fab fa-instagram" /></span>
                <span><Icon isSize="medium" className="fab fa-facebook" /></span>
              </div>
            </Column>
            <Column isSize="1/4">
              <div>
                <Title isSize="6">Mailing List</Title>
              </div>
              <div>
                <p>Sign up to get tips on special offers and new releases.</p>
              </div>
              <div>
                <MailingListForm />
              </div>
            </Column>
          </Columns>
        </Container>
        <Section>
            <div>Copyright (c) Code Anthem.</div>
            <div>Designed in Singapore.</div>
        </Section>
      </Footer>
    );
  }
}

export default SiteFooter;
