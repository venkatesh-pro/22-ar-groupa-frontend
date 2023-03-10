import React, { useState } from "react";
import "./App.css";
import { Header } from "../../Components/Header/Header";
import { ItemList } from "../../Components/ItemList/ItemList";
import { Message } from "../../Components/Message/Message";
import { useGetItems } from "../../useGetItems";

function App() {
  const [selectedOption, setSelectedOption] = useState<string>("Home");
  const types = ["Table", "Chair", "Lamp"];
  const [loading, error, items, setTasks] = useGetItems({ selectedOption });
  console.log(items);

  if (loading) {
    return <Message text="Loading" />;
  }

  if (error) {
    return <Message text="Error" />;
  }

  return (
    <div className="App">
      <Header
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        options={types}
      />
      <ItemList items={items} />
    </div>
  );
}

export default App;
