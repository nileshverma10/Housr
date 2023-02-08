import { Dropdown } from "rsuite";
import "./Location.css";
import "rsuite/dist/rsuite.min.css";
import { ButtonToolbar } from "rsuite";
const CustomDropdown = ({ ...props }) => (
  <Dropdown {...props}>
    <Dropdown.Item>Gurgaon</Dropdown.Item>
    {/* <hr className="hr" /> */}
    <Dropdown.Item>Hyedrabad</Dropdown.Item>
    {/* <hr className="hr" /> */}
    <Dropdown.Item>Pune</Dropdown.Item>
    {/* <hr className="hr" /> */}
    <Dropdown.Item>Banglore</Dropdown.Item>
    {/* <Dropdown.Item>New File with Current Profile</Dropdown.Item>
    <Dropdown.Item>Download As...</Dropdown.Item>
    <Dropdown.Item>Export PDF</Dropdown.Item>
    <Dropdown.Item>Export HTML</Dropdown.Item>
    <Dropdown.Item>Settings</Dropdown.Item>
    <Dropdown.Item>About</Dropdown.Item> */}
  </Dropdown>
);

const Location = () => (
  <ButtonToolbar>
    <CustomDropdown className="location" title="Location" trigger="hover" />
    {/* <CustomDropdown title="Click" trigger="click" />
    <CustomDropdown title="Right Click" trigger="contextMenu" />
    <CustomDropdown title="Click and Hover" trigger={["click", "hover"]} /> */}
  </ButtonToolbar>
);

export default Location;
