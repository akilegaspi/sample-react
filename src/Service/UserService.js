import request from 'browser-request';

export default class UserService {

  constructor(host){
    this.host = host;
  }

  signup(username, email, password, callback){
    let signupForm = {username, email, password},
        requestObj = {
          method : 'POST',
          url : 'http://localhost:3000/api/signup',
          body : signupForm,
          json: true
        };
    return request(requestObj, callback);
  }

}
