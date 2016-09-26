import AuthRepository from 'repositories/auth';
import axios from 'axios';
import xhr from 'xhr';
import store from 'store';
let title = 'Login'
import { Link, hashHistory } from 'react-router';

export default React.createClass({
  getInitialState: function() {
    return {
      errors: []
    }
  },
  render: function() {
    return(

      <div className="wrapper">
        Home
        <Link to="/login">Login</Link>
      </div>
    );
  }
});
