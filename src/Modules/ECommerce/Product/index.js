import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Divider from '@material-ui/core/Divider';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';

import './index.scss';
import RupeeIcon from '../../../images/rupee-icon.svg';

class Product extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productDetails: {},
			images: [],
			activeStep: 0
		};
	}
	componentWillMount() {
		const id = this.props.match.params.id;
		let i,
			images = [],
			count = 0;
		if (this.props.product.length === 0) {
			console.log('ssss');
			this.props.history.push('/creator/ecommerce');
		}
		const productDetails = this.props.product && this.props.product.filter(item => item.id === id);
		if (productDetails.length !== 0) {
			for (i = 0; i <= 4; i++) {
				images.push({ id: count++, img: productDetails[0].image_url });
			}
			this.setState(
				{
					productDetails: productDetails,
					images: images
				},
				() => console.log(this.state.images)
			);
		}
	}

	handleNextImage = () => {
		this.setState(prevState => ({
			activeStep: prevState.activeStep + 1
		}));
	};

	handleBack = () => {
		this.setState(prevState => ({
			activeStep: prevState.activeStep - 1
		}));
	};

	showImage = e => {
		this.setState({ activeStep: Number(e.target.id) });
	};

	render() {
		const { productDetails, images, activeStep } = this.state;
		const maxSteps = images.length;
		console.log('rendering', productDetails);
		return (
			<div className='product-wrapper'>
				{productDetails.length > 0 ? (
					<Fragment>
						<div className='image-section'>
							<div className='image-section-small'>
								{images &&
									images.map(images => (
										<div className='small-images' onClick={e => this.showImage(e)} key={images.id}>
											<img id={images.id} src={images.img} />{' '}
										</div>
									))}
							</div>
							<div className='image-section-main'>
								{/* <img src={productDetails[0].image_url} /> */}
								<div className='large-image'>
									<img src={images[activeStep].img} alt={'product-stepper'} />
								</div>
								<MobileStepper
									steps={maxSteps}
									position='static'
									activeStep={activeStep}
									nextButton={
										<Button
											size='small'
											onClick={this.handleNextImage}
											disabled={activeStep === maxSteps - 1}
										>
											Next
										</Button>
									}
									backButton={
										<Button size='small' onClick={this.handleBack} disabled={activeStep === 0}>
											Back
										</Button>
									}
								/>
							</div>
						</div>

						<div className='desc-section'>
							<div className='product-title'>{productDetails[0].title}</div>
							<div className='product-subtitle'>{productDetails[0].category_subtitle}</div>
							<div className='amount-section'>
								<div className='amount-section-1'>
									<div>
										<img alt='rupee-icon' src={RupeeIcon} />
										<span className='rupee-text'>{productDetails[0].price}</span>
									</div>
									<div className='rental-text'>Rental for 4 days</div>
								</div>
								<div className='amount-section-2'>VALUE Rs 30000</div>
							</div>
							<Divider light />
							<div className='offers-section'>
								<OfferSection />
							</div>
							<Divider light />
							<div className='delivery-section'>
								<div>Know your size</div>
								<div className='delivery-section-images'>
									<div className='size-img'>
										<img
											style={{ height: '61px' }}
											src='https://ik.imagekit.io/flyrobe/details-page/Artboard_57_2x-8_HyDkHL43X.png'
										/>
									</div>
									<div className='size-img'>
										<img
											style={{ height: '61px' }}
											src='https://ik.imagekit.io/flyrobe/details-page/Artboard_57_copy_2_2x-8_rJDyBLVhm.png'
										/>
									</div>
								</div>
							</div>
						</div>
					</Fragment>
				) : (
					<div>Loading..</div>
				)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log(state);
	return {
		product: state.Ecommerce && state.Ecommerce.products
	};
}

export default withRouter(
	connect(
		mapStateToProps,
		null
	)(Product)
);

const OfferSection = () => {
	return (
		<Fragment>
			<div className='offers-text'>Offers</div>
			<div className='offers-text-1'>
				<div>
					<img
						alt='%'
						style={{ width: '26px' }}
						src='https://ik.imagekit.io/flyrobe/Decor/offer_2x_H14unChO7.png'
					/>
				</div>

				<div style={{ marginLeft: '6px' }}>
					'Get <b>&#x20b9; 1080</b> Cashback. Use code <b>'SAVE30'</b> at Checkout (T&C)
				</div>
			</div>
			<div className='offers-text-2'>
				<div>
					<img
						alt='%'
						style={{ width: '26px' }}
						src='https://ik.imagekit.io/flyrobe/Decor/emi_2x_B1xVd3R3u7.png'
					/>
				</div>

				<div style={{ marginLeft: '6px' }}>EMI starts at &#x20b9; 311 Per Month</div>
			</div>
			<div className='refund-text'>
				Refundable Deposit <b>&#x20b9; 3000</b>
			</div>
		</Fragment>
	);
};
