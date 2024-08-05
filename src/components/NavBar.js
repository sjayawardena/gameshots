import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';

/* Navbar and logo */
const NavBar = () => {
    return <Navbar className={styles.NavBar} expand="sm" fixed="top">
        <Container>
            <NavLink to="/">
                <Navbar.Brand><img src={logo} alt="logo" height="45" border="1px solid"></img></Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/"><i className="fas fa-home"></i>Home</NavLink>
                    <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signin"><i className="fas fa-sign-in-alt"></i>Sign In</NavLink>
                    <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signup"><i className="fas fa-user-plus"></i>Sign Up</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>;
};

export default NavBar