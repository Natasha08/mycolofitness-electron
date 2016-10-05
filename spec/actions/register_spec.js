import registerActions from 'actions/register';

describe('Register Message Action', function() {
  it('returns a Registration Message', function() {
    const register = {
      message: 'You have successfully registered!'
    };
    const args = {
      type: 'FETCH_REGISTRATION_MESSAGE',
      register
    };
    expect(registerActions(register)).to.deep.equal(args);
  });
});
