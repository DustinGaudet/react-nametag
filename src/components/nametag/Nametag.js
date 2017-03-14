import React, { Component } from 'react';
import './Nametag.css';
 
class Nametag extends Component { 

  state = {
    name: "Jed the Robot",
    nameEdit: false,
  }

  autoSelect = (event) => event.target.select()

  toggleNameEdit = () => this.setState({nameEdit: !this.state.nameEdit})

  updateName = (event) => this.setState({name: event.target.value})

  handleSubmit = (event) => {
    this.toggleNameEdit()
    event.preventDefault()
  }

  render() {
    return (
      <div className="nametag">
        <div className="heading">
          <h1>Hello</h1>
          <h2>my name is</h2>
        </div>
        <div className="name">
          {this.state.nameEdit === false ? (
            <h3 onClick={this.toggleNameEdit}>{this.state.name}</h3>
          ) : (
            <form onSubmit={this.handleSubmit}>
              <input value={this.state.name} autoFocus onFocus={this.autoSelect} onChange={this.updateName} onBlur={this.handleSubmit}/>
            </form>
          )}
        </div>
        <p className="copyright">Copyright {this.state.name}, {new Date().toDateString()}</p>
      </div>
    );
  }
}

export default Nametag;
