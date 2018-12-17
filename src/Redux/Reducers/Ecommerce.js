const initialState = { products: [] };

export function product(state = initialState, action) {
	switch (action.type) {
		case 'GET_PRODUCT':
			return action.payload;
		default:
			return state;
	}
}
