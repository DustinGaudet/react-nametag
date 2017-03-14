import React, { Component } from 'react';
import './Nametag.css';
 
class Nametag extends Component {
  render() {
    return (
      <div className="nametag">
        <div className="heading">
          <h1>Hello</h1>
          <h2>my name is</h2>
        </div>
        <div className="name">
          <h3>Jed the Robo</h3>
        </div>
      </div>
    );
  }
}

export default Nametag;
