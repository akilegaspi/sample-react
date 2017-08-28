import React from 'react';

export default class SignupForm extends React.Component {

  constructor(props){
    super(props);
    this.state = ({
      username: '',
      password: '',
      email: ''
    });
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    this.props.signUp(this.state.username, this.state.email, this.state.password);
  }

  onChange(e){
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value});
  }

  render(){
    return (
      <form onSubmit={ this.onSubmit }>
        <input
          type="text"
          value={ this.state.username }
          name="username"
          onChange={ this.onChange } />
        <input
          type="password"
          value={ this.state.password }
          name="password"
          onChange={ this.onChange } />
        <input
          type="text"
          value={ this.state.email }
          name="email"
          onChange={ this.onChange } />
        <input type="submit" value="Signup" />
      </form>
    );
  }

}
