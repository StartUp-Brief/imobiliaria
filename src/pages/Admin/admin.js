import React from "react";
import {useForm} from 'react-hook-form';
import NavBarSite from '../../components/NavBar/NavBar';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import FormCadastro from '../../components/formCadastro/formCadastro'
import './admin.css'

const Admin = () =>{


    return(

        <div >
            <NavBarSite/>
            <div className='admin'>
            <FormCadastro></FormCadastro>

            </div>
        </div>
    );
};

export default Admin;