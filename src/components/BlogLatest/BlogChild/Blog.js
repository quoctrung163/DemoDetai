import React, { Component } from "react";
import Slider from "react-slick";

class Blog extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      initialSlide: 0,
      centerPadding: "20px",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="blog-latest">
        <div className="blog-latest-wrap">
          <div className="row">
            <div className="blog-latest-title">
              <h1>Latest blog</h1>
              <span>The freshest and most exciting news</span>
            </div>
          </div>
          <div className="row">
            <div className="owl-one owl-carousel owl-theme">
              <Slider {...settings}>
                {/* Start blog 1 */}
                <div className="blog-latest-item blog-latest item">
                  <div className="bli-box-img">
                    <div className="bli-box-img-wrap">
                      <img
                        alt=""
                        src="./template/images/bag-blog1-380x380.jpg"
                      />
                    </div>
                  </div>
                  <div className="bli-box-content">
                    <p className="bli-box-c-cat">
                      <a href="google.com">BAGS</a>
                    </p>
                    <h5 className="bli-box-c-title">
                      <a href="google.com">Walk With A Bag</a>
                    </h5>
                    <div className="bli-readmore">
                      <i className="far fa-newspaper" />
                      <span>Read more</span>
                    </div>
                  </div>
                </div>
                {/* end blog 1 */}

                {/* Start blog 1 */}
                <div className="blog-latest-item blog-latest item">
                  <div className="bli-box-img">
                    <div className="bli-box-img-wrap">
                      <img
                        alt=""
                        src="./template/images/bag-blog4-380x380.jpg"
                      />
                    </div>
                  </div>
                  <div className="bli-box-content">
                    <p className="bli-box-c-cat">
                      <a href="google.com">BAGS</a>
                    </p>
                    <h5 className="bli-box-c-title">
                      <a href="google.com">Walk With A Bag</a>
                    </h5>
                    <div className="bli-readmore">
                      <i className="far fa-newspaper" />
                      <span>Read more</span>
                    </div>
                  </div>
                </div>
                {/* end blog 1 */}

                {/* Start blog 1 */}
                <div className="blog-latest-item blog-latest item">
                  <div className="bli-box-img">
                    <div className="bli-box-img-wrap">
                      <img
                        alt=""
                        src="./template/images/bag-blog5-380x380.jpg"
                      />
                    </div>
                  </div>
                  <div className="bli-box-content">
                    <p className="bli-box-c-cat">
                      <a href="google.com">BAGS</a>
                    </p>
                    <h5 className="bli-box-c-title">
                      <a href="google.com">Walk With A Bag</a>
                    </h5>
                    <div className="bli-readmore">
                      <i className="far fa-newspaper" />
                      <span>Read more</span>
                    </div>
                  </div>
                </div>
                {/* end blog 1 */}

                {/* Start blog 1 */}
                <div className="blog-latest-item blog-latest item">
                  <div className="bli-box-img">
                    <div className="bli-box-img-wrap">
                      <img
                        alt=""
                        src="./template/images/bag-blog-2-380x380.jpg"
                      />
                    </div>
                  </div>
                  <div className="bli-box-content">
                    <p className="bli-box-c-cat">
                      <a href="google.com">BAGS</a>
                    </p>
                    <h5 className="bli-box-c-title">
                      <a href="google.com">Walk With A Bag</a>
                    </h5>
                    <div className="bli-readmore">
                      <i className="far fa-newspaper" />
                      <span>Read more</span>
                    </div>
                  </div>
                </div>
                {/* end blog 1 */}

                {/* Start blog 1 */}
                <div className="blog-latest-item blog-latest item">
                  <div className="bli-box-img">
                    <div className="bli-box-img-wrap">
                      <img
                        alt=""
                        src="./template/images/bag-blog1-380x380.jpg"
                      />
                    </div>
                  </div>
                  <div className="bli-box-content">
                    <p className="bli-box-c-cat">
                      <a href="google.com">BAGS</a>
                    </p>
                    <h5 className="bli-box-c-title">
                      <a href="google.com">Walk With A Bag</a>
                    </h5>
                    <div className="bli-readmore">
                      <i className="far fa-newspaper" />
                      <span>Read more</span>
                    </div>
                  </div>
                </div>
                {/* end blog 1 */}

                {/* Start blog 1 */}
                <div className="blog-latest-item blog-latest item">
                  <div className="bli-box-img">
                    <div className="bli-box-img-wrap">
                      <img
                        alt=""
                        src="./template/images/bag-blog-2-380x380.jpg"
                      />
                    </div>
                  </div>
                  <div className="bli-box-content">
                    <p className="bli-box-c-cat">
                      <a href="google.com">BAGS</a>
                    </p>
                    <h5 className="bli-box-c-title">
                      <a href="google.com">Walk With A Bag</a>
                    </h5>
                    <div className="bli-readmore">
                      <i className="far fa-newspaper" />
                      <span>Read more</span>
                    </div>
                  </div>
                </div>
                {/* end blog 1 */}
                {/* Start blog 1 */}
                <div className="blog-latest-item blog-latest item">
                  <div className="bli-box-img">
                    <div className="bli-box-img-wrap">
                      <img
                        alt=""
                        src="./template/images/bag-blog1-380x380.jpg"
                      />
                    </div>
                  </div>
                  <div className="bli-box-content">
                    <p className="bli-box-c-cat">
                      <a href="google.com">BAGS</a>
                    </p>
                    <h5 className="bli-box-c-title">
                      <a href="google.com">Walk With A Bag</a>
                    </h5>
                    <div className="bli-readmore">
                      <i className="far fa-newspaper" />
                      <span>Read more</span>
                    </div>
                  </div>
                </div>
                {/* end blog 1 */}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
