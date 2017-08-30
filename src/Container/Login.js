import React from 'react';
import { Link } from 'react-router-dom';

import LoginForm from '../Components/LoginForm';

import '../resources/js/login.ext.js';

import '../resources/css/main.css';
import '../resources/css/login.css';

import saucelogo from '../resources/img/login-logo.png';

export default class Login extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <main className="login-container">
        <div className="login-left"/>
        <div className="login-right">
          <header className="text-center">
            <img className="img-responsive center-block" alt="Sauceink Logo" src={saucelogo} />
            <p>DISCOVER AND SHOP FOR THINGS YOU LOVE. SAY HELLO TO YOUR NEW BEST FRIEND, SAUCEINK.</p>
            <a href="#">
              <span className="fa fa-facebook" aria-hidden="true" />
              SIGN IN WITH FACEBOOK
            </a>
            <h1 id="or"><span>OR</span></h1>
          </header>
          <LoginForm logIn={ this.props.logIn }/>
          <div className="text-center" id="register">
            <p>If you don't have any account yet, you can register now. SIGN UP</p>
            <Link to={'/signup'}>
              <span className="fa fa-sign-in" aria-hidden="true" />
              SIGN UP
            </Link>
          </div>
        </div>
      </main>
    );
  }
}
