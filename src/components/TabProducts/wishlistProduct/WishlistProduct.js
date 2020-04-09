import React, { Component } from "react";
import wishlisthProduct from "./wishlistProduct.json";
import NavWesite from "../../NavWesite/NavWesite";
import SingleProduct from "../TabChild/SingleProduct";

class WishlistProduct extends Component {
  render() {
    return (
      <div className="wishtPage row">
        <h2 className="trendy-item-wrap-title center">Giỏ hàng của bạn</h2>
        <NavWesite />
        {wishlisthProduct.map((val, index) => {
          return (
            <SingleProduct
              key={index}
              images={val.images}
              imagesBack={val.imagesBack}
              price={val.price}
              PShoesId={val.id}
              hot={val.hot}
            >
              {val.name}
            </SingleProduct>
          );
        })}
      </div>
    );
  }
}

export default WishlistProduct;
