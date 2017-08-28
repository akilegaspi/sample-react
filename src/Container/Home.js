import React from 'react';
import { Link } from 'react-router-dom'
import LoginForm from '../Components/LoginForm';

export default class Home extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="login-container">
        <div className="login-left"/>
        <div className="login-right">
          <LoginForm logIn={ this.props.authService.login }/>
        </div>
      </div>
    );
  }
}
