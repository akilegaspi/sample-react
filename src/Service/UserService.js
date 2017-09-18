export default class UserService {

  constructor(request){
    this.request = request;
    this.signup = this.signup.bind(this);
    this.follow = this.follow.bind(this);
  }

  signup(username, email, password){
    let signupForm = {username, email, password},
        requestObj = {
          method : 'POST',
          url : '/signup',
          data : signupForm,
          responseType: 'json'
        };
    return this.request(requestObj);
  }

  follow(id) {
    let followForm = {id},
      requestObj = {
        method: "POST",
        data: followForm,
        url: '/follow',
        responseType: 'json'
      };
    return this.request(requestObj);
  }

  queryUser(id) {
    let requestObj = {
      method: "GET",
      url: `/user/${id}`,
      responseType: 'json'
    };
    return this.request(requestObj);
  }



}
