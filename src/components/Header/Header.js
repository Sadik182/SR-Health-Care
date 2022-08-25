import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
const Header = () => {
  const {user, logOut} = useFirebase();
  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">SR-Health-Care</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
            <span style={{color: 'white', marginTop: '8px'}}>{user.displayName && user.displayName}</span>
            {
              user?.uid ?
              <Nav.Link as={Link} onClick={logOut}>
                  Log Out
              </Nav.Link> :
              <Nav.Link as={Link} to="/login#login">
              Login
            </Nav.Link>
            }
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
