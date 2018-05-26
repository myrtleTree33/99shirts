import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Icon, Content, Columns, Column, Title, Footer, Container } from "bloomer";
import { Section } from "bloomer/lib/layout/Section";
import { Level } from "bloomer/lib/components/Level/Level";
import { HashLink } from 'react-router-hash-link';

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
                <p><HashLink to="/help#faq">FAQ</HashLink></p>
                <p><HashLink to="/help#shipping">Return policy</HashLink></p>
                <p><HashLink to="/help#policy">Policy</HashLink></p>
                <p><HashLink to="/help#toc">Terms and conditions</HashLink></p>
              </div>
            </Column>
            <Column isSize="1/4">
              <div>
                <Title isSize="6"><Link to="/company">Company</Link></Title>
              </div>
              <div>
                <p><HashLink to="/company#about">About us</HashLink></p>
                <p><HashLink to="/company#contribute">Contribute an idea</HashLink></p>
              </div>
            </Column>
            <Column isSize="1/4">
              <div>
                <Title isSize="6">Social Media</Title>
              </div>
              <div>
                <span><a href="/"><Icon isSize="medium" className="fab fa-instagram" /></a></span>
                <span><a href="/"><Icon isSize="medium" className="fab fa-facebook" /></a></span>
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
