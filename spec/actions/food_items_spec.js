import efridgeActions from 'actions/efridge.js';

describe('Efridge Actions', function() {
  context('food_items', function() {
    it('returns a FETCH_FOOD_ITEMS action', function() {
      const args = {
        type: 'FETCH_FOOD_ITEMS'
      }
      expect(efridgeActions.fetch()).to.deep.equal(args);
    });
  });
});
