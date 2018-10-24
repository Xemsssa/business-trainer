import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Adwantages from './components/adwantages/Adwantages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Adwantages />
      </div>
    );
  }
}

export default App;
