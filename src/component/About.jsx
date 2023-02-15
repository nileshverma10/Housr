import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div>
        <img className="abtimg" src="image/aboutimage.webp" alt="" />
        <h1 className="abttext">About Us</h1>
      </div>
      <div className="abtbox1">
        Founded in 2018 by industry veterans Deepak Anand and Kalpesh Mehta,
        Housr is a leading managed accommodation platform in India. Currently,
        the company’s operations are spread across 3 verticals, namely, Housr
        Co-living, Housr Homes, and StayAbode by Housr. Together they make up a
        vast portfolio of 70+ luxury-centric properties including
        fully-furnished rooms, studio spaces, as well as complete apartments,
        all designed to meet the unique living needs of modern, tech-forward
        working professionals, couples, and small families. Housr is currently
        spread across Gurgaon, Pune, Hyderabad, and Bangalore, with rapid
        widespread expansion in the offing.
      </div>
    </>
  );
};

export default About;
