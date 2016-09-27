import workoutsReducer from 'reducers/egym';

describe('Egym Reducer', function() {
  it('adds fetched workouts to state', function() {
    const workouts = [
      { workout_day: 'A', key_lift_1: { name: 'chinups', weight: 'body', reps: '5' }},
      { workout_day: 'B', key_lift_2: { name: 'bicep_curls', weight: 30, reps: '5'}}
    ];
    const beforeState = undefined;
    const action = deepFreeze({ type: 'FETCH_WORKOUTS', workouts });
    const afterState = workouts;

    expect(workoutsReducer(beforeState, action)).to.deep.equal(afterState);
  });
});
