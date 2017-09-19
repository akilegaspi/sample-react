import React from 'react';

export default class SignupForm extends React.Component {

  constructor(props){
    super(props);
    this.state = ({
      username: '',
      password: '',
      email: '',
      firstName: '',
      birthday: '',
      lastName: '',
      gender: 1
    });
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    this.props.signUp(this.state);
  }

  onChange(e){
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value});
  }

  render(){
    return (
      <form onSubmit={ this.onSubmit }>
        <div className="row">
          <div className="col-md-6">
            <h4><strong>ACCOUNT DETAILS</strong></h4>
            <div className="form-group">
              <label htmlFor="username">USERNAME (REQUIRED):</label>
              <input
                type="text"
                className="form-control reg-input"
                id="username"
                name="username"
                value={ this.state.username }
                onChange={ this.onChange }
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">EMAIL ADDRESS (REQUIRED):</label>
              <input
                type="text"
                className="form-control reg-input"
                id="email"
                name="email"
                value={ this.state.email }
                onChange={ this.onChange }
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">CHOOSE A PASSWORD (REQUIRED):</label>
              <input
                type="password"
                className="form-control reg-input"
                id="password"
                name="password"
                value={ this.state.password }
                onChange={ this.onChange }
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirm-password">CONFIRM PASSWORD (REQUIRED):</label>
              <input
                type="password"
                className="form-control reg-input"
                id="confirm-password"
              />
            </div>
          </div>
          <div className="col-md-6">
            <h4><strong>PROFILE DETAILS</strong></h4>
            <div className="form-group">
              <label htmlFor="firstName">FIRST NAME (REQUIRED):</label>
              <input
                type="text"
                className="form-control reg-input"
                id="firstName"
                name="firstName"
                value={ this.state.firstName }
                onChange={ this.onChange }
               />
            </div>
            <div className="form-group">
              <label htmlFor="birthday">BIRTHDAY (REQUIRED):</label>
              <input
                type="date"
                className="form-control reg-input"
                id="birthday"
                name="birthday"
                value={ this.state.birthday }
                onChange={ this.onChange }
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">LAST NAME (REQUIRED):</label>
              <input
                type="text"
                className="form-control reg-input"
                id="lastName"
                name="lastName"
                value={ this.state.lastName }
                onChange={ this.onChange }
              />
            </div>
            <div className="form-group">
              <label>GENDER (REQUIRED):</label>
              <div className="radio">
                <label><input type="radio" name="male" />MALE</label>
              </div>
              <div className="radio">
                <label><input type="radio" name="female" />FEMALE</label>
              </div>
            </div>
          </div>
        </div>
        <input type="submit" className="btn" id="reg-submit" value="COMPLETE SIGN UP" />
      </form>
    );
  }

}
