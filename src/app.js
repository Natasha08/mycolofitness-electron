"use strict"

import {Router, Route, IndexRoute, hashHistory} from "react-router";
import { Provider } from "react-redux";
import store from "store";
import Layout from "pages/layout";
import Egym from 'pages/egym';
import Efridge from 'pages/efridge';
import Home from 'components/home';
import Login from 'components/login';
require('../assets/style.css');

const app = document.getElementById('app');

const Routes = React.createClass({
  render: ReactDom.render(<Provider store={store}>
  	<Router history = {hashHistory}>
  	  <Route path= "/" component = {Layout}>
  		  <IndexRoute component = {Home}></IndexRoute>
  			<Route path = "/home" component = {Home}></Route>
        <Route path = "/login" component = {Login}></Route>

        <Route path = "/egym" component = {Egym}></Route>
        <Route path = "/efridge" component = {Efridge}></Route>
  		</Route>
  	</Router>
  	</Provider>,
  	app)
});

export default Routes;
