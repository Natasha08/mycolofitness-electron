import xhr from 'xhr';
import store from 'store';
import efridgeActions from 'actions/efridge';

function authHeader(){
  if(store.getState().auth.token) {
    const token = store.getState().auth.token;
    return _.assign({
       'Authorization': 'Bearer ' + token
    }, token);
  }
  return token;
}
export default {
  fetch: function() {
    return new Promise(function(resolve, reject) {
      xhr(`http://localhost:3001/proxy/api/efridge`, { method: 'GET',
      headers: authHeader()},
      function(err, resp, body) {
        if (resp.statusCode === 401) {
          console.log(err);
        }
        else if (resp.statusCode === 200 && resp.body) {
          let items = JSON.parse(body);
          let food_items = items.data;
          console.log(food_items);
          store.dispatch(efridgeActions.fetch(food_items));
        }
      })
    })
  },
  post: function({ efridge }) {
    return new Promise(function(resolve, reject) {
      xhr('http://localhost:3001/proxy/api/efridge',
      { method: 'POST', json: { efridge: efridge }, headers: authHeader()},
      function(err, resp, body ) {
        if (resp.statusCode === 401) {
        }
        if (resp.statusCode === 200) {
          const api_message = body.message;
          console.log(api_message);
        }
      })
    })
  }
}
