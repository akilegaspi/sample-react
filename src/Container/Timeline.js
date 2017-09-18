import React from 'react';
import { Link } from 'react-router-dom';
import Post from '../Components/Post';

import '../resources/js/home.ext.js';

import '../resources/css/main.css';
import '../resources/css/home.css';

import saucelogo from '../resources/img/login-logo.png';
import bokunopico from '../resources/img/no-profile-pic.jpg';

export default class Timeline extends React.Component {

  constructor(props){
    super(props);
    this.state = ({
      user: props.user,
      posts: []
    });
  }

  componentDidMount(){
    let _this = this;
    this.props.postService.getMyPosts()
    .then( (res) => {
      _this.setState({
        user: _this.state.user,
        posts: res.data.success.map( post => {
          return {
            postId : post.objectId,
            user: (()=>this.userService.queryUser(post.user.objectId)),
            content: post.text,
            time: post.createdAt,
            comments: (()=>this.postService.getComments(post.objectId)),
            likes: (()=>this.postService.getLikes(post.objectId)),
            image: bokunopico
          }
        })
      });
    });

  }

  render(){
    return (
      <main id="home-container">
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
                <li className="active">
                  <Link to={'/'}>Home</Link>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a className="dropdown-toggle" href="#" data-toggle="dropdown">HELLO <strong>{ this.state.user.firstName}!</strong> &nbsp;
                  <i className="fa fa-cog" aria-hidden="true"></i></a>
                  <ul className="dropdown-menu">
                    <li><Link to={'/settings'}>Account Settings</Link></li>
                    <li><Link to={'/logout'}>Logout</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <span id="burger-con">
          <ul className="burger">
            <li>D</li>
            <li>I</li>
            <li>S</li>
            <li>C</li>
            <li>O</li>
            <li>V</li>
            <li>E</li>
            <li>R</li>
          </ul>
        </span>
        <div id="sauceink-header">
          <h1 className="text-center">
            DISCOVER AND SHOP FOR THE THINGS YOU LOVE.
          </h1>
        </div>
        <div className="content-container">
          <div className="container update-status">
            <div className="row">
              <div className="col-md-2 text-center">
                <img className="img-circle"
                  style={{height: 90+'px', width: 90+'px'}}
                  src={ bokunopico } />
              </div>
              <div className="col-md-10">
                <h5>WHAT'S NEW, {this.state.user.firstName}</h5>
                <form>
                  <textarea></textarea>
                  <div className="row hidden">
                    <img id="sauce-upload-image" />
                    <iframe id="sauce-upload-video">
                    </iframe>
                    <a id="sauceink-link-text" href="#"></a>
                  </div>
                  <div className="row">
                    <ul className="sauce-upload side bar tabs">
                      <li id="tabs1">
                        <i className="fa fa-picture-o" aria-hidden="true"></i>
                      </li>
                      <li id="tabs3">
                        <i className="fa fa-link" aria-hidden="true"></i>
                      </li>
                      <li id="tabs2">
                        <i className="fa fa-video-camera" aria-hidden="true"></i>
                      </li>
                    </ul>
                  </div>
                  <input className="sauce-post-update" type="submit" value="POST UPDATE" />
                </form>
              </div>
            </div>
            <div className="sauceink-status container bootstrap snippet">
              <div className="row">
                { this.state.posts.map( post => <Post key={ post.postId } post={ post } /> ) }
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

}
