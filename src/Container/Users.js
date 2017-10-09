import React from 'react';

import UserContainer from './UserContainer';
import DiscoverBurger from '../Components/DiscoverBurger';

export default class Users extends React.Component {

  render(){
    return (
      <UserContainer user={ this.props.user }>
        <div className="container jumbotron">
          <h1 className="text-center">Users</h1>
        </div>
      </UserContainer>
    ) ;
  }

}
