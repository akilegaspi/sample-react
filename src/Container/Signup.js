import React from 'react';
import SignupForm from '../Components/Signupform';

export default class Signup extends React.Component {

  constructor(props){
    super(props);
    this.signUp = this.signUp.bind(this);
  }

  signUp(username, email, password){
    this.props.userService.signup(username, email, password, (err, res, body) => {
      console.log('Error:\t',err);
      console.log('Response:\t',res);
      console.log('Body:\t',body);
    });
  }

  render(){
    return (
      <div>
        <h1>Signup Form</h1>
        <SignupForm signUp={ this.signUp }/>
      </div>
      );
  }

}
