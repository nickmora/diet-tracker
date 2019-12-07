import React from 'react';
import './App.css';
import NavBar from './componenets/NavBar';
import MainStyle from "./styles/MainStyle";

function App() {
  const classes = MainStyle();
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
