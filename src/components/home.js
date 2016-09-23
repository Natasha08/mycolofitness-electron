let title = 'Login'

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
  },
  render: function() {
    return(

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
          <button className='submit-button' onClick={ this.submit }>Submit</button>
        </div>
        <div className='form-section'>
          <div className='form-errors'>{ this.state.errors }</div>
        </div>
      </div>
    );
  }
});
