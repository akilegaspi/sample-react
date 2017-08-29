import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Comment extends Component {

  render(){
    return (
      <Link to={`/profile/${ this.props.user.username }`}>
        <img className="avatar" alt="avatar" src={ this.props.user.avatar } />
      </Link>
      <div className="comment-body">
        <div className="comment-heading">
          <h4 className="user">
            { this.props.user.fullName }
          </h4>
          <h5 className="time">
            { this.props.commentDetail.time }
          </h5>
          <p> { this.props.commentDetail.body }</p>
        </div>
      </div>
      if(this.props.commentDetail.comments.length > 0){
        <ul className="comments-list">
          { this.props.commentDetail.comments.map( comment =>{
            <Comment
              user={ comment.user }
              commentDetail={ comment.content } />
          })}
        </ul>
      }
    );
  }

}
