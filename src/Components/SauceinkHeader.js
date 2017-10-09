import React from 'react';

export default class SauceinkHeader extends React.Component {

  render() {
    return (
      <div id="sauceink-header">
        <h1 className="text-center">
          { this.props.header }
        </h1>
      </div>
    );
  }

}
