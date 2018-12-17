import { combineReducers } from 'redux';
import { product } from './Ecommerce';

const MainReducer = combineReducers({
	Ecommerce: product
});

export default MainReducer;
