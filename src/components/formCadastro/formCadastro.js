import React from "react";
import { useForm } from 'react-hook-form';
import NavBarSite from '../../components/NavBar/NavBar';
import { Form, Col, Row, Select } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './formCadastro.css';

const FormCadastro = () => {


    return (

        <div className="formCadastro">
            <h1> Cadastro de imóvel</h1>

            <Form className="Form">
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Logradouro</Form.Label>
                        <Form.Control required name="logradouro" type="text" placeholder="Ex: Rua Olinda Das Flores" />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Número</Form.Label>
                        <Form.Control required name="numero" type="number" placeholder="Número" />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control required name="bairro" placeholder="Jardim das flores" />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Complemento</Form.Label>
                        <Form.Control required name="complemento" placeholder="Casa /Apartamento 123 /Loteamento " />
                    </Form.Group>

                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Estado</Form.Label>
                        <Form.Control required name="estado" as="Select" aria-label="Floating label select example">
                            <option>Selecione o Estado</option>
                            <option value="Acre">Acre</option>
                            <option value="Alagoas">Alagoas</option>
                            <option value="Amapá">Amapá</option>
                            <option value="Amazonas">Amazonas</option>
                            <option value="Bahia">Bahia</option>
                            <option value="Ceará">Ceará</option>
                            <option value="Espirito Santo">Espirito Santo</option>
                            <option value="Goiás">Goiás</option>
                            <option value="Maranhão">Maranhão</option>
                            <option value="Mato Grosso">Mato Grosso</option>
                            <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                            <option value="Minas Gerais">Minas Gerais</option>
                            <option value="Pará">Pará</option>
                            <option value="Paraíba">Paraíba</option>
                            <option value="Paraná">Paraná</option>
                            <option value="Pernambuco">Pernambuco</option>
                            <option value="Piauí">Piauí</option>
                            <option value="Rio de Janeiro">Rio de Janeiro</option>
                            <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                            <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                            <option value="Rondônia">Rondônia</option>
                            <option value="Roraima">Roraima</option>
                            <option value="Santa Catarina">Santa Catarina</option>
                            <option value="São Paulo">São Paulo</option>
                            <option value="Sergipe">Sergipe</option>
                            <option value="Tocantins">Tocantins</option>
                            <option value="Distrito Federal">Distrito Federal</option>

                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} >
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control required name="cidade" placeholder="Cidade" />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>CEP</Form.Label>
                        <Form.Control required name="cep" placeholder="xxxxx-xxx" />
                    </Form.Group>

                    

                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Tipo</Form.Label>
                        <Form.Control required name="tipo" as="Select" aria-label="Floating label select example">
                            <option>Tipo</option>
                            <option value="Acre">Urbano</option>
                            <option value="Alagoas">Rural</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Preço</Form.Label>
                        <Form.Control required name="preco" placeholder="R$" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Ação</Form.Label>
                        <Form.Control required name="acao" as="Select" aria-label="Floating label select example">
                            <option>Compra-se / Aluga-se</option>
                            <option value="Acre">Alugar</option>
                            <option value="Alagoas">Vender</option>
                        </Form.Control>
                    </Form.Group>
                </Row>

                <Row className="mb-3">

                    <Form.Group as={Col}>
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control as="textarea" rows={4} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formFileMultiple" >
                        <Form.Label className="arquivo">Insira alguma imagem do imóvel</Form.Label>
                        <Form.Control type="file" multiple />
                    </Form.Group>

                </Row>
                <div className="d-grid gap-2">
                    <Button className='enviar' type="submit" size='lg'>
                        Enviar
                    </Button>
                </div>

            </Form>

        </div>
    );
}

export default FormCadastro;