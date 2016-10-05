import authActions from 'actions/auth.js';

describe('Auth Actions', function() {
  context('user', function() {
    it('returns a FETCH_FOOD_ITEMS action', function() {
      const auth = {
        token: 'fake_token',
        user_id: '234'
      };
      const args = {
        type: 'SET_USER',
        auth
      };
      expect(authActions(auth)).to.deep.equal(args);
    });
  });
});
