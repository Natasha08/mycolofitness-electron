import { mount } from 'enzyme';
import Egym from 'pages/egym';
import egymRepository from 'repositories/egym';

describe('The Egym Page', function() {
  it('renders layout children', function() {
    let wrapper = mount(<Egym />);
    expect(wrapper).to.have.length(1);
  });
  context('workouts', function() {
    let wrapper = mount(<Egym />);
    it('gets workouts', function() {
      const workoutStub = this.sinon.stub(egymRepository, 'fetch').returns(new Promise(_.noop));
      const btn = wrapper.find('button.btn-fetch');
      btn.simulate('click');

      expect(wrapper.state().errors).deep.equal([]);
      expect(workoutStub).to.have.been.calledOnce;
    });
  });
});
