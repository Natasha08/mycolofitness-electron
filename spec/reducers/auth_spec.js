import authReducer from 'reducers/auth';

describe('User Reducer', function() {
  it('adds fetched items to the state', function() {
    const auth = {
      token: 'fake_token',
      user_id: '234'
    };
    const beforeState = undefined;
    const action = deepFreeze({ type: 'SET_USER', auth });
    const afterState = auth;

    expect(authReducer(beforeState, action)).to.deep.equal(afterState);
  });
});
