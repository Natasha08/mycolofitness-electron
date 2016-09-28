import authReducer from 'reducers/auth';

describe('User Reducer', function() {
  it('adds fetched items to the state', function() {
    const user = {
      user_id: 1
    }
    const beforeState = undefined;
    const action = deepFreeze({ type: 'SET_USER', user });
    const afterState = user;
    expect(authReducer(beforeState, action)).to.deep.equal(afterState);
  });
});
