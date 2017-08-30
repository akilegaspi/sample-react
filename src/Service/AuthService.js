import request from 'browser-request';

export default class AuthService {

  constructor(host){
    this.host = host;
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(username, password, callback){
    let loginForm = {username, password},
        requestObj = {
          method : 'POST',
          url : `${this.host}/api/login`,
          body : loginForm,
          json: true
        };
    return request(requestObj, callback);
  }

  logout(callback){
    let requestObj = {
      method : 'GET',
      url : `${this.host}/api/logout`
    };
    return request(requestObj, callback);
  }



}
