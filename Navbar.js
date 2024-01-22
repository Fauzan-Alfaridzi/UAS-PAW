import React from "react";
import { Nav, Navbar, NavDropdown, Container, FormControl, Button, Form } from 'react-bootstrap'

const NavbarComponent = () => {

    return (

        <Navbar variant="dark" expand="19">
            <Container>
            <Navbar.Brand href="#home">Check-in Kamar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Login</Nav.Link>
                    <NavDropdown title="Pilih Aplikasi" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Oyo.com</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Reddoorz.com
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Agoda.com</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;