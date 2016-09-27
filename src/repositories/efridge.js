import xhr from 'xhr';
import store from 'store';
import efridgeActions from 'actions/efridge';

export default {
  fetch: function() {
    return new Promise(function(resolve, reject) {
      xhr('http://localhost:3000/efridge', { method: 'GET',
      headers: {
      Accept: 'application/json',
        'Content-Type': 'application/json'
      }},
      function(err, resp, body) {
        if (resp.statusCode === 401) {
          console.log(err);
        }
        else if (resp.statusCode === 200 && resp.body) {
          console.log("resp", body);
          let food_items = body;
          store.dispatch(efridgeActions.fetch(food_items));
        }
      })
    })
  },
  post: function({ efridge }) {
    return new Promise(function(resolve, reject) {
      xhr(`https://localhost:3000/efridge`,
      { method: 'POST', headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
        }}, function(err, resp, body ) {
        if (resp.statusCode === 401) {
          console.log(err);
        }
        else if (resp.statusCode === 200 && resp.body) {
          let workouts = body;
          console.log(resp);
          console.log(body);
        }
      })
    })
  }
}
