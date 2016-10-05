import { mount } from 'enzyme';
import Efridge from 'pages/efridge';
import efridgRepository from 'repositories/efridge';
import store from 'store';

describe('The efridge Page', function() {
  it('renders layout children', function() {
    let wrapper = mount(<Efridge />);
    expect(wrapper).to.have.length(1);
  });
  context('food_items', function() {
    let wrapper = mount(<Efridge />);
    it('gets food_items', function (){
      const food_items = [
        { food_name: 'banana', total_calories: 100 },
        { food_name: 'pears', total_calories: 80 }
      ];
      const foodStub = this.sinon.stub(efridgRepository, 'fetch').returns(new Promise(_.noop));
      const btn = wrapper.find('button.btn-fetch');
      btn.simulate('click');

      expect(wrapper.state().errors).deep.equal([]);
      expect(foodStub).to.have.been.calledOnce;
    });
  });
});
