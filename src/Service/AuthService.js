import request from 'browser-request';

export default class AuthService {

  login(username, password){
    let loginForm = {username, password},
        requestObj = {
          method : 'POST',
          url : 'http://localhost:3000/api/login',
          body : loginForm,
          json: true
        };
    return request(requestObj, responseHandler);
  }

  logout(){
    let requestObj = {
      method : 'GET',
      url : 'http://localhost:3000/api/logout'
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
