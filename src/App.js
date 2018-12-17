import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import DashboardRoutes from './Routing/DashboardRoutes';
import ECommerce from './Modules/ECommerce';
import Product from './Modules/ECommerce/Product';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path='/creator/ecommerce/product/:id' component={Product} />
					<Route exact path='/creator/ecommerce' component={ECommerce} />

					<Route path='/creator' component={DashboardRoutes} />
				</div>
			</Router>
		);
	}
}

export default App;
