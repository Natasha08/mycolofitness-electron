import { mount } from 'enzyme';
import Efridge from 'pages/efridge';

describe('The efridge Page', function() {
  it('renders layout children', function() {
    let wrapper = mount(<Efridge />);
    expect(wrapper).to.have.length(1);
  });
});
