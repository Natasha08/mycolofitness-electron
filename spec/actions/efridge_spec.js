import efridgeActions from 'actions/efridge.js';

describe('Efridge Actions', function() {
  context('food_items', function() {
    it('returns a FETCH_FOOD_ITEMS action', function() {
      const food_items = [
        { food_name: 'banana', total_calories: 100 },
        { food_name: 'pears', total_calories: 80 }
      ];
      const args = {
        type: 'FETCH_FOOD_ITEMS',
        food_items
      }
      expect(efridgeActions.fetch(food_items)).to.deep.equal(args);
    });
  });
});
