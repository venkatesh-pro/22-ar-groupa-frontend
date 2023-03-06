import React from 'react';
import './App.css';
import { Model } from './AR/Scene';
import { Header } from './Components/Header/Header';
import { Item } from './Components/Item/Item';


function App() {
  return (
    <div className="App">
      <Header />
      <Item name={"table"} imageURL={""} />
    </div>
  );
}

export default App;
