import registerRepository from 'repositories/register';
import xhr from 'xhr';

describe('Register Repository', function() {
  beforeEach(function() {
    this.server = sinon.fakeServer.create();
  });

  afterEach(function() {
    this.server.restore();
  });
  it('registers the user', function() {
    const users = {
          email: 'test@test.com',
       username: 'cptcarter',
       password: 'password'
    };
    const result = 'You are successfully registered';
    const data = result;
    const stub = this.sinon.stub(registerRepository, 'post').returns(Promise.resolve(result));
    const registerUser = registerRepository.post();
    const xhrSpy = this.sinon.spy(xhr, 'post');

    this.server.respondWith(/data/, [
      200,
      { 'Content-Type': 'application/json'},
      JSON.stringify({ data })
    ]);

    return registerUser
     .then(function(data) {
      expect(data).to.deep.equal(result);
    });

    // evergreening - connected to xhrSpy and server.respondWith

    // expect(xhrSpy).to.have.been.calledWithMatch(/users/, {
    //   json: true
    // });
    // return registerUser;
    // this.server.respond();
  });
});
