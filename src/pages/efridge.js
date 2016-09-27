import efridgRepository from 'repositories/efridge';

export default React.createClass({
  getInitialState: function() {
    return {
      errors: []
    }
  },
  fetch: function() {
    efridgRepository.fetch()
  },
  render: function() {
    return(
      <div className="wrapper">
       <button className='btn-fetch' onClick={ this.fetch }></button>
      </div>
    );
  }
});
