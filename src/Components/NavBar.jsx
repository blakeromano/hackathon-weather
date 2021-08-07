// import React from 'react';
import * as React from 'react'
import { Navbar, NavDropdown, Container,  Nav } from 'react-bootstrap';

const NavBar = () => {
    return ( 
        <>
{/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark "> 
  <ul> 
    <li><a href="/"> Home</a></li> 
    <li><a href="/about">About</a></li>
    <li><a href="/">Space</a></li>
    <li><a href="/">Weather</a></li>
    
    <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input className="btn btn-outline-success"type="submit" value="Submit" />
</form>
 </ul> 
</nav>  */}

<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Weather-World</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <NavDropdown title="namewillchange" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Weather</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Space</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Stretch</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
   
    </>  
     );
}
 
export default NavBar;