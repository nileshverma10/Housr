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
      </div>
    </>
  );
}
