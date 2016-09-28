import xhr from 'xhr';
import { hashHistory } from 'react-router';
import authActions from 'actions/auth';

  export default {
  login: function({ username, password }) {
    return new Promise(function(resolve, reject) {
      xhr(`http://localhost:3000/login?username=${username}&password=${password}`,
      { method: 'POST', withCredentials: true }, function(err, resp, body ) {
          if (resp.statusCode === 401) {
            let errors = [];
            errors.push('Sorry, your login was unsuccessful');
            return errors;
          }
          else if (resp.statusCode === 200 && resp.body) {
            const user = JSON.parse(body);
            store.dispatch(authActions(user));
            hashHistory.push('/home');
          }
        })
    })

  }
 };
