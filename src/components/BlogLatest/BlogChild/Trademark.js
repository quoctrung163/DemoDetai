import React, { Component } from "react";
import Slider from "react-slick";

class Trademark extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="trademark">
        <div className="trademark-wrap row">
          <div className="owl-two owl-carousel owl-theme">
            <Slider {...settings}>
              <div className="item">
                <div className="trademark-box-img">
                  <div className="trademark-box-img-wrap">
                    <img alt="" src="template/images/brand-1.jpg" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="trademark-box-img">
                  <div className="trademark-box-img-wrap">
                    <img alt="" src="template/images/brand-2.jpg" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="trademark-box-img">
                  <div className="trademark-box-img-wrap">
                    <img alt="" src="template/images/brand-3.jpg" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="trademark-box-img">
                  <div className="trademark-box-img-wrap">
                    <img alt="" src="template/images/brand-4.jpg" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="trademark-box-img">
                  <div className="trademark-box-img-wrap">
                    <img alt="" src="template/images/brand-5.jpg" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="trademark-box-img">
                  <div className="trademark-box-img-wrap">
                    <img alt="" src="template/images/brand-6.jpg" />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default Trademark;
