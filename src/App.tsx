import React, { useState } from "react";
import "./App.css";
import { DropDownBox } from "./Components/DropDownBox/DropDownBox";
import { Header } from "./Components/Header/Header";

import { ItemList } from "./Components/ItemList/ItemList";

function App() {
  const [selectedOption, setSelectedOption] = useState("ALL");
  const types = ["ALL", "TABLE", "CHAIR"];

  return (
    <div className="App">
      <Header />
      <DropDownBox
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        options={types}
      />
      <ItemList />
    </div>
  );
}

export default App;
