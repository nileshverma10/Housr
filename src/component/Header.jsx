import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <img className="logo" src="image/logo-housr.webp" alt="" />
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>
            <div className="cate">
              Category <i class="fa-sharp fa-solid fa-chevron-down"></i>
            </div>
            <div className="style">
              <ol className="ol">
                <li className="living">Housr Co-Living</li>
                <hr className="hr" />
                <li className="living2">Housr Homes</li>
                <hr className="hr" />
                <li className="living3">StayAbode by Housr</li>
                <hr className="hr" />
              </ol>
            </div>
          </li>
          <li>
            Locations <i class="fa-sharp fa-solid fa-chevron-down"></i>
            <div className="style">
              <ol className="ol">
                <li className="living">Gurgaon</li>
                <hr className="hr" />
                <li className="living2">Hyedrabad</li>
                <hr className="hr" />
                <li className="living3">Pune</li>
                <hr className="hr" />
                <li className="living3">Banglore</li>
                <hr className="hr" />
              </ol>
            </div>
          </li>
          <li>Blog</li>
        </ul>
        <p className="call">Give us call-on</p>
        <p className="number">9090908778</p>
        <p className="or">--OR--</p>
        <button className="request">REQUEST CALL</button>
      </div>
    </>
  );
};

export default Header;
