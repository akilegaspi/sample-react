import React from 'react';

import UserContainer from './UserContainer';
import DiscoverBurger from '../Components/DiscoverBurger';

export default class Stores extends React.Component {

  render(){
    return (
      <UserContainer user={ this.props.user }>
        <DiscoverBurger />
        <div className="container jumbotron">
          <h1 className="text-center">Stores</h1>
        </div>
      </UserContainer>
    ) ;
  }

}
