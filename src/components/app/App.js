import React, { Component } from 'react';
import './App.css';
import Nametag from '../nametag/Nametag'
import OptionsMenu from '../optionsmenu/OptionsMenu'
 
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

  updateNametagColor = (event) => {
    this.setState({
      nametagColor: event.target.value
    })
    event.preventDefault()
  }

  toggleNameEdit = () => this.setState({nameEdit: !this.state.nameEdit})

  handleSubmit = (event) => {
    this.toggleNameEdit()
    event.preventDefault()
  }

  autoSelect = (event) => event.target.select()

  updateName = (event) => this.setState({name: event.target.value})

  render() {
    return (
      <div className="App">
        <Nametag data={this.state} 
        toggleNameEdit={this.toggleNameEdit} 
        toggleNametagMenu={this.toggleNametagMenu}
        updateName={this.updateName} 
        handleSubmit={this.handleSubmit}>
          <OptionsMenu closeMenu={this.toggleNametagMenu} 
          updateNametagColor={this.updateNametagColor} /> 
        </Nametag>
      </div>
    );
  }
}

export default App;
