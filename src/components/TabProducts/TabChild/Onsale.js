import React, { Component } from "react";
import SingleProduct from "./SingleProduct";
import dataShoes from "../dataShoes.json";

class Onsale extends Component {
  render() {
    return (
      <div className="row trendy-tab-block" id="tab-trendy-onSale">
        {/* begin tab 3 */}

        {dataShoes.slice(8, 16).map((val, index) => {
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
        {/* start product  */}

        {/* end product  */}
        {/* b4-nav-tabs */}
        {/* end tab 4 */}
      </div>
    );
  }
}

export default Onsale;
