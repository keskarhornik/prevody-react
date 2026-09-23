import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Card, Col, InputGroup, Row } from 'react-bootstrap';
import { useState } from 'react';
import MainForm from './Test.jsx';
import { Home } from './Home.jsx';
import { LogInScreen } from './LogIn.jsx';
import { useEffect } from 'react'; // Add useEffect here
const PagesMap = {
  "home" : <Home></Home>,
  "LogIn" : <LogInScreen></LogInScreen>
}

function NavMenu({MainContentSetter}){
    return (
    <Navbar bg="primary" variant='dark' expand={false} className="mb-3">
      <Container fluid>
        <Navbar.Brand onClick={() => {MainContentSetter("home")}}>Offcanvas navbar</Navbar.Brand>
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
              <Nav.Link onClick={() => {MainContentSetter("home")}}>Home</Nav.Link>
              <Nav.Link onClick={() => {MainContentSetter(<Home></Home>)}}>Link</Nav.Link>
              <NavDropdown title="Account" id="offcanvasNavbarDropdown">
                <NavDropdown.Item onClick={() => {MainContentSetter("LogIn")}}>Log In</NavDropdown.Item>
                <NavDropdown.Item onClick={() => {MainContentSetter(<Home></Home>)}}>Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default function App() {

  const [activeMain, setActiveMain] = useState(() => {
    const saved = localStorage.getItem('activeMain');
    // Default to 'home' if nothing saved or key is invalid
    return saved && PagesMap[saved] ? saved : 'home';
  });

  // 2. Save to localStorage every time 'count' changes
  useEffect(() => {
    localStorage.setItem('activeMain', activeMain);
  }, [activeMain]);

  return (
    <>
    <header>
        <NavMenu MainContentSetter={setActiveMain}/>
    </header>
    <main>
        <Container>
            {PagesMap[activeMain]}
        </Container>
    </main>
    </>
  );
}

