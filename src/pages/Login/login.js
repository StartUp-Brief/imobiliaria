import React from 'react';
import './login.css';
import NavBarSite from '../../components/NavBar/NavBar';
import Form from 'react-bootstrap/Form';
import { FormGroup } from 'react-bootstrap';
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
                        <Form.Group as={Row} className="mb-3" controlId="Email">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control placeholder="email@exemplo.com.br" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="Password">
                            <Form.Label column sm="2">
                                Senha
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="password" placeholder="Senha" />
                            </Col>
                        </Form.Group>

                        <Button className='enviar' type="submit">
                            Enviar
                        </Button>
                    </Form>
            </Container>



        </div>

    )
}

export default Login;
