import React, { Component } from 'react';
import './OptionsMenu.css'
 
class OptionsMenu extends Component {

  render() {
    return (
      <div className="animated fadeIn options-menu-container">
        <div className="options-menu-overlay" onClick={this.props.closeMenu}>
        </div>
        <div className="options-menu-modal">
          <button className="close-menu-button" onClick={this.props.closeMenu} >&times;</button>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default OptionsMenu;
