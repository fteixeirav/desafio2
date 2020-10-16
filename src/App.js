import React from 'react';
import Relógio from './Relogio'
import Cronometro from './Cronometro';
import Temporizador from './Temporizador'

import './App.css'

class App extends React.Component 
{
  render(){
    return (
      <div>
        <div id="App-header"> 

          <Relógio />

          <Cronometro />

          <Temporizador />

        </div>
      </div>
    );
  }
}

export default App;