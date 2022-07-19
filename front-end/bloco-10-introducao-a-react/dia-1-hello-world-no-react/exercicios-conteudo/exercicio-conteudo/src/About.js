import React from 'react';

class About extends React.Component {
  render() {
    const skills = ['HTML', 'CSS', 'JS'] // adicione mais habilidades aqui
    const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>
    return (
      <div>
        <h1>Ludson Pereira dos Santos</h1>
        <p> Eu estou morrendo de dor nas costas.</p>
        <h2>Minhas Habilidades</h2>
        <ul>{jsxSkills}</ul>
      </div>
    );
  }
}

export default About;