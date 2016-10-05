"use strict"

import {Router, Route, IndexRedirect, hashHistory} from "react-router";
import { Provider } from "react-redux";
import store from "store";
import Layout from "pages/layout";
import Egym from 'pages/egym';
import Efridge from 'pages/efridge';
import Map from 'pages/map';
import Home from 'pages/home';
import Login from 'pages/login';
import Register from 'pages/register';
import LoginForm from 'components/login_form';
import Authenticate from 'components/authenticate';
// require('./styles/styles.css');
// import './app.global.css';
const app = document.getElementById('app');

const Routes = React.createClass({
  render: ReactDom.render(<Provider store={store}>
  	<Router history = {hashHistory}>
     <Route component={ Authenticate }>
  	  <Route path= "/" component = {Layout}>
  		  <IndexRedirect to="/home" />
        <Route path = "/login" component = {Login}></Route>
        <Route path = "/register" component = {Register}></Route>
  			<Route path = "/home" component = {Home}></Route>
          <Route path = "/egym" component = {Egym}></Route>
          <Route path = "/efridge" component = {Map}></Route>
  		</Route>
      </Route>
  	</Router>
  	</Provider>,
  	app)
});

export default Routes;
// <Route path = "/efridge" component = {Efridge}></Route>
