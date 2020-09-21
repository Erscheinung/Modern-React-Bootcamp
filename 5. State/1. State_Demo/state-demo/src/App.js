import React, { Component } from 'react';
import Game from './Game.js';
import Rando from './Rando.js';
import ButtonClick from './ButtonClick.js';
import BrokenClick from './BrokenClick.js';
import Clicker from './Clicker.js';
import './App.css';

class App extends Component {
    render() {
      return(
        <div className="App">
          <Game/>
          <Rando maxNum={7}/>
          <ButtonClick />
          <BrokenClick />
          <Clicker />
        </div>
      );
    }
}

export default App;