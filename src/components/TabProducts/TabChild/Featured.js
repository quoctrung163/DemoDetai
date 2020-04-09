import React, { Component } from "react";
import SingleProduct from "./SingleProduct";
import dataShoes from "./../dataShoes.json";

class Featured extends Component {
  render() {
    return (
      <div className="row trendy-tab-block" id="tab-trendy-featured">
        {/* begin tab 1 */}

        {/* start product  */}
        {dataShoes.map((val, index) => {
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
        {/* end product  */}
        {/* b4-nav-tabs */}
        {/* end tab 4 */}
      </div>
    );
  }
}

export default Featured;
