import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { useState, useEffect } from 'react';
function NavBar({projects, setActiveProject}) {

  function handleProjectClick(project){
    setActiveProject(project)
  }


  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Judit's fancy app for HE reports</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Dashboard</Nav.Link>
            <Nav.Link href="#pricing">Settings</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              {projects.map((project => <NavDropdown.Item onClick={() => handleProjectClick(project)} key={project.id} href="">{project.internal_code}</NavDropdown.Item>))}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;