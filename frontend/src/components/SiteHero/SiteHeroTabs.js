import React, { Component } from "react";
import { Tabs, TabList, Tab, TabLink, Icon } from "bloomer";
import { Link } from "react-router-dom";

class CustomTab extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(url) {
    this.props.updateActiveTab(url);
  }

  render() {
    const { activeTab, tab, updateActiveTab } = this.props;
    return (
      <Tab
        isActive={activeTab === tab.url}
        onClick={() => {
          this.handleClick(tab.url);
        }}
      >
        <Link to={tab.url}>{tab.label}</Link>
      </Tab>
    );
  }
}

class SiteHeroTabs extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: "",
      tabs: [
        { url: "/popular", label: "Popular" },
        { url: "/men", label: "Men" },
        { url: "/women", label: "Women" },
        { url: "/accessories", label: "Accessories" }
      ]
    };

    this.updateActiveTab = this.updateActiveTab.bind(this);
  }

  updateActiveTab(tabUrl) {
    this.setState({
      activeTab: tabUrl
    });
  }

  render() {
    const { activeTab, tabs } = this.state;
    return (
      <Tabs isAlign="centered">
        <TabList>
          {tabs.map((t, i) => (
            <CustomTab
              key={i}
              tab={t}
              activeTab={activeTab}
              updateActiveTab={this.updateActiveTab}
            />
          ))}
        </TabList>
      </Tabs>
    );
  }
}

export default SiteHeroTabs;
