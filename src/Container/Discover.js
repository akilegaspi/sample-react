import React from 'react';
import { Link } from 'react-router-dom';

import '../resources/css/discover.css';

import UserContainer from './UserContainer';

export default class Discover extends React.Component {

  render(){
    return (
      <UserContainer user={ this.props.user } >
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="discover-buttons">
              <Link to={'/products'}><span className="fa fa-shopping-bag" aria-hidden="true"></span> <span>PRODUCTS</span></Link>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="discover-buttons">
              <Link to={'/stores'}><span className="fa fa-shopping-cart" aria-hidden="true"></span> <span>STORES</span></Link>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="discover-buttons">
              <Link to={'/brands'}><span className="fa fa-tags" aria-hidden="true"></span> <span>BRANDS</span></Link>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="discover-buttons">
              <Link to={'/users'}><span className="fa fa-user" aria-hidden="true"></span> <span>USERS</span></Link>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="discover-buttons">
              <Link to={'/events'}><span className="fa fa-calendar" aria-hidden="true"></span> <span>EVENTS</span></Link>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="discover-buttons">
              <Link to={'/discounts'}><span className="fa fa-gift" aria-hidden="true"></span> <span>OFFERS / DISCOUNTS</span></Link>
            </div>
          </div>
        </div>
      </div>
    </UserContainer>
    );
  }

}
