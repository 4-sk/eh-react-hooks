import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Sender } from './Sender';
import { Receiver } from './Receiver';
import eh from '@foursk/eh';


function App() {

  return (
    <div className="app">
      <Sender />
      <Receiver />
    </div>
  );
}

export default App;
