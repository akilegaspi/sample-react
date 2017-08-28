import request from 'browser-request';

export default class AuthService {

  constructor(host){
    this.host = host;
  }

  login(username, password){
    let loginForm = {username, password},
        requestObj = {
          method : 'POST',
          url : host + '/api/login',
          body : loginForm,
          json: true
        };
    return request(requestObj, responseHandler);
  }

  logout(){
    let requestObj = {
      method : 'GET',
      url : host + '/api/logout'
    };
    return request(requestObj, responseHandler);
  }

  responseHandler(err, res, body){
    if(err)
      err;
    else
     res.ok ? body : null
  }

}
