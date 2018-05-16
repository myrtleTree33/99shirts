import React, { Component } from "react";
import { Menu, MenuLabel, MenuLink, MenuList } from "bloomer";

class ProductsMenu extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Menu hasTextAlign="left">
        <MenuLabel>Category</MenuLabel>
        <MenuList>
          <li>Text editors</li>
          <li>Javascript</li>
          <li>Java</li>
          <li>Web</li>
          <li>Golang</li>
          <li>Coding</li>
          <li>DevOps</li>
        </MenuList>
        <MenuLabel>Type</MenuLabel>
        <MenuList>
          <li>All</li>
          <li>Tees</li>
          <li>Shirts</li>
        </MenuList>
        <MenuLabel>Price (SGD)</MenuLabel>
        <MenuList>
          <li>20.00</li>
          <li>25.00</li>
          <li>30.00</li>
        </MenuList>
      </Menu>
    );
  }
}

export default ProductsMenu;
