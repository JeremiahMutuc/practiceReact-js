import React from 'react';
import './App.css';
import Greet from './components/Greet'
import Greet2 from './components/Greet2'
import Hello from './components/Hellojsx'
import Message from './components/Message'
import Event from './components/Event'
function App(){
 
    return (
      <div className="App">
           <Greet/>
           <Greet2/>
           <Hello/>
           <Greet alias="Jairah alias"/> 
           <Message/>
           <Event></Event>
      </div>
    );

  

}

export default App;
