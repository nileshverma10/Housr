import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FooterTop.css";

export default class FooterTop extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      // speed: 2000,
      // autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div className="ftbox1">
        <Slider {...settings}>
          <div className="ftdiv1">
            <h3 className="ftnew">New Corp</h3>
            <h1 className="ftnew2">Verccile</h1>
          </div>
          <div className="ftdiv1">
            <h3 className="ftnew">The Economics Times</h3>
          </div>
          <div className="ftdiv1">
            <h3 className="ftnew">Live Mints</h3>
          </div>
          <div className="ftdiv1">
            <h3 className="ftnew">Bussines</h3>
            <h1 className="ftnew2">Standard</h1>
          </div>
          <div className="ftdiv1">
            <h3 className="ftnew">New Corp</h3>
            <h1 className="ftnew2">Verccile</h1>
          </div>
          <div className="ftdiv1">
            <h3 className="ftnew">Bussines</h3>
            <h1 className="ftnew2">Standard</h1>
          </div>
        </Slider>
      </div>
    );
  }
}
