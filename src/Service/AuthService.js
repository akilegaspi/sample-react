import request from 'browser-request';

export default class AuthService {

  constructor(host){
    this.host = host;
  }

  login(username, password, callback){
    let loginForm = {username, password},
        requestObj = {
          method : 'POST',
          url : 'http://localhost:3000/api/login',
          body : loginForm,
          json: true
        };
    return request(requestObj, callback);
  }

  logout(callback){
    let requestObj = {
      method : 'GET',
      url : 'http://localhost:3000/api/logout'
    };
    return request(requestObj, callback);
  }



}
