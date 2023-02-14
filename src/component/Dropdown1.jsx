import React, { Component } from "react";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dropdown1.css";
const options = [
  { value: "House Coloving", label: "House Coloving" },
  { value: "Housr Homes", label: "Housr Homes" },
  { value: "StayAbode by Housr", label: "StayAbode by Housr" },
];
class Dropdown1 extends Component {
  render() {
    return (
      <div className="container1">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Select options={options} />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}
export default Dropdown1;
