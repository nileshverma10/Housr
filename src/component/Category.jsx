import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { ButtonToolbar } from "rsuite";
const CustomDropdown = ({ ...props }) => (
  <Dropdown {...props}>
    <a href="https://housr.in/housr-coliving">
      <Dropdown.Item>Housr Co-Living</Dropdown.Item>
    </a>
    {/* <hr className="hr" /> */}
    <Dropdown.Item>Housr Homes</Dropdown.Item>
    {/* <hr className="hr" /> */}
    <Dropdown.Item>StayAbode by Housr</Dropdown.Item>
    {/* <Dropdown.Item>New File with Current Profile</Dropdown.Item>
    <Dropdown.Item>Download As...</Dropdown.Item>
    <Dropdown.Item>Export PDF</Dropdown.Item>
    <Dropdown.Item>Export HTML</Dropdown.Item>
    <Dropdown.Item>Settings</Dropdown.Item>
    <Dropdown.Item>About</Dropdown.Item> */}
  </Dropdown>
);

const Category = () => (
  <ButtonToolbar>
    <CustomDropdown className="location" title="Category" trigger="hover" />
    {/* <CustomDropdown title="Click" trigger="click" />
    <CustomDropdown title="Right Click" trigger="contextMenu" />
    <CustomDropdown title="Click and Hover" trigger={["click", "hover"]} /> */}
  </ButtonToolbar>
);

export default Category;
