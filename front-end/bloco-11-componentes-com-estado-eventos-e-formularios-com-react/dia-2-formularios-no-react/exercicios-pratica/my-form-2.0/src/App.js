import './App.css';
import React from 'react';
import DadosPessoais from './components/DadosPessoais';

class App extends React.Component {
  constructor() {
    super();

    this.handleToUpperCase = this.handleToUpperCase.bind(this);

    this.state = {
      nome: '',
    }
  }

  handleToUpperCase({target}) {
    let { value } = target;
    this.setState( { nome: value.toUpperCase() } )
  }

  render() {
    return (
      <>
        <DadosPessoais handleToUpperCase={this.handleToUpperCase} nome={this.state.nome} />
      </>
    )
  }
}

export default App;
