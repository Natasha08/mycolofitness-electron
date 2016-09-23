import { mount } from 'enzyme';
import Home from 'components/home';

describe('The Home Component', function() {
  context('The Login Form', function() {
    let wrapper = mount(<Home />);
    it('renders username input', function (){
      let userName = wrapper.find('input.username');
      userName.get(0).value = 'username';

      expect(userName.get(0).value).to.equal('username');
    });
    it('renders password input', function (){
      let passWord = wrapper.find('input.password');
      passWord.get(0).value = 'password';

      expect(passWord.get(0).value).to.equal('password');
    });
  });
  context('When the form is not correctly filled out', function() {
    let wrapper = mount(<Home />);
    it('errors when username is empty', function (){
      let userName = wrapper.find('input.username');
      let btn = wrapper.find('button.submit-button');

      userName.get(0).value = '';
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
});
