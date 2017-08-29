import { Component } from 'react';
import { Link } from 'react-router-dom';
import Comment from './Comment.js';

export default class Post extends Component {
  render(){
    return (
      <div className="col-md-12">
        <div className="post-heading">
          <div className="pull-left image">
            <img
              className="img-circle avator"
              alt="user profile image"
              src={ this.props.post.image }/>
          </div>
          <div className="pull-left meta">
            <Link to={`/profile/${this.props.user.username}`}>
              <b>{ this.props.user.fullName }</b>
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
              to={`/like/${ this.props.post.id }`}>
              <i className="fa fa-thumbs-up icon" />
              { this.props.post.likes }
            </Link>
            <Link
              className="btn btn-default stat-item"
              to={`/share/${ this.props.post.id }`}>
              <i className="fa fa-share icon" />
              { this.props.post.likes }
            </Link>
          </div>
        </div>
        <div className="post-footer">
          <div className="input-group">
            <input
              className="form-control" type="text"
              placeholder="Add a comment" />
            <span class="input-group-addon">
              <Link to={'#'}>
                <i className="fa fa-edit"></i>
              </Link>
            </span>
          </div>
          <ul className="comments-list">
            { this.props.post.comments.map( comment =>{
              <li className="comment">
                <Comment
                  user={ comment.user }
                  commentDetail={ comment.content } />
              </li>
            }) }
          </ul>
        </div>
      </div>
    );
  }

}
