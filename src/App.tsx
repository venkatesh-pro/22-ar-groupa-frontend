import React from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";

import { ItemList } from "./Components/ItemList/ItemList";

function App() {
  return (
    <div className="App">
      <Header />
      <ItemList />
    </div>
  );
}

export default App;
