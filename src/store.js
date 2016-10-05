"use strict"

import { applyMiddleware, createStore } from "redux";
import _ from 'lodash';
import efridge from 'reducers/efridge';
import egym from 'reducers/egym';
import auth from 'reducers/auth';
import filter from 'reducers/filter';
import register from 'reducers/register';

const rootReducer = (state = {}, action) => {
  return {
    food_items: efridge(state.food_items, action),
    workouts: egym(state.workouts, action),
    auth: auth(state.auth, action),
    visibility_filter: filter(state.filter, action),
    register: register(state.register, action)
  }
};

const store = Redux.createStore(rootReducer);
export default store;

store.subscribe(() => {
	console.log("store changed", store.getState());
})
