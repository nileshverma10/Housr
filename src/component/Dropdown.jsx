import React, { useState } from "react";
import Select from "react-select";
import "./Dropdown.css";

const options = [
  { value: "Gurugram", label: "Gurugram" },
  { value: "Hyderabad", label: "Hyderabad" },
  { value: "Pune", label: "Pune" },
  { value: "Banglore", label: "Banglore" },
];

export default function Dropdown() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <div className="dropdown">
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </div>
    </>
  );
}

// import React, { Component } from "react";
// import Select from "react-select";
// import "bootstrap/dist/css/bootstrap.min.css";
// const Countries = [
//   { label: "Albania", value: 355 },
//   { label: "Argentina", value: 54 },
//   { label: "Austria", value: 43 },
//   { label: "Cocos Islands", value: 61 },
//   { label: "Kuwait", value: 965 },
//   { label: "Sweden", value: 46 },
//   { label: "Venezuela", value: 58 },
// ];
// class Dropdown extends Component {
//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-md-3"></div>
//           <div className="col-md-6">
//             <Select options={Countries} />
//           </div>
//           <div className="col-md-4"></div>
//         </div>
//       </div>
//     );
//   }
// }
// export default Dropdown;
