"use strict"

import { Link, hasHistory } from "react-router";
import store from 'store';
import Footer from 'components/footer';
let title = "MyColoFitness";

export default React.createClass({
  getDefaultProps: function() {
    return title;
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
        <h1>{ title }</h1>
        { this.props.children }
        <Footer />
      </div>
	  );
	}
});
