import React from 'react';

import DiscoverBurger from '../Components/DiscoverBurger';
import Navbar from '../Components/Navbar';
import UpdateStatus from '../Components/UpdateStatus';
import Post from '../Components/Post';

import '../resources/css/main.css';
import '../resources/css/home.css';

import saucelogo from '../resources/img/login-logo.png';
import bokunopico from '../resources/img/no-profile-pic.jpg';

export default class UserContainer extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <main id="home-container">
        <Navbar name={ this.props.user.firstName } />
        <DiscoverBurger />
        { this.props.children }
      </main>
    );
  }

}
