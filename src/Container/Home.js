import React from 'react';
import Login from '../Container/Login';
import Signup from '../Container/Signup';

export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = ({user: props.user});
  }

  componentDidMount(){

  }

  logIn(username, email, password){
    this.props.authService.login(username, email, password, (err, res, body) => {
      if(err)
        throw err;
      else{
        this.setState({user: {}});
      }
    });
  }

  render(){
      if(this.state.user){
        return <Signup />;
      }
      else {
        return <Login />;
      }
  }
}
