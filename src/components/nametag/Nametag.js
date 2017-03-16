import React, { Component } from 'react';
import './Nametag.css';
 
class Nametag extends Component { 

  render() {

    const nametagStyle = {
      backgroundColor: this.props.data.nametagColor
    }

    return (
      <div className="nametag" style={nametagStyle} >
        {this.props.data.menuOpen === true &&
          this.props.children
        }
        <div className="heading">
          <button className="menu-open fa fa-lg fa-cog" onClick={this.props.toggleNametagMenu} ></button>
          <h1>Hello</h1>
          <h2>my name is</h2>
        </div>
        <div className="name">
          {this.props.data.nameEdit === false ? (
            <h3 onClick={this.props.toggleNameEdit}>{this.props.data.name}</h3>
          ) : (
            <form onSubmit={this.props.handleSubmit}>
              <input value={this.props.data.name} autoFocus onFocus={this.props.autoSelect} onChange={this.props.updateName} onBlur={this.props.handleSubmit}/>
            </form>
          )}
        </div>
        <p className="copyright">Copyright {this.props.data.name}, {new Date().toDateString()}</p>
      </div>
    );
  }
}

export default Nametag;
