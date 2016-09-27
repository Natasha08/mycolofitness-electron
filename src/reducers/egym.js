const initialState = {
  workouts: {}
};

export default function(state= initialState, { type, workouts }) {
  if (type === 'FETCH_WORKOUTS') {
    return workouts;
  }
  return state;
};
