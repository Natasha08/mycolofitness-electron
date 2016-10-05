import store from 'store';
import LoginForm from 'components/login_form';

function loggedIn() {
  return !! _.get(store.getState(), 'auth.token');
}

export default React.createClass({
  componentDidMount: function() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  },

  componentWillUnmount: function() {
    this.unsubscribe();
  },

  render: function() {
    return loggedIn() ? this.props.children : <LoginForm />;
  }
});
