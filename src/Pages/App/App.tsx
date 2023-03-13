import React, { useState } from "react";
import "./App.css";
import { Header } from "../../Components/Header/Header";
import { ItemList } from "../../Components/ItemList/ItemList";
import { Message } from "../../Components/Message/Message";
import { useGetItems } from "../../Functions/useGetItems";

function App() {
  const [selectedOption, setSelectedOption] = useState<string>("Home");
  const types = ["Table", "Chair", "Light"];
  const [loading, error, items] = useGetItems({
    selectedOption: selectedOption,
    isBasket: false,
  });
  console.log(items);

  items.map((item) => console.log(item.product_id));

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
