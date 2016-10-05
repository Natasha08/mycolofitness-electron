import { mount } from 'enzyme';
import Login from 'components/login_form';
import AuthRepository from 'repositories/auth';

describe('The Login Component', function() {
  context('The Login Form', function() {
    let wrapper = mount(<Login />);
    it('renders username input', function (){
      let usernameInput = wrapper.find('input.username');
      usernameInput.get(0).value = 'username';

      expect(usernameInput.get(0).value).to.equal('username');
    });
    it('renders password input', function (){
      let passWord = wrapper.find('input.password');
      passWord.get(0).value = 'password';

      expect(passWord.get(0).value).to.equal('password');
    });
  });
  context('When the form is not correctly filled out', function() {
    let wrapper = mount(<Login />);
    it('errors when username is empty', function (){
      let usernameInput = wrapper.find('input.username');
      let btn = wrapper.find('button.submit-button');

      usernameInput.get(0).value = '';
      btn.simulate('click');

      expect(wrapper.state().errors).contain('Please enter your username.');
    });
    it('errors when password is empty', function (){
      let passWord = wrapper.find('input.password');
      let btn = wrapper.find('button.submit-button');

      passWord.get(0).value = '';
      btn.simulate('click');

      expect(wrapper.state().errors).contain('Please enter your password.');
    });
  });
  context('successful login', function() {
    let wrapper = mount(<Login />);
    it('logs a user in', function (){
      const authStub = this.sinon.stub(AuthRepository, 'login').returns(new Promise(_.noop));
      let usernameInput = wrapper.find('input.username');
      usernameInput.get(0).value = 'username';

      let passWord = wrapper.find('input.password');
      passWord.get(0).value = 'password';

      let btn = wrapper.find('button.submit-button');
      btn.simulate('click');

      expect(wrapper.state().errors).deep.equal([]);
      expect(authStub).to.have.been.calledWith({
        username: 'username', password: 'password'
      });
    });
  });
});
