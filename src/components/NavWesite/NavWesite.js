import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavWesite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  navElement = [
    // 1
    {
      active: false,
      tenClass: "test1",
      content: "fas fa-shopping-cart fa-2x",
      cssCustomIn: {
        transform: "translate(-20px,125px)",
        backgroundColor: "gray"
      },
      cssCustomOut: {
        transform: "none",
        backgroudColor: "dimGray"
      },
      linkWith: "/wishlist"
    },
    // 2
    {
      active: false,
      tenClass: "test2",
      content: "fa fa-user fa-2x",
      cssCustomIn: {
        transform: "translate(55px,105px)",
        backgroudColor: "darkGray"
      },
      cssCustomOut: {
        transform: "none",
        backgroudColor: "darkGray"
      },
      linkWith: "/"
    },
    // 3
    {
      active: false,
      tenClass: "test3",
      content: "fas fa-blog fa-2x",
      cssCustomIn: {
        transform: "translate(105px,50px)",
        backgroudColor: "gray"
      },
      cssCustomOut: {
        transform: "none",
        backgroudColor: "silver"
      },
      linkWith: "/blog"
    },
    // 4
    {
      active: false,
      tenClass: "test4",
      content: "fas fa-store-alt fa-2x",
      cssCustomIn: {
        transform: "translate(125px,-20px)",
        backgroudColor: "gray"
      },
      cssCustomOut: {
        transform: "none",
        backgroudColor: "silver"
      },
      linkWith: "/products"
    }
  ];

  showNavE = () => {
    if (!this.state.active) {
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
    }
  };
  render() {
    const showNavIn = this.navElement.map((item, index) => {
      return (
        <div key={index} className={item.tenClass} style={item.cssCustomIn}>
          <NavLink activeClassName="" to={item.linkWith}>
            <i className={item.content} />
          </NavLink>
        </div>
      );
    });
    // const showNavOut = this.navElement.map((item, index) => {
    //   return (
    //     <div key={index} className={item.tenClass} style={item.cssCustomOut}>
    //       <NavLink activeClassName="" to={item.linkWith}>
    //         <i className={item.content} />
    //       </NavLink>
    //     </div>
    //   );
    // });
    return (
      <div className="parent2">
        {/* <div className="test1">
          <i className="fa fa-user fa-2x" />
        </div>
        <div className="test2">
          <Link to="/">
            <i className="fa fa-graduation-cap fa-2x" />
          </Link>
        </div>
        <div className="test3">
          <Link to="/blog">
            <i className="fas fa-blog fa-2x" />
          </Link>
        </div>
        <div className="test4">
          <Link to="/products">
            <i className="fas fa-store-alt fa-2x" />
          </Link>
        </div> */}
        {/* {this.state.active ? showNavIn : showNavOut} */}
        {showNavIn}
        <div className="mask2" onMouseDown={() => this.showNavE()}>
          <i className="fa fa-home fa-3x" />
        </div>
      </div>
    );
  }
}

export default NavWesite;
