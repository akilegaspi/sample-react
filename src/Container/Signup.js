import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../Components/Signupform';

import saucelogo from '../resources/img/login-logo.png';
import '../resources/css/registration.css';

export default class Signup extends React.Component {

  constructor(props){
    super(props);
    this.signUp = this.signUp.bind(this);
  }

  signUp(registrationForm){
    this.props.userService.signup(registrationForm).then(
      (res) => {
        console.log(res);
      }
    );
  }

  render(){
    return (
      <main id="home-container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#mynavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#"><img src="/resources/img//login-logo.png" className="img-responsive"/></a>
            </div>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="nav navbar-nav">
                <li><Link to={'/'}><i className="fa fa-long-arrow-left" aria-hidden="true"></i></Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="sauceink-header">
          <div>
          </div>
          <h1 className="text-center">CREATE AN ACCOUNT</h1>
        </div>
        <div className="content-container">
          <div className="container" id="registration-con">
            <h5>Registering for this site is easy. Just fill in the fields below, and we'll get a new account set up for you in no time.</h5>
            <SignupForm signUp={ this.signUp }/>
          </div>
        </div>
      </main>
      );
  }

}
