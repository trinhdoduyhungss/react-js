import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Intro from './intro';
import NumberHandling from './components/NumberHandling'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header name='some' job="students" />
        <Intro ratio='2-1' />
        <NumberHandling />
      </div>
    );
  }
}

export default App;
