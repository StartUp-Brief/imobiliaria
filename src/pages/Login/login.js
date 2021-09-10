import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';
import './login.css';
import NavBarSite from '../../components/NavBar/NavBar';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const Login = () => {

    const { register, handleSubmit } = useForm();
    let history = useHistory();

    function handleLogin(data) {
        if (data.email === "admin@gmail.com" && data.senha === "12345") {
            history.replace("/admin")
        } else {
            console.log(data.email, data.senha, "ERRO")

        }


    }

    return (
        <div>
            <NavBarSite />

            <Container>
                <Form className="FormLogin" onSubmit={handleSubmit(handleLogin)}>
                    <Form.Group as={Row} className="mb-3" controlId="Email" >
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="email" name='email' placeholder="email@exemplo.com.br" {...register('email')} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="Password" >
                        <Form.Label column sm="2">
                            Senha
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" name='senha' placeholder="Senha" {...register('senha')} />
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
