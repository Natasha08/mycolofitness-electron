export default {
  fetch: function(food_items) {
    return {
      type: 'FETCH_FOOD_ITEMS',
      food_items
    }
  }
};
