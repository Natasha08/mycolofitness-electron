import efridgRepository from 'repositories/efridge';
import store from 'store';
import efridgeActions from 'actions/efridge';

export default React.createClass({
  getInitialState: function() {
    return {
      errors: []
    }
  },
  fetch: function() {
    efridgRepository.fetch()
  },
  dispatch: function() {
    const food_items = {
      food_name: 'banana'
    }
    this.setState({ food_items });
    store.dispatch(efridgeActions.fetch(food_items));
  },
  render: function() {
    return(
      <div className="wrapper">
       <button className='btn-fetch' onClick={ this.fetch }>Food Items</button>
      </div>
    );
  }
});
