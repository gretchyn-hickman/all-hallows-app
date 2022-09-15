import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav.css'

function BasicExample() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href=" ">All-Hallows High</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href=" ">Home</Nav.Link>
            <Nav.Link href="archive">Archive</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="Quizes">Quizes</NavDropdown.Item>
              <NavDropdown.Item href="Characters">
                Caracters
              </NavDropdown.Item>
              <NavDropdown.Item href="Comunity">Community</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="Support">
              Support Your Artists
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;