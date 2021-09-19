import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/home.js'
import Login from "./pages/Login/login.js"
import Admin from './pages/Admin/admin';
import Imoveis from './pages/Imoveis/Imoveis';
import Contato from './pages/Contato/Contato';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/Login" component={Login} />
					<Route path="/Imoveis" component={Imoveis} />
					<Route path="/admin" component={Admin} />
					<Route path="/contato/:id" component={Contato} />
					<Home />
				</Switch>
			</Router>



		</div>
	);
}

export default App;
