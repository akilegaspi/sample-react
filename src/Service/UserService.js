import request from 'browser-request';

export default class UserService {

  constructor(host){
    this.host = host;
  }

  signup(username, email, password){
    let signupForm = {username, email, password},
        requestObj = {
          method : 'POST',
          url : host + '/api/signup',
          body : signupForm,
          json: true
        };
    return request(requestObj, responseHandler);
  }

}
