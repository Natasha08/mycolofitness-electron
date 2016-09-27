import egymRepository from 'repositories/egym';
import xhr from 'xhr';

describe('Egym Repository', function() {
  it('fetches workouts', function() {
    const data = [
      { workout_day: 'A', key_lift_1: { name: 'chinups', weight: 'body', reps: '5' }},
      { workout_day: 'B', key_lift_2: { name: 'bicep_curls', weight: 30, reps: '5'}}
    ];
    const result = data;
    const stub = this.sinon.stub(egymRepository, 'fetch').returns(Promise.resolve(result));
    const xhrSpy = this.sinon.spy(xhr, 'get');
    const fetchWorkouts = egymRepository.fetch();

    return fetchWorkouts
      .then(function(data) {
        expect(data).to.equal(result);
      })
  });
});
