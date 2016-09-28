import authActions from 'actions/auth.js';

describe('Auth Actions', function() {
  context('user', function() {
    it('returns a FETCH_FOOD_ITEMS action', function() {
      const user = {
        user_id: 1
      };
      const args = {
        type: 'SET_USER',
        user
      };
      expect(authActions(user)).to.deep.equal(args);
    });
  });
});
