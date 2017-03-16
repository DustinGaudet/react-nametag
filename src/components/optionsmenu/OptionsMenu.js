import React, { Component } from 'react';
import './OptionsMenu.css'
 
class OptionsMenu extends Component {

  render() {
    return (
      <div className="options-menu-overlay" onClick={this.props.closeMenu}>
        <div className="options-menu-modal" onClick={this.props.noBubble}>
          <button className="close-menu-button" onClick={this.props.closeMenu} >&times;</button>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default OptionsMenu;
