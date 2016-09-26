import xhr from 'xhr';
import { hashHistory } from 'react-router';

  export default {
  login: function({ email, password }) {
    return new Promise(function(resolve, reject) {
      xhr(`http://localhost:3000/login?email=${email}&password=${password}`,
      { method: 'POST' }, function(err, resp, body ) {
          if (resp.statusCode === 401) {
            let errors = [];
            errors.push('Sorry, your login was unsuccessful');
            return errors;
          }
          else if (resp.statusCode === 200 && resp.body) {
            console.log("resp", resp);
            hashHistory.push('/home');
          }
        })
    })

  }
 };
