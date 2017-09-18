export default class AuthService {

  constructor(request){
    this.request = request;
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(username, password, callback){
    let loginForm = {username, password},
        requestObj = {
          method : 'POST',
          url : '/login',
          data : loginForm,
          responseType: 'json'
        };
    return this.request(requestObj);
  }

  logout(callback){
    let requestObj = {
      method : 'GET',
      url : '/logout',
      responseType: 'json'
    };
    return this.request(requestObj, callback);
  }

}
