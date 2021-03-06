import * as React from 'react'
import { Navbar, NavDropdown, Container,  Nav } from 'react-bootstrap';
import { BsHeartFill } from "react-icons/bs";

const NavBar = (props) => {

    return ( 
        <>

<Navbar bg="light" expand="lg">
  <Container>
    <div className="heart-icon" id='heart'><BsHeartFill bg="red"/></div>
    <Navbar.Brand href="/">Weather-World</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        {/* <Nav.Link href="/">Home</Nav.Link> */}
        <Nav.Link href="/signup">Signup</Nav.Link>
        <NavDropdown title="WeatherDex" id="basic-nav-dropdown">
          <NavDropdown.Item href="/login">Login</NavDropdown.Item>
          <NavDropdown.Item href="/About">About</NavDropdown.Item>
          <NavDropdown.Item href="/form">Form</NavDropdown.Item>
          <NavDropdown.Item href="/Weather">Weather</NavDropdown.Item>
          <NavDropdown.Item href="/Space">Space</NavDropdown.Item>
          {props.user && 
          <>
          <NavDropdown.Item href="" onClick={props.handleLogout}>Logout</NavDropdown.Item>
          
          
          </>
        }
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
   

    </>  
     );
}
 
export default NavBar;