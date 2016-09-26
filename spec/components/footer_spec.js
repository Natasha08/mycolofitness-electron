import { mount } from 'enzyme';
import Footer from 'components/footer';

describe('Footer', function() {
  it('renders the footer', function() {
    const wrapper = mount(<Footer />);
    const copyright = wrapper.find('p').text();
    const privacyLink = wrapper.find('a').last().text();
    const twitterLink = wrapper.find('a').first().text();
    
    expect(wrapper).to.have.length(1);
    expect(wrapper.find('a')).to.have.length(3);
    expect(copyright).to.contain('2015-2016 Natasha Osborne.');
    expect(privacyLink).to.contain('Privacy Policy');
    expect(twitterLink).to.contain('Follow @natasha_marie_o');
  });
});
