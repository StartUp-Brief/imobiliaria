import React from 'react';
import './login.css';
import NavBarSite from '../../components/NavBar/NavBar';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const Login = () => {

    return (
        <div>
            <NavBarSite />

            <Container>
                <Form className="FormLogin">
                    <Form.Group as={Row} className="mb-3" controlId="Email" >
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="email" name='email' placeholder="email@exemplo.com.br" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="Password" >
                        <Form.Label column sm="2">
                            Senha
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" name='senha' placeholder="Senha" />
                        </Col>
                    </Form.Group>
                    <div className="d-grid">

                        <Button className='enviar' type="submit" size='lg'>
                            Entrar
                        </Button>

                    </div>
                </Form>
            </Container>



        </div>

    )
}

export default Login;
