import React,{Fragment, useState} from 'react'
import Logo from '../../img/logo.png'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './NavBar.css'

const NavBarSite = ()=>{
    return(
        <Fragment className="navbar">
<Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/"><img className="logo_img" src={Logo}></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto ">
                    <div className="nav_container">
                    <Nav.Link href="#home">
                        <div className="titulo">
                            <h5>Imobiliária</h5>
                            <h5>Companhia de Oportunidades</h5>
                        </div>
                    </Nav.Link>
                    <div className="nav_links">
                        <Nav.Link href="#link">Início</Nav.Link>
                        <Nav.Link href="#link">Comprar</Nav.Link>
                        <Nav.Link href="#link">Alugar</Nav.Link>
                        <Nav.Link href="#link">Vender</Nav.Link>
                    </div>
                    </div>
                    
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </Fragment>
        
    );
}

export default NavBarSite