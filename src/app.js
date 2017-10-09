import { CookiesProvider } from 'react-cookie';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, IndexRoute} from 'react-router-dom';
import axios from 'axios';

import './resources/js/vendor/jquery-3.2.1.min.ext.js';
import './resources/js/vendor/bootstrap.min.ext.js';

import Brands from './Container/Brands';
import Discounts from './Container/Discounts';
import Discover from './Container/Discover';
import Events from './Container/Events';
import GlobalStore from './Container/GlobalStore';
import Login from './Container/Login';
import LostPassword from './Container/LostPassword';
import Products from './Container/Products';
import Profile from './Container/Profile';
import Signup from './Container/Signup';
import Stores from './Container/Stores';
import Timeline from './Container/Timeline';
import Users from './Container/Users';

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
      postService: new PostService(request),
      user: null
    });

    this.logIn = this.logIn.bind(this);
  }

  logIn(username, password){
    this.state.authService.login(username, password)
    .then((res) => {
      if(res.data.success) {
        let data = res.data.success;
        this.setState({
          user: data
        });
      } else {
        console.log(res.data.error);
      }
    });
  }

  render(){
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' render={ () => {
              if(this.state.user){
                return (
                  <Timeline
                    user={ this.state.user }
                    postService={ this.state.postService }
                    userService={ this.state.userService }
                  />
                );
              } else {
                return <Login logIn={ this.logIn }/>;
              }
            }
          } />

          <Route path='/brands' render={() => {
            return <Brands user={ this.state.user } />;
          }} />
          <Route path='/discounts' render={() => {
            return <Discounts user={ this.state.user } />
          }} />
          <Route path='/events' render={() => {
            return <Events user={ this.state.user } />;
          }} />
          <Route path='/products' render={() => {
            return <Products user={ this.state.user } />;
          }} />
          <Route path='/stores' render={() => {
            return <Stores user={ this.state.user } />;
          }} />
          <Route path='/users' render={() => {
            return <Users user={ this.state.user } />;
          }} />

          <Route path='/global-store' render={ () => {
            return <GlobalStore user={ this.state.user } />;
          }} />

          <Route path='/discover' render= {() => {
            return <Discover user={ this.state.user } />;
          }} />

          <Route path='/lost-password' render={() =>{
            return <LostPassword userService={ this.state.userService } />;
          }} />

          <Route exact path='/signup' render={() => {
            return <Signup userService={ this.state.userService } />;
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
