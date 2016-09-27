import foodItemsReducer from 'reducers/food_items';

describe('Efridge Reducer', function() {
  it('adds fetched items to the state', function() {
    const food_items = [
      { food_name: 'banana', total_calories: 100 },
      { food_name: 'pears', total_calories: 80 }
    ];
    const beforeState = undefined;
    const action = deepFreeze({ type: 'FETCH_FOOD_ITEMS', food_items });
    const afterState = food_items;
    expect(foodItemsReducer(beforeState, action)).to.deep.equal(afterState);
  });
});
