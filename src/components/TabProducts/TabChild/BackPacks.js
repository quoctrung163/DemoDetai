import React, { Component } from "react";
import SingleProduct from "./SingleProduct";

class BackPacks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 9,
          name: "Travel Boots",
          price: "2345432",
          images: "template/images/shoes/3337312107_2_1_2-400x511.jpg",
          imagesBack: "template/images/shoes/bag-blog-2-380x380.jpg",
          hot: false
        },
        {
          id: 10,
          name: "Tiny Paws",
          price: "2853214",
          images: "template/images/shoes/3311312004_2_1_2-400x511.jpg",
          imagesBack: "template/images/shoes/3311312004_2_2_2-400x511.jpg",
          hot: true
        },
        {
          id: 11,
          name: "Captain Foots",
          price: "4942314",
          images: "template/images/shoes/7305312040_2_1_2-400x511.jpg",
          imagesBack: "template/images/shoes/7305312040_2_2_2-400x511.jpg",
          hot: true
        },
        {
          id: 12,
          name: "YOung Brown",
          price: "31",
          images: "template/images/shoes/7323312107_2_1_2-400x511.jpg",
          imagesBack: "template/images/shoes/7323312107_2_2_2-400x511.jpg",
          hot: false
        },
        {
          id: 13,
          name: "White Sport",
          price: "252314",
          images: "template/images/shoes/3334312001_2_1_2-400x511.jpg",
          imagesBack: "template/images/shoes/3334312001_2_2_2-400x511.jpg",
          hot: true
        },
        {
          id: 14,
          name: "Strong Men",
          price: "19214",
          images: "template/images/shoes/3346312004_2_1_2-400x511.jpg",
          imagesBack: "template/images/shoes/3346312004_2_2_2-400x511.jpg",
          hot: true
        },
        {
          id: 15,
          name: "Red cool",
          price: "27",
          images: "template/images/shoes/7219312022_2_1_2-400x511.jpg",
          imagesBack: "template/images/shoes/7219312022_2_2_2-400x511.jpg",
          hot: true
        },
        {
          id: 16,
          name: "Ultra Boots",
          price: "411234",
          images: "template/images/shoes/3335312050_2_1_2-400x511.jpg",
          imagesBack: "template/images/shoes/3335312050_2_2_2-400x511.jpg",
          hot: false
        }
      ]
    };
  }
  //xóa product
  //id để biết xản phẩm nào cần delete
  deleteProduct = id => {
    var arrProduct = this.state.products;
    arrProduct.splice(id, 1);
    this.setState({ products: arrProduct });
  };
  //id, name để biết sản phẩm nào cần đổi, đổi tên gì
  editNameProduct = (id, name) => {
    var arrProduct = this.state.products;
    arrProduct[id].name = name;
    this.setState({ products: arrProduct });
  };
  show_products = () => {
    const listProducts = this.state.products.map((item, index) => {
      return (
        <SingleProduct
          key={index}
          //dễ hiểu hơn thì tạo 1 cái key riêng
          //không đặt id vì sẽ bị đụng id trong xml
          PShoesId={item.id}
          khoa={index}
          price={item.price}
          images={item.images}
          imagesBack={item.imagesBack}
          hot={item.hot}
          //chưa có id name
          edit={(id, name) => {
            this.editNameProduct(id, name);
          }}
          delete={id => {
            this.deleteProduct(id);
          }}
        >
          {item.name}
        </SingleProduct>
      );
    });
    return listProducts;
  };
  render() {
    return (
      <div className="row trendy-tab-block" id="tab-trendy-backpacks">
        {this.show_products()}
      </div>
    );
  }
}

export default BackPacks;
