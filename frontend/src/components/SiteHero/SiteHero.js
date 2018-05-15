import React, { Component } from "react";
import { Hero, HeroBody, HeroFooter, Container, Title } from "bloomer";

import SiteHeroTabs from "./SiteHeroTabs";

import "./SiteHero.css";

class SiteHero extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Hero>
        <HeroBody>
          <Title className="siteHero-header">CodeAnthem</Title>
          {/* <p>Unleash the inner geek in you.</p> */}
        </HeroBody>
        <HeroFooter className="siteHero-footer">
          <SiteHeroTabs />
        </HeroFooter>
      </Hero>
    );
  }
}

export default SiteHero;
