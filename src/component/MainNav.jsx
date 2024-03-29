import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Dropdown from "./Dropdown";
import Dropdown1 from "./Dropdown1";
import "./MainNav.css";

function MainNav(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel className="width" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 navimg"
            src="image/c1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 navimg"
            src="image/c2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 navimg"
            src="image/c3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="mainnavbox">
        <Dropdown />
        <Dropdown1 className="drop2" />
        <button className="search">Search</button>
      </div>
      <div>
        <h1 className="search1">Most Searched</h1>
      </div>
      <h2 className="prop">Housr Properties</h2>
    </>
  );
}

export default MainNav;
