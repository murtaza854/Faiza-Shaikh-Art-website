import React from 'react';
import { Navbar, Nav, Container, Row } from 'react-bootstrap';
import './CustomNavbar.scss'

function CustomNavbar(props) {
    const scrollToAbout = _ => {
        var elmnt = document.getElementById("about-scroll");
        if (elmnt === null) window.location.pathname = '/';
        elmnt.scrollIntoView();
    }
    const scrollToWork = _ => {
        var elmnt = document.getElementById("work-scroll");
        if (elmnt === null) window.location.pathname = '/';
        elmnt.scrollIntoView();
    }
    return (
        <Container className="custom-navbar">
            <Row>
                <Navbar bg="transparent" expand="lg">
                    <Navbar.Brand className="navbar-brand-text" href="/">Faiza Shaikh</Navbar.Brand>
                    {/* <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link onClick={scrollToAbout}>About</Nav.Link>
                            <Nav.Link onClick={scrollToWork}>Work</Nav.Link>
                        </Nav>
                    </Navbar.Collapse> */}
                </Navbar>
            </Row>
        </Container>
    );
}

export default CustomNavbar;