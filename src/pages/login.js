import AuthRepository from 'repositories/auth';
import xhr from 'xhr';
import store from 'store';
import { hashHistory, Link } from 'react-router';
import LoginForm from 'components/login_form';

export default React.createClass({
  getInitialState: function() {
    return {
      errors: [],
      title: 'Login'
    }
  },
  changeTitle: function(title) {
    this.setState({title})
  },

  render: function() {
    return(
      <div className='wrapper'>
        <button className='btn-nav'><Link to="/register">Register</Link></button>
      </div>
    );
  }
});
