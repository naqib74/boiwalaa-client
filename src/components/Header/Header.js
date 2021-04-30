import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (

        <Navbar expand="lg">
        <Navbar.Brand href="#home">Boiwala</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">ABOUT US</Nav.Link>
            <Nav.Link href="#link">BLOG</Nav.Link>
            <Nav.Link href="#link"> <Link to='/admin'>ADMIN</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/login"><button class="btn btn-primary">LogIn</button></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     
    );
};

export default Header;