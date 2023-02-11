import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Category from './Category'
import Location from './Location'
import './Navbar1.css'

function Navbar1() {
  return (
    <Navbar className="navbar" bg="light" expand="lg">
      <Container lg={12} md={10}>
        <Navbar.Brand href="#home">
          <img className="logoimg" src="./image/logo-housr.webp" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto items">
            <Nav.Link className="home" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="home" href="#link">
              About Us
            </Nav.Link>
            <Nav.Link className="home" href="#link">
              <Category />
              {/* <i class="fa-sharp fa-solid fa-angle-down"></i> */}
            </Nav.Link>
            <Nav.Link className="home" href="#link">
              <Location />
              {/* <i class="fa-sharp fa-solid fa-angle-down"></i> */}
            </Nav.Link>
            <Nav.Link className="home" href="#link">
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
  )
}

export default Navbar1
