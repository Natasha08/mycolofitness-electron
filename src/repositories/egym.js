import xhr from 'xhr';
import egymActions from 'actions/egym';
import store from 'store';

export default {
  fetch: function() {
    return new Promise(function(resolve, reject) {
      xhr('http://localhost:3001/proxy/egym', { method: 'GET',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }},
    function(err, resp, body) {
      if (resp.statusCode === 401) {
        console.log(err);
      }
      else if (resp.statusCode === 200 && resp.body) {
        const workouts = body;
        store.dispatch(egymActions.fetch(workouts));

      }
    })
  })
 }
};
