import egymRepository from 'repositories/egym';

export default React.createClass({
  getInitialState: function() {
    return {
      errors: []
    }
  },
  fetch: function() {
    egymRepository.fetch()
  },
  render: function() {
    return(
      <div className="wrapper">
        <button className="btn-fetch" onClick={ this.fetch }>Workouts</button>
      </div>
    );
  }
});
