import React from 'react';

export default class LoginForm extends React.Component {

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = ({
      username: '',
      password: ''
    });
  }

  onChange(e){
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();
    console.log(this.state);
  }

  render(){
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <p>USERNAME OR EMAIL ADDRESS</p>
          <div className="icon-addon addon-lg">
            <input
              className="form-control"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
            />
            <label title="username" className="fa fa-user" for="username"/>
          </div>
        </div>
        <div className="form-group">
          <p>PASSWORD</p>
          <div className="icon-addon addon-lg">
            <input
              className="form-control"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <label title="password" className="fa fa-lock" for="password"/>
          </div>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" />
            REMEMBER ME
          </label>
        </div>
        <div>
          <a href="#">Lost Password?</a>
          <input type="submit" value="LOGIN" />
          <div className="clear-fix"/>
        </div>
      </form>
    );
  }

}
