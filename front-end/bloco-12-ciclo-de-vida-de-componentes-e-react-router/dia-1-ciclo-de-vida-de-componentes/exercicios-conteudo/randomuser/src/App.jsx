import './App.css';
import React from 'react';
// import Teste from './Components/Teste'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      showTimer: true,
      picture: '',
      name: '',
      email: '',
      age: '',
    }

  }

  async componentDidMount() {
    const response = await fetch(' https://api.randomuser.me/ ');
    const data = await response.json();
    const { results } = data
    this.setState({
      picture: results[0].picture,
      name: results[0].name,
      email: results[0].email,
      age: results[0].dob.age,
      showTimer: false,
    })
  }

  render() {
    const { showTimer, picture, name, email, age } = this.state;
        
    return (
      <div>
      <div>
        {showTimer ? <span>loading...</span> : ` picture: ${picture.large}\nName: ${name.first}\nEmail: ${email}\nAge: ${age}`}
      </div>
      <main>
        <img src={picture.large} alt="teste" />
      </main>
      </div>
    )
  }
}

export default App;
