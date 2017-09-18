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
    this.props.authService.login(username, password)
    .then((res) => {
      if(res.data.success) {
        let data = res.data.success;
        this.setState({
          user: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            gender: data.gender,
            username: data.username,
            birthday: data.birthday
          }
        });
      }
    });
  }

  render(){
      if(this.state.user){
        return <Timeline
          user={ this.state.user }
          postService={ this.props.postService }
          userService={ this.props.userService }
        />;
      }
      else {
        return <Login logIn={ this.logIn }/>;
      }
  }
}
