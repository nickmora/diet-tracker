import React from 'react';
import './App.css';
import NavBar from './componenets/NavBar';
import FoodInput from "./componenets/FoodInput"
import MainDisplay from './componenets/MainDisplay';
import NewFoodForm from './componenets/NewFoodForm';
import MainStyle from "./styles/MainStyle";

function App() {
  const classes = MainStyle();
  return (
    <div className={"App", classes.root}>
      <NavBar />
      <div className = {classes.root}>
        <MainDisplay />
        {/* <FoodInput /> */}
        <NewFoodForm />
      </div>
    </div>
  );
}

export default App;
