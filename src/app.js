"use strict"

import Home from 'components/home';
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import { Provider } from "react-redux";
import store from "store";
import Layout from "pages/layout";
require('../assets/style.css');

const app = document.getElementById('app');

const Routes = React.createClass({
  render: ReactDom.render(<Provider store={store}>
  	<Router history = {browserHistory}>
  	  <Route path= "/" component = {Layout}>
  		  <IndexRoute component = {Home}></IndexRoute>
  			<Route path = "/" component = {Home}></Route>
  		</Route>
  	</Router>
  	</Provider>,
  	app)
});

export default Routes;
