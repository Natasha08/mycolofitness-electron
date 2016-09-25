import { mount } from 'enzyme';
import Egym from 'pages/egym';

describe('The Egym Page', function() {
  it('renders layout children', function() {
    let wrapper = mount(<Egym />);
    expect(wrapper).to.have.length(1);
  });
});
