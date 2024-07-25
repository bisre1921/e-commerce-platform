import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {FaShoppingCart , FaUser} from 'react-icons/fa'
import "../custom-css/header.css"
import logo from "../assets/logo.png"
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
        <Navbar className='custom-navbar' variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand>
                        <img src={logo} alt="ProShop" className="logo"/>
                        ProShop
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to='/cart'>
                            <Nav.Link href="/cart">
                                <FaShoppingCart/> Cart
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/login'>
                            <Nav.Link href="/login">
                                <FaUser/> Sign In
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>       
        </Navbar>
    </header>
  )
}

export default Header