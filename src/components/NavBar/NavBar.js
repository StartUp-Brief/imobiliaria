import React, { Fragment } from 'react'
import Logo from '../../img/logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './NavBar.css'

const NavBarSite = () => {
    return (
        <Fragment className="navbar">
            <Navbar bg="light" expand="md">
                <Container>
                    <Navbar.Brand href="/"><img className="logo_img" src={Logo}></img></Navbar.Brand>
                    <Navbar.Brand href="/">
                        <div className="titulo">
                            <h5>Imobiliária</h5>
                            <h5>Companhia de Oportunidades</h5>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="justify-content-end">
                            <Nav.Link className="nav_link" href="#link">Início</Nav.Link>
                            <Nav.Link className="nav_link" href="#link">Comprar</Nav.Link>
                            <Nav.Link className="nav_link" href="#link">Alugar</Nav.Link>
                            <Nav.Link className="nav_link" href="#link">Vender</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </Fragment>

    );
}

export default NavBarSite