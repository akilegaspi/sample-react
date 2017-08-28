import React from 'react';
import SignupForm from '../Components/Signupform';

export default class Signup extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  signUp(username, email, password){
    this.props.userService.signup(username, email, password);
  }

  render(){
    return (
      <div>
        <h1>Signup Form</h1>
        <SignupForm signUp={this.signUp}/>
      </div>
      );
  }

}
