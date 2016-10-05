"use strict"

import { Link, hasHistory } from "react-router";
import store from 'store';
// import dataTarget from '../../renderer';
// Footer temporarily removed for electron (in the render)
// import Footer from 'components/footer';

export default React.createClass({
  getInitialState: function() {
    return {
      title: 'MyColoFitness',
      showLoginForm: false,
      showRegisterForm: false
    }
  },
  componentDidMount: function() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  },
  componentWillUnmount: function() {
    this.unsubscribe();
  },
	render: function() {
		return (
      <div>
      <section id="sidebar">
        <button className="side-button"><Link to="/home">Home</Link></button>
        <button className="side-button"><Link to="/efridge">E-Fridge</Link></button>
        <button className="side-button"><Link to="/egym">E-gym</Link></button>
        <button className="side-button"><Link to="/home">About the Author</Link></button>
      </section>
        <h1>{ this.state.title }</h1>
        { this.props.children }
      </div>
	  );
	}
});
