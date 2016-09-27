import efridgRepository from 'repositories/efridge.js';
import xhr from 'xhr';

describe('Efridge Repository', function() {
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
  it('posts a food profile', function() {
    const efridge = {
      food_name: 'banana',
      brand: 'chiquata',
      serving_size: 1,
      total_calories: 80,
      fat_grams: 0,
      carbohydrate_grams: 32,
      protein_grams: 0,
      total_grams: 32
    };
    const result = efridge;
    const stub = this.sinon.stub(efridgRepository, 'post').returns(Promise.resolve(result));
    const xhrSpy = this.sinon.spy(xhr, 'post');

    const postItems = efridgRepository.post({ efridge });

    return postItems
      .then(function(data) {
        expect(data).to.equal(result);

      });
      this.server.respond();
   });
  });
