import AuthRepository from 'repositories/auth';
import xhr from 'xhr';
import store from 'store';
import { Link, hashHistory } from 'react-router';
import LoginForm from 'components/login_form';
import RegisterForm from 'components/register_form';


export default React.createClass({
  getInitialState: function() {
    return {
      errors: [],
      title: 'Login',
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
  onClick: function() {
    this.setState({ showRegisterForm: false });
    this.setState({ showLoginForm: !this.state.showLoginForm });
  },
  toggle: function() {
    this.setState({ showLoginForm: false });
    this.setState({ showRegisterForm: !this.state.showRegisterForm });
  },
  render: function() {
    return(
      <div className="wrapper">
        Home
        <button className='' onClick={ this.toggle }>Register</button>
        <button className='' onClick={ this.onClick }>Login</button>
        { this.state.showLoginForm ? <LoginForm /> : null }
        { this.state.showRegisterForm ? <RegisterForm /> : null }
        { this.props.children }
      </div>
    );
  }
});
