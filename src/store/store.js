import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import MainReducer from '../Redux/Reducers';
import ReduxPromise from 'redux-promise';

export default function configureStore(initialState) {
	const store = createStore(
		MainReducer,
		initialState,
		compose(
			applyMiddleware(thunk, ReduxPromise),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)
	);
	return store;
}
