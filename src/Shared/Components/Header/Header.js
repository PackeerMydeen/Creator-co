import React from 'react';

import './index.scss';
// import HinduLogo from '../../images/hindu-logo.png';

export default function Header(props) {
	return (
		<div className='header-container'>
			<div className='logos'>{/* <img className='hindu-icon' alt='Hindulogo' src={HinduLogo} /> */}</div>
			<div className='header-right'>
				<div className='login-button btn' onClick={props.onLogin}>
					Login
				</div>
			</div>
		</div>
	);
}
