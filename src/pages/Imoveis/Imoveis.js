import React from "react";
import { withRouter } from 'react-router-dom';
import NavBarSite from '../../components/NavBar/NavBar';
import ListaDeImagens from "../../components/ListaDeImagens/ListaDeImagens";
import './Imoveis.css'

const Imoveis = () => {
    const listaDeImagensUrbano = [
        {
            id: 1,
            imagem: 'img/Imoveis/apt_sp_zonaNorte_1/1.jpeg',
            complemento: 'Apartamento',
            desc: 'Excelente apto 3 dormitórios, sala 2 ambientes, cozinha e área de serviço Preço R$350 mil com lazer completo.',
            cidade: 'São Paulo',
            bairro: 'Zona Norte'
        },
        {
            id: 2,
            imagem: 'img/Imoveis/apt_sp_zonaNorte_1/1.jpeg',
            complemento: 'Apartamento',
            desc: 'Excelente apto 3 dormitórios, sala 2 ambientes, cozinha e área de serviço Preço R$350 mil com lazer completo.',
            cidade: 'São Paulo',
            bairro: 'Zona Norte'
        },
        {
            id: 3,
            imagem: 'img/Imoveis/apt_sp_zonaNorte_1/1.jpeg',
            complemento: 'Apartamento',
            desc: 'Excelente apto 3 dormitórios, sala 2 ambientes, cozinha e área de serviço Preço R$350 mil com lazer completo.',
            cidade: 'São Paulo',
            bairro: 'Zona Norte'
        },
        {
            id: 4,
            imagem: 'img/Imoveis/apt_sp_zonaNorte_1/1.jpeg',
            complemento: 'Apartamento',
            desc: 'Excelente apto 3 dormitórios, sala 2 ambientes, cozinha e área de serviço Preço R$350 mil com lazer completo.',
            cidade: 'São Paulo',
            bairro: 'Zona Norte'
        },
    ]

    return (

        <div>
            <NavBarSite />
            <div className="lista_imoveis">
                <ListaDeImagens listaDeImagens={listaDeImagensUrbano} titulo={"Imóveis"} />
            </div>



        </div>

    );
};

export default withRouter(Imoveis);