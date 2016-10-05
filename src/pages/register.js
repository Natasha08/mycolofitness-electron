import { Link } from 'react-router';
import RegisterForm from 'components/register_form';

export default React.createClass({
  getInitialState: function() {
    return {
      errors: [],
      title: 'Register'
    }
  },
  render: function() {
    return(
      <div className='wrapper'>
        <RegisterForm />
        <button className='btn-nav'><Link to="/login">Login</Link></button>
      </div>
    );
  }
});
