import React, { Component } from "react";
import {
  //as dùng để định danh cho BrowserRouter lại thành Router
  // Switch,
  // Route,
  // useParams
  Link

  //   useParams
} from "react-router-dom";
// import dataShoes from "./../dataShoes";
import wishlistProduct from "./../wishlistProduct/wishlistProduct.json";

class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBlocking: false,
      isRedirect: false,
      editing: false,
      productdata: wishlistProduct
    };
  }
  //add products

  to_slug = str => {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
    str = str.replace(/(đ)/g, "d");

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, "");

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, "-");

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, "");

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, "");

    // return
    return str;
  };

  //viết function hiển thị hot ES6 không có function
  show_featured = featured => {
    if (featured === true) {
      return <div className="badge hot-label">HOT</div>;
    }
  };
  format_currency = price => {
    return String(price).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };
  buttonEdit = () => {
    this.setState({ editing: true });
  };
  buttonSave = () => {
    this.setState({ editing: false });
    this.props.edit(this.props.khoa, this.txtName.value);
    //console.log(this.txtName.value);
    // this.props.children =
    //   this.txtName.value === "" ? this.props.children : this.txtName.value;
  };
  buttonDelete = () => {
    this.props.delete(this.props.khoa);
  };
  renderNormal = () => {
    return (
      <div className="trendyItem-button-wrap">
        <button
          className="trendyItem-button-eddit"
          onClick={() => this.buttonEdit()}
        >
          edit
        </button>
        <button
          className="trendyItem-button-remove"
          onClick={() => this.buttonDelete()}
        >
          remove
        </button>
      </div>
    );
  };
  renderForm = () => {
    return (
      <div className="trendyItem-button-wrap">
        <input
          id="name-product"
          ref={dauvao => {
            this.txtName = dauvao;
          }}
          defaultValue={this.props.children}
        ></input>
        <button
          className="trendyItem-button-save"
          onClick={() => {
            this.buttonSave();
          }}
        >
          Save
        </button>
      </div>
    );
  };
  show_button = () => {
    if (this.state.editing === false) {
      return this.renderNormal();
    } else {
      return this.renderForm();
    }
  };
  onclickColorProducts = evt => {
    // $(".pi-color-child").click(function() {
    //   $(".pi-color-child").removeClass("picc-active");
    //   // var product_id = $(this).attr("data-img");
    //   $(this).addClass("picc-active");
    //   // $(".pi-img-box_change_img img").attr("src", product_id);
    // });
    var x = document.getElementsByClassName("pi-color-child");
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove("picc-active");
    }
    evt.currentTarget.className += " picc-active";
  };

  //thêm vào giả hàng

  addProductBuild = () => {
    const prop = this.props;
    const arrProductWishList = {
      id: parseInt(prop.PShoesId, 10),
      name: prop.children,
      price: prop.price,
      images: prop.images,
      imagesBack: prop.imagesBack,
      hot: prop.hot
    };

    // this.state.productdata.forEach((val, index) => {
    //   if (parseInt(arrProductWishList.id, 10) === parseInt(val.id, 10)) {
    //     delete val[index];
    //   }
    // });
    this.state.productdata.push(arrProductWishList);

    this.setState({
      productdata: this.state.productdata
    });
    console.log(this.state.productdata);
  };

  render() {
    return (
      <div className="trendyItem-product-item columns large-3 medium-4 small-6">
        <div className="trendyItem-product-item-wrap">
          <div className="product-item-img-qv-add">
            <div className="pi-img-box">
              <a href="google.com">
                <div className="pi-img-box-main pi-img-box_change_img">
                  <img alt="" src={this.props.images} />
                </div>
              </a>
              <Link
                to={
                  "chi-tiet/" +
                  this.props.PShoesId +
                  "/" +
                  this.to_slug(String(this.props.children)) +
                  ""
                }
                className="pi-quick-view move-left"
              >
                <div className="pi-img-box-sup pi-img-box_change_img">
                  <img alt="" src={this.props.imagesBack} />
                </div>
              </Link>
            </div>
            <div className="pi-badges-wrap">
              {this.show_featured(this.props.hot)}
            </div>
            <div className="pi-nav-tools">
              <div className="pi-nav-tools-wrap">
                <a href="google.com" className="pi-heart">
                  <i className="far fa-heart" />
                </a>
                <Link
                  to={
                    "chi-tiet/" +
                    this.props.PShoesId +
                    "/" +
                    this.to_slug(String(this.props.children)) +
                    ""
                  }
                  className="pi-quick-view move-left"
                >
                  <i className="far fa-eye" />
                </Link>
                <a href="google.com" className="pi-compare move-left">
                  <i className="fas fa-sync-alt" />
                </a>
              </div>
            </div>
            <div className="pi-add-to-cart move-left">
              <p
                onClick={() => this.addProductBuild()}
                onChange={() => this.checkedProduct()}
              >
                <span>ADD TO CART</span>
                <i className="fas fa-plus" />
              </p>
            </div>
          </div>
          <div className="product-item-info">
            <div className="pi-info-wrap">
              <div className="pi-info-name">
                <Link
                  to={
                    "chi-tiet/" +
                    this.props.PShoesId +
                    "/" +
                    this.to_slug(String(this.props.children)) +
                    ""
                  }
                >
                  {this.props.children}
                </Link>
              </div>
              <div className="pi-star-and-color">
                <div className="pi-star-and-color-wrap">
                  <a href="google.com" className="pi-star">
                    <i className="fas fa-star" />
                  </a>
                  <a href="google.com" className="pi-star">
                    <i className="fas fa-star" />
                  </a>
                  <a href="google.com" className="pi-star">
                    <i className="fas fa-star" />
                  </a>
                  <a href="google.com" className="pi-star">
                    <i className="fas fa-star" />
                  </a>
                  <a href="google.com" className="pi-star">
                    <i className="fas fa-star" />
                  </a>
                  <a href="google.com" className="pi-star">
                    <i className="fas fa-star" />
                  </a>
                </div>
                <div className="pi-color">
                  <div className="pi-color-wrap">
                    <button
                      className="pi-color-child pic-1 picc-active"
                      data-img={this.props.imagesBlue}
                      onClick={evt => {
                        this.onclickColorProducts(evt);
                      }}
                    >
                      <span />
                    </button>
                    <button
                      className="pi-color-child pic-2"
                      data-img={this.props.images}
                      onClick={evt => {
                        this.onclickColorProducts(evt);
                      }}
                    >
                      <span />
                    </button>
                    <button
                      className="pi-color-child pic-3"
                      data-img={this.props.imagesRed}
                      onClick={evt => {
                        this.onclickColorProducts(evt);
                      }}
                    >
                      <span />
                    </button>
                  </div>
                </div>
              </div>
              <div className="pi-info-price">
                $ {this.format_currency(this.props.price)}
              </div>
            </div>
          </div>
        </div>
        {this.show_button()}
      </div>
    );
  }
}

export default SingleProduct;
