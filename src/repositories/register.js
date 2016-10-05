import xhr from 'xhr';
import store from 'store';

export default {
  post: function({ users }) {
    return new Promise(function(resolve, reject) {
      xhr('http://localhost:3001/proxy/api/register',
      { method: 'POST', json: { users: users }},
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
