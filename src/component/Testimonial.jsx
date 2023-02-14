import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

export default class Testimonial extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      // autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="test">
        <h1 className="search1">Our Testimonials</h1>
        <h1 className="prop">Our Happy Housr Clan</h1>
        <div className="setting">
          <Slider {...settings}>
            <div className="setting1">
              <h3>
                <img className="ttimg" src="image/cd1.webp" alt="" />
              </h3>
            </div>
            <div>
              <h3>
                <img className="ttimg" src="image/cd2.webp" alt="" />
              </h3>
            </div>
            <div className="setting1">
              <h3>
                <img className="ttimg" src="image/cd3.webp" alt="" />
              </h3>
            </div>
            <div>
              <h3>
                <img className="ttimg" src="image/cd4.webp" alt="" />
              </h3>
            </div>
            <div className="setting1">
              <h3>
                <img className="ttimg" src="image/cd2.webp" alt="" />
              </h3>
            </div>
            <div>
              <h3>
                <img className="ttimg" src="image/cd1.webp" alt="" />
              </h3>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
