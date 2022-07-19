import './App.css';
import Image from './Image';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <>
        <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Cute cat staring' />
      </>
    )
  }
}

export default App;
