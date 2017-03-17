import React from 'react';
import './Nametag.css';
 
const Nametag = (props) => {
  
  const nametagStyle = {
    backgroundColor: props.data.nametagColor
  }

  const renderMenu = () => props.data.menuOpen === true && props.children

  const renderNameEdit = () => {
    if (!props.data.nameEdit) {
      return (
        <h3 className="" onClick={props.toggleNameEdit}>{props.data.name}</h3>
      );
    }

    return (
      <form onSubmit={props.handleSubmit}>
        <input 
          value={props.data.name} 
          autoFocus 
          onFocus={props.autoSelect} 
          onChange={props.updateName} 
          onBlur={props.handleSubmit}
        />
      </form>
    );
  }

  return (
    <div className="nametag" style={nametagStyle} >
        
      {renderMenu()}

      <div className="heading">
        <button 
          className="menu-open fa fa-lg fa-cog" 
          onClick={props.toggleNametagMenu} ></button>
        <h1 className="animated slideInDown">Hello</h1>
        <h2 className="animated fadeIn">my name is</h2>
      </div>

      <div className="name">
        {renderNameEdit()}
      </div>

      <p className="animated fadeIn copyright">Copyright {props.data.name}, {new Date().toDateString()}</p>
    </div>
  )
}

export default Nametag;
