import React from 'react';

import DiscoverBurger from '../Components/DiscoverBurger';
import Navbar from '../Components/Navbar';
import SauceinkHeader from '../Components/SauceinkHeader';
import UpdateStatus from '../Components/UpdateStatus';
import Post from '../Components/Post';

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
            user: (()=>this.props.userService.queryUser(post.user.objectId)),
            content: post.text,
            time: post.createdAt,
            comments: (()=>this.props.postService.getComments(post.objectId)),
            likes: (()=>this.props.postService.getLikes(post.objectId)),
            image: bokunopico
          }
        })
      });
    });

  }

  render(){
    return (
      <main id="home-container">
        <Navbar name={ this.state.user.firstName } />
        <DiscoverBurger />
        <SauceinkHeader />
        <div className="content-container">
          <UpdateStatus name={ this.state.user.firstName } />
          <div className="sauceink-status container bootstrap snippet">
            <div className="row">
              { this.state.posts.map( post => <Post key={ post.postId } post={ post } /> ) }
            </div>
          </div>
        </div>
      </main>
    );
  }

}
