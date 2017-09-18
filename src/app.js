import { CookiesProvider } from 'react-cookie';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import axios from 'axios';

import './resources/js/vendor/jquery-3.2.1.min.ext.js';
import './resources/js/vendor/bootstrap.min.ext.js';

import Home from './Container/Home';
import Signup from './Container/Signup';
import AuthService from './Service/AuthService';
import UserService from './Service/UserService';
import PostService from './Service/PostService';

import './resources/css/bootstrap.min.css';
import './resources/css/bootstrap-theme.min.css';
import './resources/css/font-awesome.min.css';


let main = document.getElementById('app');

class App extends React.Component {

  constructor(props){
    super(props);
    let request = axios.create({
      baseURL: "http://localhost:3000/api",
      withCredentials: true
    });
    this.state = ({
      authService: new AuthService(request),
      userService: new UserService(request),
      postService: new PostService(request)
    });
  }

  render(){
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' render={ () => {
            return <Home
              authService={ this.state.authService }
              postService={ this.state.postService }
              userService={ this.state.userService }
            />;
          }} />
          <Route path='/signup' render={() => {
            return <Signup userService={ this.state.userService } />;
          }} />
        </div>
      </BrowserRouter>
    );
  }

}

function Root(){
  return (
    <CookiesProvider>
      <App />
    </CookiesProvider>
  );
}

ReactDOM.render(
  <Root />,
  main
);
