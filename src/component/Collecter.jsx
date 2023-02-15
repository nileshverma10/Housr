import React from "react";
import Caro from "./Caro";
import CarouselCard1 from "./CarouselCard1";
import { Hero } from "./Hero";
import { Hero2 } from "./Hero2";
import MainNav from "./MainNav";
import Testimonial from "./Testimonial";

const Collecter = () => {
  return (
    <>
      <div>
        <MainNav />
        <Caro />
        <CarouselCard1 />
        <Hero />
        <Hero2 />
        <Testimonial />
      </div>
    </>
  );
};

export default Collecter;
