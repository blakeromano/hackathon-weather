import * as React from 'react'


const NavBar = () => {
    return ( 

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