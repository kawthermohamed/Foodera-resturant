import { Container, Nav, Navbar } from "react-bootstrap";
import "./navs.css";
function Headernav() {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home">
          <img src="../imgs/logo.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-bold">
            <Nav.Link className="nav-color" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="" href="#link">
              About Us
            </Nav.Link>
            <Nav.Link className="" href="#home">
              Explore Foods
            </Nav.Link>
            <Nav.Link className="" href="#home">
              Reviews
            </Nav.Link>
            <Nav.Link className="" href="#home">
              FAQ
            </Nav.Link>
            <Nav.Link className="phone-link" href="#home">
              1800 789 123
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headernav;
