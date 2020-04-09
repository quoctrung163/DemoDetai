import React, { Component } from "react";
import BackPacks from "./TabChild/BackPacks";
import Handbags from "./TabChild/Handbags";
import Onsale from "./TabChild/Onsale";
import Featured from "./TabChild/Featured";

class Tab_products extends Component {
  openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("trendy-tab-block");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tit-tab-item");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" tit-active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " tit-active";
  }
  render() {
    return (
      <div className="tab_products_container">
        <div className="container-fluid large-12">
          <div className="trendy-item-wrap">
            <div className="trendy-item-wrap-title">
              <h1>Trendy item</h1>
            </div>
            <div className="trendy-item-tabs-title">
              <div className="trendy-item-tabs-title-wrap">
                <ul className="tit-tab-list">
                  <li
                    className="tit-tab-item tit-active"
                    data-tab="tab-trendy-backpacks"
                    onClick={evt => {
                      this.openCity(evt, "tab-trendy-backpacks");
                    }}
                  >
                    <h5>SHOES</h5>
                  </li>
                  <li
                    className="tit-tab-item"
                    data-tab="tab-trendy-handbags"
                    onClick={evt => {
                      this.openCity(evt, "tab-trendy-handbags");
                    }}
                  >
                    <h5>HANDBAGS</h5>
                  </li>
                  <li
                    className="tit-tab-item "
                    data-tab="tab-trendy-onSale"
                    // onKeyDown={() => {
                    //   window.location.reload(true);
                    // }}
                    onClick={evt => {
                      this.openCity(evt, "tab-trendy-onSale");
                    }}
                  >
                    <h5>BACKPACKS</h5>
                  </li>
                  <li
                    className="tit-tab-item"
                    data-tab="tab-trendy-featured"
                    onClick={evt => {
                      this.openCity(evt, "tab-trendy-featured");
                    }}
                  >
                    <h5>FEATURED</h5>
                  </li>
                  {/* <li
                    className="tit-tab-item"
                    data-tab="tab-trendy-featured"
                    onClick={evt => {
                      this.openCity(evt, "tab-trendy-featured");
                    }}
                  >
                    <h5>
                      <a
                        href={
                          "chi-tiet/" +
                          this.props.idShoesP +
                          "/" +
                          this.props.children +
                          ".html"
                        }
                      >
                        See all shoes
                      </a>
                    </h5>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="trendy-tab-block-wrap">
          {/* tab_1 */}
          <BackPacks />
          {/* tab_2 */}
          <Handbags />
          {/* tab_3 */}
          <Onsale />
          {/* tab_4 */}
          <Featured />
        </div>
      </div>
    );
  }
}

export default Tab_products;
