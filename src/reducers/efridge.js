const initialState = {
  food_items: {}
};

export default function(state= initialState, { type, food_items }) {
  if (type === 'FETCH_FOOD_ITEMS') {
    return food_items;

  }
  return state;
};
