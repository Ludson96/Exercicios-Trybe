import React, { useState, useContext } from "react";
import FormContext from "../context/FormContext";
import StudentsInfo from "./StudentsInfo";

function Form() {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [module, setModule] = useState('');

  const { addData } = useContext(FormContext);

  const handleClick = (event) => {
    event.preventDefault();
    const personalInfo = { fullName, age, city, module }

    addData(personalInfo);
  }

  return (
    <>
    <form className="container">
      <label htmlFor="nome" className="field">
        Nome completo:
        <input 
        type="text" 
        name="nome"
        id="nome"
        value={ fullName }
        onChange={ ({ target }) => setFullName(target.value) }
        />
      </label>

      <label htmlFor="age" className="field">
        Idade: 
        <input 
        type="number" 
        name="age"
        id="age"
        value={ age }
        onChange={ ({ target }) => setAge(target.value) }
        />
      </label>

      <label htmlFor="city" className="field">
        Cidade:
        <input 
        type="text"
        name="city"
        id="city"
        value={ city }
        onChange={ ({ target }) => setCity(target.value) }
        />
      </label>
      <div>
        <label htmlFor="fundamentos" className="radio">
          <input 
          type="radio" 
          id="fundamentos"
          name="modulo" 
          value="Fundamentos"
          checked={ module === "Fundamentos" }
          onChange={ ({ target }) => setModule(target.value) }
          />
          Fundamentos
        </label>

        <label htmlFor="front-end" className="radio">
          <input 
          type="radio" 
          id="front-end"
          name="modulo" 
          value="Front-end"
          checked={ module === 'Front-end' }
          onChange={ ({ target }) => setModule(target.value) }
          />
          Front-end
        </label>

        <label htmlFor="back-end" className="radio">
          <input 
          type="radio" 
          id="back-end"
          name="modulo" 
          value="Back-end"
          checked={ module === "Back-end" }
          onChange={ ({ target }) => setModule(target.value) }
          />
          Back-end
        </label>

        <label htmlFor="ciencia-da-computacao" className="radio">
          <input 
          type="radio" 
          id="ciencia-da-computacao"
          name="modulo" 
          value="Ciencia da computacao"
          checked={ module === "Ciencia da computacao" }
          onChange={ ({ target }) => setModule(target.value) }
          />
          Ciência da Computação
        </label>
      </div>
    </form>
    <button 
    type="button"
    onClick={ handleClick }
    >
      Enviar
    </button>
    <StudentsInfo />
    </>
  )
}

export default Form;
