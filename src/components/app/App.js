import React, { Component } from 'react';
import './App.css';
import Nametag from '../nametag/Nametag'
import OptionsMenu from '../optionsmenu/OptionsMenu'
import { CirclePicker } from 'react-color';

class App extends Component {

  state = {
    menuOpen: false,    
    nametagColor: "red",
    nameEdit: false,
    name: "Jed the Roboooo"
  }

  toggleNametagMenu = (event) => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
    event.preventDefault()
  }

  updateNametagColor = (color) => {
    this.setState({
      nametagColor: color.hex
    })
  }

  toggleNameEdit = () => this.setState({nameEdit: !this.state.nameEdit})

  handleSubmit = (event) => {
    this.toggleNameEdit()
    event.preventDefault()
  }

  autoSelect = (event) => event.target.select()

  updateName = (event) => this.setState({name: event.target.value})

  noBubble = (event) => event.stopPropagation()

  render() {
    return (
      <div className="App">
        <Nametag data={this.state} 
          toggleNameEdit={this.toggleNameEdit} 
          toggleNametagMenu={this.toggleNametagMenu}
          updateName={this.updateName} 
          handleSubmit={this.handleSubmit}>
            <OptionsMenu closeMenu={this.toggleNametagMenu} 
              updateNametagColor={this.updateNametagColor}> 
                <CirclePicker
                  color={this.state.nametagColor}
                  onChangeComplete={this.updateNametagColor}
                />
          </OptionsMenu> 
        </Nametag>
      </div>
    );
  }
}

export default App;
