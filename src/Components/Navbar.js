import React from 'react';
import { Link } from 'react-router-dom';

import saucelogo from '../resources/img/login-logo.png';

export default class Navbar extends React.Component {

  render() {
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button className="navbar-toggle"
                type="button"
                data-toggle="collapse"
                data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">
                <img className="img-responsive" src={ saucelogo }/>
              </a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a className="dropdown-toggle" href="#" data-toggle="dropdown">HELLO <strong>{ this.props.name}!</strong> &nbsp;
                  <i className="fa fa-cog" aria-hidden="true"></i></a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to={'/account-settings'}>
                        Account Settings
                      </Link>
                    </li>
                    <li>
                      <Link to={'/discover'}>
                        Discover
                      </Link>
                    </li>
                    <li>
                      <Link to={'/global-store'}>
                        Global Store
                      </Link>
                    </li>
                    <li>
                      <Link to={'/logout'}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}
