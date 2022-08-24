import React from "react";

class DadosPessoais extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.hadleSpecialChar = this.hadleSpecialChar.bind(this);
    this.onBlurHandle = this.onBlurHandle.bind(this);

    this.state = {
      nome: '',
      endereco: '',
      cidade: '',
    }
  }

  handleChange({target}) {
    let { name, value } = target;

    name === 'nome' && (value = value.toUpperCase());

    this.setState({ [name]:  value })
  }

  hadleSpecialChar({target}) {
    let { value } = target;
    const parsed = value.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
    this.setState( { endereco: parsed } )
  }

  onBlurHandle({target}) {
    let { value } = target;

    value = value.match(/^\d/) ? '' : value;

    this.setState({ cidade: value })
  }

  render() {
    const { nome, endereco, cidade } = this.state;

    return (
      <fieldset className="first">
        <legend>Dados pessoais </legend>
        <form>
          <div className="form-field">
            Nome:  
            <input 
              type="text" 
              name="nome" 
              maxLength={40} 
              required 
              value={nome}
              onChange={this.handleChange} 
            />
          </div>

          <div className="form-field">
            Email: 
            <input 
              type="email" 
              name="email"
              maxLength={50}
              required
            />
          </div>

          <div className="form-field">
            CPF: 
            <input 
              type="text"
              name="cpf"
              maxLength={11}
              required
            />
          </div>

          <div className="form-field">
            Endereço: 
            <input 
              type="text"
              name="endereco"
              maxLength={200}
              required
              value={endereco}
              onChange={ this.hadleSpecialChar }
            />
          </div>

          <div className="form-field">
            Cidade:
            <input 
            type="text"
            name="cidade"
            maxLength={28}
            required
            value={ cidade }
            onBlur={ this.onBlurHandle }
            onChange={ this.handleChange }
            />
          </div>

          <div className="form-field">

          </div>

            <button type="submit">Enviar</button>
          </form>

      </fieldset>
    )
  }
}

export default DadosPessoais;
