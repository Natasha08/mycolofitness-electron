import registerRepository from 'repositories/register';

export default React.createClass({
  getInitialState: function() {
    return {
      errors: []
    }
  },
  submit: function() {
    let email = this.refs.email;
    let username = this.refs.username;
    let password = this.refs.password;

    let errors = [];
    if (email.value == '') {
      errors.push('Please enter your email.');
    }
    if (username.value == '') {
      errors.push('Please enter your username.');
    }
    if (password.value == '') {
      errors.push('Please enter your password.');
    }
    this.setState({ errors });
    if (!errors.length) {
    this.register();
    }
  },
  register: function() {
    const email = this.refs.email.value;
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    const users = { email, username, password };

    registerRepository.post(users)
  },
  render: function() {
    return(
      <div className='form'>
        <h1>{ this.state.title }</h1>
        <section className='form-section'>
          <label className='form-label'>Email</label>
          <input className='email' ref='email' />
        </section>
        <section className='form-section'>
          <label className='form-label'>Username</label>
          <input className='username' ref= 'username' />
        </section>
        <section className='form-section'>
          <label className='form-label'>Password</label>
          <input type='password' className='password' ref='password' />
        </section>
        <section className='form-submit'>
          <button className='btn-post' onClick={ this.submit }>Submit</button>
        </section>
        <div className='form-section'>
          <div className='form-errors'>{ this.state.errors }</div>
        </div>
      </div>
    );
  }
});
