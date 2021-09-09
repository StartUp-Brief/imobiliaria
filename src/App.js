import React, { Fragment } from 'react';
import './App.css';
import NavBarSite from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/home.js'
import Login from "./pages/Login/login.js"

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path= "/" exact component={Home}/>
					<Route path = "/Login"  component= {Login} />
					<Home/>
				</Switch>
			</Router>
			
			
			
		</div>
	);
}

export default App;
