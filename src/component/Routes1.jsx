import React from "react";
import { Route, Routes } from "react-router-dom";
import Collecter from "./Collecter";
import About from "./About";
import Blog from "./Blog";
import Navbar1 from "./Navbar1";
import { MiniBox } from "./MiniBox";
import FooterTop from "./FooterTop";
import { Footer } from "./Footer";
import { Subscribe } from "./Subscribe";

const Routes1 = () => {
  return (
    <>
      <Navbar1 />
      <Routes>
        <Route exact path="/" element={<Collecter />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/blog" element={<Blog />}></Route>
      </Routes>
      <Subscribe />
      <FooterTop />
      <MiniBox />
      <Footer />
    </>
  );
};

export default Routes1;
