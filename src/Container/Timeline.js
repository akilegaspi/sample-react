import React from 'react';

import UserContainer from './UserContainer';
import UpdateStatus from '../Components/UpdateStatus';
import Post from '../Components/Post';
import SauceinkHeader from '../Components/SauceinkHeader';

import '../resources/css/main.css';
import '../resources/css/home.css';

import saucelogo from '../resources/img/login-logo.png';
import bokunopico from '../resources/img/no-profile-pic.jpg';

export default class Timeline extends React.Component {

  constructor(props){
    super(props);
    this.state = ({
      posts: []
    });
  }

  componentDidMount(){
    let _this = this;
    this.props.postService.getPosts(this.props.user.username)
    .then( (res) => {
      _this.setState({
        user: _this.props.user,
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
      <UserContainer user={ this.props.user } >
        <SauceinkHeader header='DISCOVER AND SHOP FOR THE THINGS YOU LOVE.'/>
        <div className="content-container">
        <UpdateStatus name={ this.props.user.firstName } />
        <div className="sauceink-status container bootstrap snippet">
          <div className="row">
            { this.state.posts.map( post => <Post key={ post.postId } post={ post } /> ) }
          </div>
        </div>
      </div>
    </UserContainer>
    );
  }

}
