import xhr from 'xhr';

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
          let errors = [];
          errors.push('Sorry, your login was unsuccessful');
          return errors;
        }
        else if (resp.statusCode === 200 && resp.body) {
          console.log("resp", resp);
        }
      })
    })
  }
};
