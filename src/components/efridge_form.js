import efridgRepository from 'repositories/efridge';
import store from 'store';

export default React.createClass({
  getInitialState: function() {
    return {
      errors: []
    }
  },
  submit: function() {
    let state = store.getState(); 
    const food_name = this.refs.food_name.value;
    const brand = this.refs.brand.value;
    const serving_size = this.refs.serving_size.value;
    const total_calories = this.refs.total_calories.value;
    const fat_grams = this.refs.fat_grams.value;
    const carbohydrate_grams = this.refs.carbohydrate_grams.value;
    const protein_grams = this.refs.protein_grams.value;
    const total_grams = this.refs.total_grams.value;

    const efridge = {
      food_name, brand, serving_size, total_calories, fat_grams,
      carbohydrate_grams, protein_grams, total_grams
     };

      efridgRepository.post({ efridge });
  },
  render: function() {
    return(
      <div className='wrapper'>
        <div className='form'>
          <h1>{ this.state.title }</h1>
          <div className='form-section'>
            <label className='form-label'>Name of Food</label>
            <input className='food_name' ref='food_name' />
          </div>
          <div className='form-section'>
            <label className='form-label'>Brand</label>
            <input className='brand' ref= 'brand' />
          </div>
          <div className='form-section'>
            <label className='form-label'>Serving Size</label>
            <input className='serving_size' ref='serving_size' />
          </div>
          <div className='form-section'>
            <label className='form-label'>Total Calories</label>
            <input className='total_calories' ref= 'total_calories' />
          </div>
          <div className='form-section'>
            <label className='form-label'>Fat Grams</label>
            <input className='fat_grams' ref='fat_grams' />
          </div>
          <div className='form-section'>
            <label className='form-label'>Carbohydrate Grams</label>
            <input className='carbohydrate_grams' ref= 'carbohydrate_grams' />
          </div>
          <div className='form-section'>
            <label className='form-label'>Protein Grams</label>
            <input className='protein_grams' ref='protein_grams' />
          </div>
          <div className='form-section'>
            <label className='form-label'>Total Grams</label>
            <input className='total_grams' ref= 'total_grams' />
          </div>
          <div className='form-submit'>
            <button className='btn-post' onClick={ this.submit }>Submit</button>
          </div>
          <div className='form-section'>
            <div className='form-errors'>{ this.state.errors }</div>
          </div>
        </div>
      </div>
    );
  }
});
