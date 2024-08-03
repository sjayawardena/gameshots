import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    return <Navbar expand="md" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link><i className="fas fa-home"></i>Home</Nav.Link>
                    <Nav.Link><i className="fas fa-sign-in-alt"></i>Sign In</Nav.Link>
                    <Nav.Link><i className="fas fa-user-plus"></i>Sign Up</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>;
};

export default NavBar