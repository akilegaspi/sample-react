
import React from 'react';

import UserContainer from './UserContainer';
import DiscoverBurger from '../Components/DiscoverBurger';

export default class Brands extends React.Component {

  render(){
    return (
      <UserContainer user={ this.props.user }>
        <div className="container jumbotron">
          <h1 className="text-center">Discounts</h1>
        </div>
      </UserContainer>
    ) ;
  }

}
