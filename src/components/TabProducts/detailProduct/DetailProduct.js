import React, { Component } from "react";
import NavWesite from "../../NavWesite/NavWesite";
import dataShoes from "./../dataShoes.json";
import SingleProduct from "../TabChild/SingleProduct";

class DetailProduct extends Component {
  format_currency = price => {
    return String(price).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };
  render() {
    let productIdDetail = parseInt(this.props.match.params.id);

    return (
      <div>
        <NavWesite />
        <div className="detail-product">
          {dataShoes.map((val, key) => {
            if (val.id === productIdDetail) {
              return (
                <div key={key}>
                  <div className="dp-imgs">
                    <img alt="" src={"../../" + val.images} />
                    <img alt="" src={"../../" + val.imagesBack} />
                  </div>

                  <h1>{val.name}</h1>
                  <h2>Price: $ {this.format_currency(val.price)}</h2>
                  <SingleProduct
                    key={key}
                    images={"../../" + val.images}
                    imagesBack={"../../" + val.imagesBack}
                    price={val.price}
                    PShoesId={val.id}
                    hot={val.hot}
                  >
                    {val.name}
                  </SingleProduct>
                </div>
              );
            }
            return "";
          })}
        </div>
      </div>
    );
  }
}

export default DetailProduct;
