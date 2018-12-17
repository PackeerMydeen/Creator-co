import axios from 'axios';

export function getProducts() {
	return dispatch => {
		const data = axios
			.get('https://api.myjson.com/bins/14rwmq')
			.then(response => {
				dispatch({ type: 'GET_PRODUCT', payload: { products: response.data } });
				return Promise.resolve(response.data);
			})
			.catch(function(error) {
				return Promise.reject(error);
			});
		return Promise.resolve(data);
	};
}
