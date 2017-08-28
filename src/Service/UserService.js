import request from 'browser-request';

export default class UserService {

  signup(username, email, password){
    let signupForm = {username, email, password},
        requestObj = {
          method : 'POST',
          url : 'http://localhost:3000/api/signup',
          body : signupForm,
          json: true
        };
    return request(requestObj, responseHandler);
  }

}
