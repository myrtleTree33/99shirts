import React, { Component } from "react";
import {Tabs, TabList, Tab, TabLink, Icon} from 'bloomer';

class SiteHeroTabs extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Tabs isAlign="centered">
        <TabList>
          <Tab>
            <TabLink>
              <span>Popular</span>
            </TabLink>
          </Tab>
          <Tab isActive>
            <TabLink>
              <span>Men</span>
            </TabLink>
          </Tab>
          <Tab>
            <TabLink>
              <span>Women</span>
            </TabLink>
          </Tab>
          <Tab>
            <TabLink>
              <span>Accessories</span>
            </TabLink>
          </Tab>
        </TabList>
      </Tabs>
    );
  }
}

export default SiteHeroTabs;