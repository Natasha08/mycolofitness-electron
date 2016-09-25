import xhr from 'xhr';
import { hashHistory } from 'react-router';

const url = "http://localhost:3000/login";
function formatParams( params ) {
  return "?" + Object
    .keys(params)
    .map(function(key){
      return key+"="+params[key]
    })
    .join("&")
  };
  export default {
  login: function(loginParams) {
    return new Promise(function(resolve, reject) {
      xhr(url+formatParams(loginParams), {
        method: 'POST' }, function(err, resp, body ) {
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
