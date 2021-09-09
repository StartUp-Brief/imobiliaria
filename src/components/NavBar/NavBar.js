import React, { Fragment } from 'react'
import Logo from '../../img/logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './NavBar.css'
import { Link } from 'react-router-dom';


const NavBarSite = () => {
    return (
        <Fragment className="navbar">
                <Navbar bg="light" expand="md">
                    <Container>
                        <Navbar.Brand ><img className="logo_img" src={Logo}></img></Navbar.Brand>
                        <Navbar.Brand>
                            <div className="titulo">
                                <h5>Imobiliária</h5>
                                <h5>Companhia de Oportunidades</h5>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="justify-content-end"/>
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav className="justify-content-end">
                                <Link to='/Home' className="nav_link">Início</Link>
                                <Link to='/Home' className="nav_link">Comprar</Link>
                                <Link to='/Home' className="nav_link">Alugar</Link>
                                <Link to='/Home' className="nav_link">Vender</Link>
                                <Link to='/Login'><Button className="login-btn">Login</Button></Link>
                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>

        </Fragment>

    );
}

export default NavBarSite