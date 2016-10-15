import efridgRepository from 'repositories/efridge';
import store from 'store';
import efridgeActions from 'actions/efridge';
import { PropTypes } from 'react';
import filterActions from 'actions/visibility_filter';
import EfridgeForm from 'components/efridge_form';
import Carousel from 'components/carousel';

var Test = React.createClass({
    render: function() {
      const food_items = store.getState().food_items;
      if (!food_items.length) {
        return <div>Sorry, no items</div>
      }
      var items = food_items.map(function(food_item) {
          return <div className="carousel-row" key={food_item.food_id}>
            food name: {food_item.food_name}
            brand: {food_item.brand}
            serving_size: {food_item.serving_size}
            total_calories: {food_item.total_calories}
            fat_grams: {food_item.fat_grams}
            protein_grams: {food_item.protein_grams}
            total_grams: {food_item.total_grams}
          </div>;
      });
      return <div>{items}</div>;
    }
});

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
    const food_items = store.getState().food_items;
    if (!food_items.length) {
      return <div>Click on 'Food Items' to see what is in your e-fridge
              <button className='btn-fetch' onClick={ this.fetch }>Food Items</button>
              <button className='btn-efridge' onClick={ this.onClick }>New Food</button>
            </div>;
    }
    var items = food_items.map(function(food_item) {
        return <div className="carousel-row" key={food_item.food_id}>
          food name: {food_item.food_name}<br />
          brand: {food_item.brand}<br />
          serving_size: {food_item.serving_size}<br />
          total_calories: {food_item.total_calories}<br />
          fat_grams: {food_item.fat_grams}<br />
          protein_grams: {food_item.protein_grams}<br />
          total_grams: {food_item.total_grams}<br />
        </div>;
    });
    return(
      <div className="wrapper">
      { console.log("FOOD", food_items) }
       <button className='btn-fetch' onClick={ this.fetch }>Food Items</button>
       <button className='btn-efridge' onClick={ this.onClick }>New Food</button>
       { this.state.showForm ? <EfridgeForm /> : null }
       <Carousel className="slider" autoplayInteval={4500} indicator={true} switcher={true}>
        {items}
       </Carousel>
      </div>
    );
  }
});
