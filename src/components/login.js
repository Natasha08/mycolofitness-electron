import AuthRepository from 'repositories/auth';
import xhr from 'xhr';
import store from 'store';
let title = 'Login'
import { hashHistory } from 'react-router';

export default React.createClass({
  getInitialState: function() {
    return {
      errors: []
    }
  },
  changeTitle: function(title) {
    this.setState({title})
  },
  submit: function() {
    let username = this.refs.username;
    let password = this.refs.password;

    let errors = [];
    if (username.value == '') {
      errors.push('Please enter your username.');
    }
    if (password.value == '') {
      errors.push('Please enter your password.');
    }
    this.setState({ errors });
    if (!errors.length) {
    this.login();
    }
  },
  login: function() {
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    const loginParams = { username, password };

    AuthRepository.login(loginParams)
  },
  render: function() {
    return(
      <div className='wrapper'>
        <div className='form'>
          <h1>{ title }</h1>
          <div className='form-section'>
            <label className='form-label'>Username</label>
            <input className='username' ref='username' />
          </div>
          <div className='form-section'>
            <label className='form-label'>Password</label>
            <input className='password' ref= 'password' />
          </div>
          <div className='form-submit'>
            <button className='submit-button' onClick={ this.submit }>Login</button>
          </div>
          <div className='form-section'>
            <div className='form-errors'>{ this.state.errors }</div>
          </div>
        </div>
      </div>
    );
  }
});
