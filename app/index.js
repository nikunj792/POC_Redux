import React from 'react';
import {render} from 'react-dom';
import { createStore, combineReducers, applyMiddleware} from "redux";
import { Provider }from'react-redux';
import Home from './component/home.js';
const userDetails ={
	fname:'',
	lname:'',
	email:'',
	phone:''
}
const userReducer = (state=userDetails,action)=>{
	switch(action.type){
		case "SET_USERDETAILS":
		state= {
			...userDetails,
			fname:action.payload.firstName,
			lname:action.payload.lastName,
			email:action.payload.email,
			phone:action.payload.phone
			}
		return state;
		break;
	}
}
const store = createStore(userReducer);
store.subscribe(()=>{console.log("Store Changes",store.getState())});
 store.dispatch({
	type:"SET_USERDETAILS",
	payload:100
	}); 
	render(	
	<Provider store ={store}>
			<Home />
	</Provider>,
	document.getElementById('redux'));
	
	