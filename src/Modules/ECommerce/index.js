import React, { Component } from 'react';

import './index.scss';
import Header from '../../Shared/Components/Header/Header';
import { getProducts } from '../../Redux/Actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

class Ecommerce extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: []
		};
	}
	componentWillMount() {
		this.props.getProducts().then(res =>
			this.setState({
				products: res
			})
		);
	}
	redirectToProductPage = id => {
		this.props.history.push(`/creator/ecommerce/product/${id}`);
	};
	render() {
		const { products } = this.state;
		// console.log('rendering', this.state.products);
		return (
			<div className='ecommerce-wrapper'>
				<div className='product-img'>
					{products && products.length !== 0 ? (
						products.map(item => (
							<div
								key={item.id}
								onClick={() => this.redirectToProductPage(item.id)}
								className='ecommerce-products'
							>
								<div>
									<img alt={item.id} src={item.image_url} />
								</div>
								<div>{item.brand}</div>
								<div>Rs.{item.price}/-</div>
							</div>
						))
					) : (
						<div>Loading...</div>
					)}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		product: state.product
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getProducts }, dispatch);
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Ecommerce)
);
