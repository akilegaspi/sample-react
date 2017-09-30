import React from 'react';
import { Link } from 'react-router-dom';

import LostPasswordForm from '../Components/LostPasswordForm';

import saucelogo from '../resources/img/login-logo.png';

export default class LostPassword extends React.Component {

  constructor(props) {
    super(props);
    this.lostPassword = this.lostPassword.bind(this);
  }

  lostPassword(email){
    console.log(email);
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
          <div>
            <LostPasswordForm lostPassword={ this.lostPassword } />
          </div>
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
