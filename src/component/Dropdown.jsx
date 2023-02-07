import Select from "react-dropdown-select";
import "./Dropdown.css";
export const Dropdown = () => {
  const options = [
    {
      value: 1,
      label: "Leanne Graham",
    },
    {
      value: 2,
      label: "Ervin Howell",
    },
  ];
  return (
    <>
      <Select options={options} onChange={(values) => this.setValues(values)} />
    </>
  );
};
