import React from 'react'

export default class Profile extends React.Component {

  render(){
      return (<h1> {this.props.params.username}</h1>);
  }

}
