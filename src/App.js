import React from 'react';
import './App.css';
import Click from './components/HOC/Click';
import Hover from './components/HOC/Hover';

function App() {
  return (
    <div className="App">
      <p>Higher Order Components</p>
      <Click />
      <Hover />
    </div>
  )
}

export default App;
