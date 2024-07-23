import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {FaShoppingCart , FaUser} from 'react-icons/fa'
import "../custom-css/header.css"

const Header = () => {
  return (
    <header>
        <Navbar className='custom-navbar' variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">ProShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/cart"><FaShoppingCart/> Cart</Nav.Link>
                        <Nav.Link href="/login"><FaUser/> Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>       
        </Navbar>
    </header>
  )
}

export default Header