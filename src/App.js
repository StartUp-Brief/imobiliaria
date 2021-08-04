import React, { Fragment } from 'react';
import './App.css';
import NavBarSite from './components/NavBar/NavBar'
import ListaDeImagens from './components/ListaDeImagens/ListaDeImagens';
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
  return (
    <div className="App">
      <NavBarSite />
	  <ListaDeImagens listaDeImagens={listaDeImagensUrbano} titulo={"Urbano"} />
	  <ListaDeImagens listaDeImagens={listaDeImagensChacaras} titulo={"Chácaras"} />
	  <ListaDeImagens listaDeImagens={listaDeImagensComercial} titulo={"Comercial"} />
      
    </div>
  );
}

export default App;
