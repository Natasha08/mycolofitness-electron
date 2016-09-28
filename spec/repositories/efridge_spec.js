import efridgRepository from 'repositories/efridge.js';
import efridgeActions from 'actions/efridge';
import xhr from 'xhr';

describe('Efridge Repository', function() {
  it('fetches efridge items', function() {
    const food_items = [
      { food_name: 'banana', total_calories: 100 },
      { food_name: 'pears', total_calories: 80 }
    ];
    const result = food_items;
    const stub = this.sinon.stub(efridgRepository, 'fetch').returns(Promise.resolve(result));
    const fetchItems = efridgRepository.fetch();

    return fetchItems
    .then(function(data) {
      expect(data).to.deep.equal(result);
    });

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
    const postItems = efridgRepository.post({ efridge });

    return postItems
      .then(function(data) {
        expect(data).to.deep.equal(result);
      });
   });
  });
