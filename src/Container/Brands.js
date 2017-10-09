import React from 'react';

import UserContainer from './UserContainer';
import DiscoverBurger from '../Components/DiscoverBurger';

export default class Brands extends React.Component {

  render(){
    return (
      <UserContainer user={ this.props.user }>
        <DiscoverBurger />
        <div className="container jumbotron">
          <h1 className="text-center">Brands</h1>
        </div>
      </UserContainer>
    ) ;
  }

}
