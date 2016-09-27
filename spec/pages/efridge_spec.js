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
      const food_name = wrapper.find('input.food_name');
      const brand = wrapper.find('input.brand');
      const serving_size = wrapper.find('input.serving_size');
      const total_calories = wrapper.find('input.total_calories');
      const fat_grams = wrapper.find('input.fat_grams');
      const carbohydrate_grams = wrapper.find('input.carbohydrate_grams');
      const protein_grams = wrapper.find('input.protein_grams');
      const total_grams = wrapper.find('input.total_grams');

      food_name.get(0).value = 'Banana';
      brand.get(0).value = 'Chiquata';
      serving_size.get(0).value = 1;
      total_calories.get(0).value = 80;
      fat_grams.get(0).value = 0;
      carbohydrate_grams.get(0).value = 32;
      protein_grams.get(0).value = 0;
      total_grams.get(0).value = 32;

      const btn = wrapper.find('button.btn-post');
      btn.simulate('click');

      expect(foodStub).to.have.been.calledOnce;

    })

  });
});
