import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar1.css";

function Navbar1() {
  return (
    <Navbar bg="red navbar" expand="lg">
      <Container lg={12} md={10}>
        <Navbar.Brand href="/">
          <img className="logoimg" src="./image/logo-housr.webp" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto items">
            <Nav.Link className="home" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="home" href="/about">
              About Us
            </Nav.Link>
            <Nav.Link className="home" href="#link">
              {/* <Category /> */}
              Category
              <i class="fa-sharp fa-solid fa-angle-down"></i>
            </Nav.Link>
            <Nav.Link className="home" href="#link">
              {/* <Location /> */}
              Location
              <i class="fa-sharp fa-solid fa-angle-down"></i>
            </Nav.Link>
            <Nav.Link className="home" href="/blog">
              Blogs
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <p className="call">Give us call-on</p>
        <p className="number">9090908778</p>
        <p className="or">--OR--</p>
        <button className="request">REQUEST CALL</button>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
