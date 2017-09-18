import { Component } from 'react';
import { Link } from 'react-router-dom';
import Comment from './Comment';

export default class Post extends Component {

  componentDidMount(){
    this.props.post.user.then((res) => {
      this.setState({
        user: res.data.success
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
            <Link to={`/profile/${this.props.user.username}`}>
              <b>{ this.state.user.firstName }</b>
            </Link>
            made a post
          </div>
          <h6 className="text-muted time">
            { this.props.post.time }
          </h6>
        </div>
        <div className="post-description">
          <p>{ this.props.post.text }</p>
          <div className="stats">
            <Link
              className="btn btn-default stat-item"
              to={`/like/${ this.props.post.postId }`}>
              <i className="fa fa-thumbs-up icon" />
              { this.props.post.likes }
            </Link>
            <Link
              className="btn btn-default stat-item"
              to={`/share/${ this.props.post.postId }`}>
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
