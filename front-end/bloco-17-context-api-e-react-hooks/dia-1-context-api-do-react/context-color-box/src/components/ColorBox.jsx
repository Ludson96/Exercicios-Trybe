import React from 'react';
import '../styles/box.css';
import MyContext from './MyContext';

class ColorBox extends React.Component {
  render() {
    return(
      <MyContext.Consumer>
        {({index, color, handleChangeColor}) => (
          <button
          type="button"
          className="box"
          style={ { backgroundColor: color[index] } }
          onClick={ handleChangeColor }
        >
          Click me to change my color!
        </button>
        )}
      </MyContext.Consumer>
    )
  }
}

export default ColorBox;
