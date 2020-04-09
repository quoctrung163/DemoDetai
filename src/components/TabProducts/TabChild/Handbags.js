import React, { Component } from "react";
import SingleProduct from "./SingleProduct";

class Handbags extends Component {
  render() {
    return (
      <div className="row trendy-tab-block" id="tab-trendy-handbags">
        {/* begin tab 1 */}
        <SingleProduct
          PShoesId="1"
          price="23"
          images="./template/images/elessi-bag-blue-400x520.jpg"
          imagesBack="./template/images/elessi-bag-blue-2-400x520.jpg"
          imagesRed="./template/images/ken_mini_red-400x520.jpg"
          imagesBlue="./template/images/elessi-bag-green-400x520.jpg"
          hot={true}
        >
          Ken Mini
        </SingleProduct>
        {/* start product  */}
        <SingleProduct
          PShoesId="2"
          price="28"
          images="./template/images/elessi-bag-green-400x520.jpg"
          imagesBack="./template/images/elessi-bag-green-2-400x520.jpg"
          hot={false}
        >
          Elessi Bag
        </SingleProduct>
        {/* end product  */}
        {/* b4-nav-tabs */}
        <SingleProduct
          PShoesId="3"
          price="49"
          images="./template/images/greenland_zip-blue-1-400x520.jpg"
          imagesBack="./template/images/greenland_zip-blue-2-400x520.jpg"
          hot={false}
        >
          Rucksack
        </SingleProduct>
        <SingleProduct
          PShoesId="6"
          price="31"
          images="./template/images/greenland-blue-1-400x520.jpg"
          imagesBack="./template/images/greenland-blue-3-400x520.jpg"
          hot={true}
        >
          Totepack
        </SingleProduct>
        <SingleProduct
          PShoesId="7"
          price="25"
          images="./template/images/ken_mini_red-400x520.jpg"
          imagesBack="./template/images/ken_mini_red2-400x520.jpg"
          hot={true}
        >
          Kiruna Backpack
        </SingleProduct>
        <SingleProduct
          PShoesId="8"
          price="19"
          images="./template/images/rucksack-green-400x520.jpg"
          imagesBack="./template/images/rucksack-1-400x520.jpg"
          hot={true}
        >
          High Coast
        </SingleProduct>
        <SingleProduct
          PShoesId="4"
          price="27"
          images="./template/images/totepack-yellow-400x520.jpg"
          imagesBack="./template/images/totepack-yellow-2-400x520.jpg"
          hot={false}
        >
          Greenland Zip
        </SingleProduct>
        <SingleProduct
          PShoesId="5"
          price="41"
          images="./template/images/high_coast-1-400x520.jpg"
          imagesBack="./template/images/high_coast-2-400x520.jpg"
          hot={true}
        >
          Greenland
        </SingleProduct>
        {/* end tab 1 */}
      </div>
    );
  }
}

export default Handbags;
