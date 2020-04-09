import React, { Component } from "react";
import TabProducts from "../TabProducts/TabProducts";
import NavWesite from "../NavWesite/NavWesite";

class ProductsPage extends Component {
  render() {
    return (
      <div>
        <NavWesite />
        <div className="clear-float" />
        <div className="divide" />
        <TabProducts />
        <div className="clear-float" />
        <div className="divide" />
      </div>
    );
  }
}

export default ProductsPage;
