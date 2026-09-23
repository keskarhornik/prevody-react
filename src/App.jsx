import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Card, Col, InputGroup, Row } from 'react-bootstrap';
import { useState } from 'react';
import MainForm from './Test.jsx'

function NavMenu({MainContentSetter}){
    return (
    <Navbar bg="primary" variant='dark' expand={false} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">Offcanvas navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          bg="primary"
          className="offcanvas offcanvas-end text-bg-primary"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default function App() {

  const [activeMain, setActiveMain] = useState(<Home></Home>)

  return (
    <>
    <header>
        <NavMenu/>
    </header>
    <main>
        <Container>
            <MainForm jednotky={["j", "Kj"]}/>
        </Container>
    </main>
    </>
  );
}

