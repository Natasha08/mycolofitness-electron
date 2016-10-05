import registerReducer from 'reducers/register';

describe('Register Reducer', function() {
  it('adds registered user message', function() {
    const register = {
      message: 'You have been successfully registered'
    };
    const beforeState = undefined;
    const action = deepFreeze({ type: 'FETCH_REGISTRATION_MESSAGE', register});
    const afterState = register;
    expect(registerReducer(beforeState, action)).to.deep.equal(afterState);
  });
});
