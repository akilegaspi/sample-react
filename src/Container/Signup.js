import React from 'react';
import SignupForm from '../Components/Signupform';

export default class Signup extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log(this.props);
  }

  signUp(username, email, password){
    console.log(this.props.userService);
    this.props.userService.signup(username, email, password).then( res => {
      console.log(res);
    });
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
