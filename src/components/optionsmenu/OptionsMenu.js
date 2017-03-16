import React, { Component } from 'react';
import './OptionsMenu.css'
 
class OptionsMenu extends Component {

  render() {
    return (
      <div className="options-menu-overlay">
        <div className="options-menu-modal">
          <button className="close-menu-button" onClick={this.props.closeMenu} >&times;</button>
          <form onSubmit={this.props.closeMenu}>
            <label>Nametag Color
              <input placeholder="e.g. red, #FFF, rgb(0,0,0)" autoFocus onChange={this.props.updateNametagColor} />
            </label>
          </form>
        </div>
      </div>
    )
  }
}

export default OptionsMenu;
