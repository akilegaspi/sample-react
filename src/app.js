import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './Container/Home';
import Login from './Container/Login';
import Signup from './Container/Signup';
import AuthService from './Service/AuthService';
import UserService from './Service/UserService';

import './resources/css/bootstrap.min.css';
import './resources/css/bootstrap-theme.min.css';
import './resources/css/discover.css';
import './resources/css/font-awesome.min.css';
import './resources/css/home.css';
import './resources/css/login.css';
import './resources/css/main.css';

let main = document.getElementById('app');

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = ({
      authService: new AuthService("http://localhost:3000"),
      userService: new UserService("http://localhost:3000")
    });
  }

  render(){
    return (
      <BrowserRouter>
        <div>
          <Route path='/' render={ () => {
            return <Home authService = { this.state.authService } />;
          }} />
          <Route path='/signup' render={() => {
            return <Signup userService={this.state.userService} />;
          }} />
        </div>
      </BrowserRouter>
    );
  }

}

ReactDOM.render(
  <App />,
  main
);
