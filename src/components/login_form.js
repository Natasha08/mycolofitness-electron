import AuthRepository from 'repositories/auth';
import store from 'store';
import RegisterForm from 'components/register_form';
import { Link } from 'react-router';

export default React.createClass({
  getInitialState: function() {
    return {
      errors: [],
      showForm: false
    }
  },
  toggleLogin: function() {

  },
  onClick: function() {
    this.setState({ showForm: !this.state.showForm });
    this.toggleLogin();
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
      <section id="sidebar">
        <button className="side-button"><Link to="/home">Home</Link></button>
        <button className="side-button"><Link to="/efridge">E-Fridge</Link></button>
        <button className="side-button"><Link to="/egym">E-gym</Link></button>
        <button className="side-button"><Link to="/home">About the Author</Link></button>
      </section>
        <div className='form'>
            <h1>{ this.state.title }</h1>
          <section className='form-section'>
            <label className='form-label'>Username</label>
            <input className='username' ref='username' />
          </section>
          <section className='form-section'>
            <label className='form-label'>Password</label>
            <input type='password' className='password' ref= 'password' />
          </section>
          <section className='form-submit'>
            <button className='submit-button' onClick={ this.submit }>Login</button>
          </section>
          <section className='form-section'>
            <div className='form-errors'>{ this.state.errors }</div>
          </section>
        </div>
        { this.state.showForm ? <RegisterForm /> : null }
      </div>

    );
  }
});
