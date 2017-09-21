import React from 'react';

export default class LoginForm extends React.Component {

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
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
    this.props.logIn(this.state.username, this.state.password);
  }

  render(){
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <p>USERNAME OR EMAIL ADDRESS</p>
          <div className="icon-addon addon-lg">
            <input
              type="text"
              className="form-control"
              id="email"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
            />
            <label title="username" className="fa fa-user" htmlFor="email"/>
          </div>
        </div>
        <div className="form-group">
          <p>PASSWORD</p>
          <div className="icon-addon addon-lg">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <label title="password" className="fa fa-lock" htmlFor="password"/>
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
          <div className="clear-fix"></div>
        </div>
      </form>
    );
  }

}
