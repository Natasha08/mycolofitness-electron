import { mount } from 'enzyme';
import Register from 'pages/register';
import registerRepository from 'repositories/register';

describe('The Registration Page', function() {
  context('New User', function() {
    it('registers a user', function() {
      const wrapper = mount(<Register />);
      const registerStub = this.sinon.stub(registerRepository, 'post').returns(new Promise(_.noop));

      const email = wrapper.find('input.email');
      const username = wrapper.find('input.username');
      const password = wrapper.find('input.password');
      const btn = wrapper.find('button.btn-post');

      email.get(0).value = 'test@test.com';
      username.get(0).value = 'cptcarter';
      password.get(0).value = 'password';

      btn.simulate('click');

      expect(registerStub).to.have.been.calledOnce;

    });
  });
});
