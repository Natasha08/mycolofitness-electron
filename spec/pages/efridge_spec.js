import { mount } from 'enzyme';
import Efridge from 'pages/efridge';
import efridgRepository from 'repositories/efridge';

describe.only('The efridge Page', function() {
  it('renders layout children', function() {
    let wrapper = mount(<Efridge />);
    expect(wrapper).to.have.length(1);
  });
  context('food_items', function() {
    let wrapper = mount(<Efridge />);
    it('gets food_items', function (){
      const foodStub = this.sinon.stub(efridgRepository, 'fetch').returns(new Promise(_.noop));
      const btn = wrapper.find('button.btn-fetch');
      btn.simulate('click');

      expect(wrapper.state().errors).deep.equal([]);
      expect(foodStub).to.have.been.calledOnce;
    });
  });
  context('submits the foodform', function() {
    let wrapper = mount(<Efridge />);
    it('submits the form', function() {
      const foodStub = this.sinon.stub(efridgRepository, 'post').returns(new Promise(_.noop));
      //grab info from the schema and fill in b4 click;

      const btn = wrapper.find('button.btn-post');
      btn.simulate('click');

      expect(foodStub).to.have.been.calledOnce;

    })

  });
});
