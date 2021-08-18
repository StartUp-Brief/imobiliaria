import React, { Fragment } from 'react';
import './App.css';
import NavBarSite from './components/NavBar/NavBar'
import ListaDeImagens from './components/ListaDeImagens/ListaDeImagens';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
function App() {
	const listaDeImagensUrbano = [
		{
			id: 1,
			imagem: 'img/urbano/urbano1.png'
		},
		{
			id: 2,
			imagem: 'img/urbano/urbano2.png'
		},
		{
			id: 3,
			imagem: 'img/urbano/urbano3.png'
		},
		{
			id: 4,
			imagem: 'img/urbano/urbano4.png'
		},
	]
	const listaDeImagensChacaras = [
		{
			id: 1,
			imagem: 'img/Chácaras/chacaras1.png'
		},
		{
			id: 2,
			imagem: 'img/Chácaras/chacaras2.png'
		},
		{
			id: 3,
			imagem: 'img/Chácaras/chacaras3.png'
		},
		{
			id: 4,
			imagem: 'img/Chácaras/chacaras4.png'
		},
	]
	const listaDeImagensComercial = [
		{
			id: 1,
			imagem: 'img/Comercial/comercial1.png'
		},
		{
			id: 2,
			imagem: 'img/Comercial/comercial2.png'
		},
		{
			id: 3,
			imagem: 'img/Comercial/comercial3.png'
		},
		{
			id: 4,
			imagem: 'img/Comercial/comercial4.png'
		},
	]
	const banners = [
		{
			id: 1,
			imagem: 'img/Banners/Banner1.png'
		},
		{
			id: 2,
			imagem: 'img/Banners/Banner2.png'
		},
		{
			id: 3,
			imagem: 'img/Banners/Banner3.png'
		},
	]
	return (
		<div className="App">
			<NavBarSite />
			<Banner imagem={banners[0]["imagem"]} title="Encontre o imóvel ideal conosco" align="flex-end" />
			<Banner imagem={banners[1]["imagem"]} title="Melhores  Financiamentos" />
			<ListaDeImagens listaDeImagens={listaDeImagensUrbano} titulo={"Urbano"} />
			<ListaDeImagens listaDeImagens={listaDeImagensChacaras} titulo={"Chácaras"} />
			<ListaDeImagens listaDeImagens={listaDeImagensComercial} titulo={"Comercial"} />
			<Banner imagem={banners[2]["imagem"]} title="Escolha a cidade dos seus sonhos" />
			<Footer />
		</div>
	);
}

export default App;
