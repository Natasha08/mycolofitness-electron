import xhr from 'xhr';
import store from 'store';
import efridgeActions from 'actions/efridge';

export default {
  fetch: function() {
    return new Promise(function(resolve, reject) {
      xhr('http://localhost:3000/efridge', { method: 'GET', withCredentials: true},
      function(err, resp, body) {
        if (resp.statusCode === 401) {
          console.log(err);
        }
        else if (resp.statusCode === 200 && resp.body) {
          let items = JSON.parse(body);
          let food_items = items.data;
          store.dispatch(efridgeActions.fetch(food_items));
        }
      })
    })
  },
  post: function({ efridge }) {
    return new Promise(function(resolve, reject) {
      xhr('http://localhost:3000/efridge',
      { method: 'POST', json: { efridge: efridge }, withCredentials: true}, function(err, resp, body ) {
        if (resp.statusCode === 401) {
        }
        if (resp.statusCode === 200) {
          let items = JSON.parse(body);
          let workouts = items.data;
        }
      })
    })
  }
}
