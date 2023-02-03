import Dropdown from "./Dropdown";

export default function DropdownItem() {
  const options = [
    { value: "Pune", label: "Pune" },
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Gurugram", label: "Gurugram" },
    { value: "Banglore", label: "Banglore" },
  ];
  return (
    <div className="App">
      <Dropdown placeHolder="Select..." options={options} />
    </div>
  );
}
