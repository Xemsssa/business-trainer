import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Adwantages from './components/adwantages/Adwantages';
import Speaker from './components/speaker/Speaker';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Adwantages />
        <Speaker />
        <Footer />
      </div>
    );
  }
}

export default App;
