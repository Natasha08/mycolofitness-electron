"use strict"

import { applyMiddleware, createStore } from "redux";
import _ from 'lodash';

const rootReducer = (state = {}, action) => {
  auth: 'To be added'
};

let store = Redux.createStore(rootReducer, window.devToolsExtension && window.devToolsExtension());

// store.subscribe(() => {
// 	console.log("store changed", store.getState());
// })
export default store;
