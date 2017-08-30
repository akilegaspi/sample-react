import React from 'react';
import Login from '../Container/Login';
import Timeline from '../Container/Timeline';

export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = ({user: props.user});
    this.logIn = this.logIn.bind(this);
  }

  logIn(username, password){
    console.log(this.props);
    this.props.authService.login(username, password, (err, res, body) => {
      if(err)
        throw err;
      else{
        this.setState({user: body});
      }
    });
  }

  render(){
      if(this.state.user){
        return <Timeline user={ this.state.user }/>;
      }
      else {
        return <Login logIn={ this.logIn }/>;
      }
  }
}
