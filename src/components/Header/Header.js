import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
const Header = () => {
  const { user, logOut } = useFirebase();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
        <Container>
          <Navbar.Brand href="#home">SR-Health-Care</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto p-2">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/home#service">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/orders">
                Orders
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
              <span style={{ color: "white", marginTop: "8px" }}>
                {user.displayName && user.displayName}
              </span>
              {user?.uid ? (
                <Nav.Link as={Link} onClick={logOut} to="home">
                  Log Out
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login#login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
