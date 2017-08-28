import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './Container/Home';
import Login from './Container/Login';
import Signup from './Container/Signup';
import AuthService from './Service/AuthService';
import UserService from './Service/UserService';

let main = document.getElementById('app');

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = ({
      authService: new AuthService(),
      userService: new UserService()
    });
  }

  render(){
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={Home} />
          <Route path='/login' render={ () => {
            return <Login authService={ this.state.authService } />;
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
