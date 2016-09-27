import efridgRepository from 'repositories/efridge.js';
import xhr from 'xhr';

describe.only('Efridge Repository', function() {
  beforeEach(function() {
    this.server = sinon.fakeServer.create();
  });

  afterEach(function() {
    this.server.restore();
  });
  it('fetches efridge items', function() {
    const data = [
      { food_name: 'banana', total_calories: 100 },
      { food_name: 'pears', total_calories: 80 }
    ];
    const result = data;
    const stub = this.sinon.stub(efridgRepository, 'fetch').returns(Promise.resolve(result));
    const xhrSpy = this.sinon.spy(xhr, 'get');
    const fetchItems = efridgRepository.fetch();

    this.server.respondWith(/data/, [
      200,
      { 'Content-Type': 'application/json'},
      JSON.stringify({ data })
    ]);

    return fetchItems
      .then(function(data) {
        expect(data).to.equal(result);
      });

      this.server.respond();
  });
});
