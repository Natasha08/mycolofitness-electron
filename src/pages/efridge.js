import efridgRepository from 'repositories/efridge';
import store from 'store';
import efridgeActions from 'actions/efridge';
import { PropTypes } from 'react';
import filterActions from 'actions/visibility_filter';
import EfridgeForm from 'components/efridge_form';

export default React.createClass({
  getInitialState: function() {
    return {
      errors: [],
      title: 'Your Efridge',
      showForm: false
    }
  },
  onClick: function() {
    this.setState({ showForm: !this.state.showForm });
  },
  fetch: function() {
    efridgRepository.fetch();
  },
  render: function() {
    return(
      <div className="wrapper">
       <button className='btn-fetch' onClick={ this.fetch }>Food Items</button>
       <button className='btn-efridge' onClick={ this.onClick }>New Food</button>
       { this.state.showForm ? <EfridgeForm /> : null }
      </div>
    );
  }
});
