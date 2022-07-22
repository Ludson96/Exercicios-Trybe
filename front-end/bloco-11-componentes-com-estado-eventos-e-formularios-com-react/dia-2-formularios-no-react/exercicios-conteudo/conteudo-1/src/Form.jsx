import React from 'react';
import Filhos from './Filhos';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      select: '',
      nome: '',
      sobrenome: '',
      marcado: false,
      textarea: '',
    };
  }

  handleChange({target}) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    
    return (
      
      <form>
        <fieldset className='form-container'>
        
        <label htmlFor="">
          selecione
          <select name="select"  onChange={this.handleChange}>
            <option > 1 </option>
            <option selected> Selecione algo </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
        </label>

      <Filhos value={this.state.nome} handleChange={this.handleChange} identificacao='Nome:' name='nome' />

      <Filhos value={this.state.sobrenome} handleChange={this.handleChange} identificacao='Sobrenome:' name='sobrenome' />

        {/* <label htmlFor="">
          Sobrenome: <input type="text" name='sobrenome' value={this.state.sobrenome} onChange={this.handleChange} />
        </label> */}

        <label htmlFor="">
          <input type="checkbox" name="marcado" value={this.state.marcado} onChange={this.handleChange} />
        </label>

        <label>
          Digite
           <textarea name='textarea' value={this.state.textarea} onChange={this.handleChange} />
        </label>

        <label htmlFor="">
          <input type="file" />
        </label>

        </fieldset>
      </form>
    )
  }
}

export default Form;
