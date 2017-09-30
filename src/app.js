import { CookiesProvider } from 'react-cookie';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import axios from 'axios';

import './resources/js/vendor/jquery-3.2.1.min.ext.js';
import './resources/js/vendor/bootstrap.min.ext.js';

import Home from './Container/Home';
import LostPassword from './Container/LostPassword';
import Profile from './Container/Profile';
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
      baseURL: "http://localhost:3000/api"
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

          <Route exact path='/signup' render={() => {
            return <Signup userService={ this.state.userService } />;
          }} />

          <Route path='/lost-password' render={() =>{
            return <LostPassword userService={ this.state.userService } />;
          }} />

          <Route path='/profile/:username' render={ () => {
            return <Profile
              userService={ this.state.userService }
              postService={ this.state.postService }
            />;
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
