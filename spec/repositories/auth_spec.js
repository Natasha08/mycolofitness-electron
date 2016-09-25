import AuthRepository from 'repositories/auth';
import xhr from 'xhr';

const data = 'username';
describe('Auth Repository', function() {
  beforeEach(function() {
    this.server = sinon.fakeServer.create();
  });

  afterEach(function() {
    this.server.restore();
  });
  const result = data;
  it('logs the user in',function() {
    const url = "http://localhost:3000/login";
    const loginParams = { username: 'username', password: 'password'};
    const stub = this.sinon.stub(AuthRepository, 'login').returns(Promise.resolve(result));
    const xhrSpy = this.sinon.spy(xhr, 'post');
    const AuthLogin = AuthRepository.login(loginParams);

    this.server.respondWith(/data/, [
      200,
      { 'Content-Type': 'application/json'},
      JSON.stringify({ data })
    ]);

    return AuthLogin
     .then(function(data) {
       expect(data).to.equal(result);
    });

    expect(xhrSpy).to.have.been.calledWithMatch(/data/, {
      json: loginParams
    });

    this.server.respond();
  });
});
