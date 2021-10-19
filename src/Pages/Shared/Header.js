import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/banner/logo-dark.png';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
        <Container>
          <img style={{ width: 110, height: 50 }} src={logo} alt="" />
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
            <Nav.Link as={HashLink} to="/home#specialist">Specialist</Nav.Link>
            <Nav.Link as={HashLink} to="/home#appointment">Appoinment</Nav.Link>


            {user?.email ?
              <Button onClick={logOut} variant="light">LogOut</Button> :
              <Nav.Link as={Link} to="/registration">Login</Nav.Link>}
            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>

        </Container>
      </Navbar>


    </>
  );
};

export default Header;