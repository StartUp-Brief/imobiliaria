import React from 'react';
import "./Banner.css"
import { Fragment } from 'react';
const Banner = ({ imagem, title, align = "flex-start" }) => {
	const url = require(`../../${imagem}`)
	return (
		<div className="img__Banner" style={{ backgroundImage: `url(${url.default})`, backgroundSize: "cover", alignItems: `${align}` }}>
			<h1 className="h1__Banner">{title}</h1>
		</div>

	)
}

export default Banner;
