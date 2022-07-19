import './App.css';
import React from 'react';
import pokemons from './data';
import Estrutura from './pokemon';

class App extends React.Component {
  render() {
    pokemons.map((e) => {
      return { name, type, averageWeight, image, moreInfo } = e;
    })
    return (
      <div>
      pokemons
        <Estrutura name='${e.}'/>
      </div>
    )
  }
}

export default App;
