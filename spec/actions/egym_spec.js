import egymActions from 'actions/egym.js';

describe('Egym Actions', function() {
  context('workouts', function() {
    it('returns a FETCH_WORKOUTS action', function() {
      const workouts = [
        { workout_day: 'A', key_lift_1: { name: 'chinups', weight: 'body', reps: '5' }},
        { workout_day: 'B', key_lift_2: { name: 'bicep_curls', weight: 30, reps: '5'}}
      ];
      const args = {
        type: 'FETCH_WORKOUTS',
        workouts
      }
      expect(egymActions.fetch(workouts)).to.deep.equal(args);
    });
  });
});
