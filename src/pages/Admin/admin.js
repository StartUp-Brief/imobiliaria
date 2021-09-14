import React from "react";
import {withRouter} from 'react-router-dom';
import NavBarSite from '../../components/NavBar/NavBar';
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

export default withRouter(Admin);