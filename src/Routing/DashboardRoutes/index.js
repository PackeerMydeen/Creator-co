import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from '../../Modules/Dashboard';
import ECommerce from '../../Modules/ECommerce';

export default function DashboardRoutes() {
	return (
		<div>
			<Route path='/creator' exact component={Dashboard} />
			{/* <Route path='/creator/ecommerce' exact component={ECommerce} /> */}
		</div>
	);
}
