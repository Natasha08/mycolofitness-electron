import { mount } from 'enzyme';
import Layout from 'pages/layout';

describe('The Layout Page', function() {
  it('renders layout children', function() {
    let wrapper = mount(<Layout />);
    expect(wrapper).to.have.length(1);
    expect(wrapper.text()).to.contain('MyColoFitness');
    expect(wrapper.text()).to.contain('AuthorMyColoFitness');
  });
});
