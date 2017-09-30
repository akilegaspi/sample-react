import React from 'react';

export default class LostPasswordForm extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = ({
      'email': ''
    });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  onChange(e){
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value});
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit }>
        <div className="form-group">
          <p>EMAIL ADDRESS</p>
          <div className="icon-addon addon-lg">
            <input type="text" className="form-control" id="email" />
            <label htmlFor="email" className="fa fa-user" title="email" />
          </div>
        </div>
        <div>
          <input type="submit" value="RESET PASSWORD" id="lost-input" />
          <div className="clear-fix"></div>
        </div>
      </form>
    );
  }

}
