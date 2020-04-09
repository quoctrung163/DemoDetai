import React, { Component } from "react";
import {
  //as dùng để định danh cho BrowserRouter lại thành Router
  Switch,
  Route,
  Redirect
  //   Link,
  //   useHistory,
  //   useLocation,
  //   useParams
} from "react-router-dom";
import Home from "../Home/Home";
import ProductsPage from "../ProductsPage/ProductsPage";
import BlogLatest from "../BlogLatest/BlogLatest";
import DetailProduct from "../TabProducts/detailProduct/DetailProduct";
import WishlistProduct from "../TabProducts/wishlistProduct/WishlistProduct";

class RouterURL extends Component {
  render() {
    return (
      <div>
        {/* router chỉ chứa 1 div chứa các phần tử con khác */}
        <Switch>
          <Redirect from="/wishlistId/:id" to="/products" />
        </Switch>
        <Switch>
          <Route exact path="/chi-tiet/:id/:slug" component={DetailProduct} />
          <Route path="/products" component={ProductsPage} />

          <Route path="/blog" component={BlogLatest} />
          <Route path="/wishlist" component={WishlistProduct} />
          <Route exact path="/*" component={Home} />
          <Route component={Home} />
          {/* <BlogLatest /> */}
          {/* </Route> */}
        </Switch>
      </div>
    );
  }
}

export default RouterURL;
