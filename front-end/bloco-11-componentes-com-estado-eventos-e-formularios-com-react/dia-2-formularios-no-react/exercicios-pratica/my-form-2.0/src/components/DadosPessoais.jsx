import React from "react";

class DadosPessoais extends React.Component {
  render() {
    const { handleToUpperCase, nome } = this.props;

    return (
      <fieldset className="first">
        <legend>Dados pessoais </legend>

          <div className="form-field">
            Nome:  
            <input 
              type="text" 
              name="nome" 
              maxLength={40} 
              required 
              value={nome}
              onChange={handleToUpperCase} 
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
            />
          </div>

          <div className="form-field">

          </div>

      </fieldset>
    )
  }
}

export default DadosPessoais;
