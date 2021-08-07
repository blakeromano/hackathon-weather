import * as React from 'react'
import { Navbar, NavDropdown, Container,  Nav } from 'react-bootstrap';
import { BsHeartFill } from "react-icons/bs";

const NavBar = () => {
    return ( 

        <>

<Navbar bg="light" expand="lg">
  <Container>
    <div id='heart'><BsHeartFill bg="red"/></div>
    <Navbar.Brand href="/">Weather-World</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        {/* <Nav.Link href="/">Home</Nav.Link> */}
        <Nav.Link href="/about">About</Nav.Link>
        <NavDropdown title="namewillchange" id="basic-nav-dropdown">
        <NavDropdown.Item href="/">Home</NavDropdown.Item>
          <NavDropdown.Item href="/Weather">Weather</NavDropdown.Item>
          <NavDropdown.Item href="/Space">Space</NavDropdown.Item>
          <NavDropdown.Item href="/">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/">Stretch</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
   

    </>  
     );
}
 
export default NavBar;