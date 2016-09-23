import Box from 'react-layout-components';

export default React.createClass({
  componentDidMount: function() {

  },
  getInitialState: function() {
    return {
      errors: []
    }
  },
  submit: function() {
    let username = this.refs.username;
    let password = this.refs.password;

    let errors = [];
    if (username.value == '') {
      errors.push('Please enter your username');
    }
    if (password.value == '') {
      errors.push('Please enter your password');
    }
    this.setState({ errors });
  },
  render: function() {
    return(
      <Box>
        <Box>
          <label>Username</label>
          <input className='username' ref='username'></input>
        </Box>
        <Box>
          <label>Password</label>
          <input className='password' ref= 'password'></input>
        </Box>
        <Box>
          <button className='submitbutton' onClick={ this.submit }>Submit</button>
        </Box>
        <Box className='form-section error' id='loginErrors'>{ this.state.errors }</Box>
      </Box>
    );
  }
});
