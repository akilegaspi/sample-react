import React from 'react';
import { Link } from 'react-router-dom';
import Comment from './Comment';

export default class Post extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = ({
      user: {},
      likes: [],
      comments: []
    });
  }
  componentDidMount(){
    let _this = this;
    _this.props.post.user().then((user) => {
      _this.props.post.likes().then(
        (likes) => {
          _this.props.post.comments().then(
            (comments) => {
              console.log(user);
              console.log(likes);
              console.log(comments);
              _this.setState({
                user: user.data.success,
                likes: likes.data.success,
                comments: comments.data.success
              });
            });
        });
    });
  }

  render(){
    return (
      <div className="col-md-12">
        <div className="post-heading">
          <div className="pull-left image">
            <img
              className="img-circle avatar"
              alt="user profile image"
              src={ this.props.post.image }/>
          </div>
          <div className="pull-left meta">
            <Link to={`/profile/${this.state.user.username}`}>
              <b>{ this.state.user.firstName }</b>
            </Link>
            made a post
          </div>
          <h6 className="text-muted time">
            { this.props.post.time }
          </h6>
        </div>
        <div className="post-description">
          <p>{ this.props.post.content }</p>
          <div className="stats">
            <Link
              className="btn btn-default stat-item"
              to={`/like/${ this.props.post.postId }`}>
              <i className="fa fa-thumbs-up icon" />
              { this.state.likes }
            </Link>
            <Link
              className="btn btn-default stat-item"
              to={`/share/${ this.props.post.postId }`}>
              <i className="fa fa-share icon" />
              { this.state.likes }
            </Link>
          </div>
        </div>
        <div className="post-footer">
          <div className="input-group">
            <input
              className="form-control" type="text"
              placeholder="Add a comment" />
            <span className="input-group-addon">
              <Link to={'#'}>
                <i className="fa fa-edit"></i>
              </Link>
            </span>
          </div>
          <ul className="comments-list">
            { this.state.comments.map( comment =>{
                <Comment
                  user={ comment.user }
                  commentDetail={ comment.content } />
            }) }
          </ul>
        </div>
      </div>
    );
  }

}
