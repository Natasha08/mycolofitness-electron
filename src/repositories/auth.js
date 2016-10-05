import xhr from 'xhr';
import { hashHistory } from 'react-router';
import authActions from 'actions/auth';
import store from 'store';
// http://localhost:3000/api/login
  export default {
  login: function({ username, password }) {
    return new Promise(function(resolve, reject) {
      xhr(`http://localhost:3001/proxy/api/token`,
      { method: 'POST', json: { username, password } }, function(err, resp, body ) {
          if (resp.statusCode === 401) {
            let errors = [];
            errors.push('Sorry, your login was unsuccessful');
            return errors;
          }
          else if (resp.statusCode === 200 && resp.body) {
            const auth = {
              token: body.token,
              user_id: body.user_id
            };
            console.log(auth);
            store.dispatch(authActions(auth));
            hashHistory.push('/home');
          }
        })
    })

  }
 };
