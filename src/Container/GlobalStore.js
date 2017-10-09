import React from 'react';

import DiscoverBurger from '../Components/DiscoverBurger';
import SauceinkHeader from '../Components/SauceinkHeader';
import UserContainer from './UserContainer';

import '../resources/css/globalstore.css';

export default class GlobalStore extends React.Component {

  constructor(props){
    super(props);
    this.state = ({
      items: []
    });
  }

  componentDidMount(){
    console.log("loading items");
  }

  render(){
    return (
      <UserContainer user={ this.props.user }>
        <DiscoverBurger />
        <SauceinkHeader header='GLOBAL STORE'/>
        <div class="container" id="globalstore-con">
          { this.state.items.map( item => <GlobalStoreItem item={ item } />) }
        </div>

      </UserContainer>
    );
  }

}
