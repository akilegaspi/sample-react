import request from 'browser-request';

export default class UserService {

  constructor(host){
    this.host = host;
    this.signup = this.signup.bind(this);
  }

  signup(username, email, password, callback){
    let signupForm = {username, email, password},
        requestObj = {
          method : 'POST',
          url : `${this.host}/api/signup`,
          body : signupForm,
          json: true
        };
    return request(requestObj, callback);
  }

}
