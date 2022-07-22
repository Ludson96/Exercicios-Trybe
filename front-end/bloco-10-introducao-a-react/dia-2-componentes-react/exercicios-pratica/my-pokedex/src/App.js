import './App.css';
import React from 'react';
import pokemons from './data';
import Estrutura from './Estrutura';

class App extends React.Component {
  render() {
    return (
      <div className='pokedex'>
      {pokemons.map((e) => <Estrutura key={e.id} name={e.name} type={e.type} image={e.image} moreInfo={e.moreInfo} averageWeight={e.averageWeight} />)}
      </div>
    )
  }
}

export default App;
