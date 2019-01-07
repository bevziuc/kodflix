import React, { Component } from 'react';
import batmanSuperman from './img/batma-vs-superman.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={batmanSuperman} alt='batman vs superman'/>
      </div>
    );
  }
}

export default App;
