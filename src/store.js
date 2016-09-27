"use strict"

import { applyMiddleware, createStore } from "redux";
import _ from 'lodash';
import efridge from 'reducers/efridge';

const rootReducer = (state = {}, action) => {
  return {
    food_items: efridge(state.food_items, action)
  }
};

const store = Redux.createStore(rootReducer);
global.store = store;
export default store;

// store.subscribe(() => {
// 	console.log("store changed", store.getState());
// })
