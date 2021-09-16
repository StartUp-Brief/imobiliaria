import React from 'react';
import { Fragment } from 'react';
import ImageDisplay from '../ImageDisplay/ImageDisplay';
import "./ListaDeImagens.css"
const ListaDeImagens = ({ listaDeImagens, titulo }) => {
	return (
		<div className="container__listaDeImagens">
			<h1 className="titulo__listaDeImagens">{titulo}</h1>
			<div className="lista">
				{listaDeImagens.map((obj, key) => {
					return (<ImageDisplay 
								key={key}
								imagem={obj.imagem} 
								complemento={obj.complemento} 
								desc={obj.desc} 
								cidade={obj.cidade}
								bairro={obj.bairro}
								alt="..." />)
				})}
			</div>
		</div>

	)
}

export default ListaDeImagens
