import React from "react";
import { withRouter } from 'react-router-dom';
import NavBarSite from '../../components/NavBar/NavBar';
import './Contato.css'

const Contato = () => {


    return (

        <div >
            <NavBarSite />
            <div className='Contato'>
                <h1>
                    Contato
                </h1>

            </div>
        </div>
    );
};

export default withRouter(Contato);