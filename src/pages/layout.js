"use strict"

import { Link, browserHistory } from "react-router";
import store from 'store';

let title = 'MyColoFitness';

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
      </div>
	  );
	}
});
