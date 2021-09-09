import React from 'react';
import "./Footer.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="footer">
			<Router>
				<a className="link__footer" href="#">Atendimento</a>
				<a className="link__footer" href="#">Empresa</a>
				<a className="link__footer" href="#">Imóveis</a>
			</Router>

		</footer>
	)
}

export default Footer;
