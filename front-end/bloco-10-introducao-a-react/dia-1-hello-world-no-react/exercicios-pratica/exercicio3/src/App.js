import './App.css';
import Header from './Header';
import React from 'react';
import Content from './Content';

class App extends React.Component {
  render() {
    return (
      <React.Fragment key='teste'>
        <Header />
        <Content />
      </React.Fragment >
    )
  }
}

export default App;
