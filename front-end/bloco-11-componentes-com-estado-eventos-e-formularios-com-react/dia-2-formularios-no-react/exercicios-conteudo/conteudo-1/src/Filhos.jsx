import React from "react";

class Filhos extends React.Component {
  render() {
const { value, handleChange, identificacao, name } = this.props;

    return (
      <label htmlFor="">
        { identificacao } <input type="text" 
        name={ name } 
        value={ value } 
        onChange={ handleChange } 
        />
      </label>
    )
  }
}

export default Filhos;
