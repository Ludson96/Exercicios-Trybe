import './App.css';
import React from 'react';
import ColorBox from './components/ColorBox';
import MyContext from './components/MyContext';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      color: ['blue', 'red', 'yellow'],
      index: 0,
    }

    this.handleChangeColor = this.handleChangeColor.bind(this);
  }

  handleChangeColor () {
    let { index } = this.state;

    if (index > 1) {
      index = 0
     } else {
      index += 1
     }
    this.setState({ index: index })
  }

  render() {
    const { index, color } = this.state;
    const teste = {
      index,
      color,
      handleChangeColor: this.handleChangeColor
    }
    return (
      <MyContext.Provider value={ teste }>
        <ColorBox />
      </MyContext.Provider>
    );
  }
}

export default App;