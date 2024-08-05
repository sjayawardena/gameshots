import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import styles from '../styles/NavBar.module.css'

/* Navbar and logo */
const NavBar = () => {
    return <Navbar className={styles.NavBar} expand="sm" fixed="top">
        <Container>
            <Navbar.Brand><img src={logo} alt="logo" height="45" border="1px solid"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link className="nav-link"><i className="fas fa-home"></i>Home</Nav.Link>
                    <Nav.Link className="nav-link"><i className="fas fa-sign-in-alt"></i>Sign In</Nav.Link>
                    <Nav.Link className="nav-link"><i className="fas fa-user-plus"></i>Sign Up</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>;
};

export default NavBar