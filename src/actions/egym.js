export default {
  fetch: function(workouts){
    return {
      type: 'FETCH_WORKOUTS',
      workouts
    }
  }
};
