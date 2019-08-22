// Redux Installation

// 1. Install redux, redux-logger, react-redux from npm

// 		npm install redux redux-logger react-redux 
// 		yarn add redux redux-logger react-redux

// 1. Create a folder in src folder naming redux
// 2. Create 2 new file & name it store.js & root-reducer.js
// 3. In store.js file we have to configure & create store (Wire up the redux)


// STORE.JS


import {createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [logger];
const  store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;



// ROOT-REDUCER.JS

import { combineReducers } from 'redux';

export default combineReducer({
	user: userReducer,
	cart: cartReducer
});


// INDEX.JS

import { Provider } from 'react-redux';
import store from './redux/store'

<Provider store={store}>
	.
	.
	<App />
	.
	.
</Provider>




// USER_REDUCER 

const INITIAL_STATE = {
	currentUser: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_CURRENT_USER:
		return {
			...state,
			currentUser: state.currentUser
		}
		default:
			return state
	}

}