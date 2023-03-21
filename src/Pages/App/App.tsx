import React from "react";
import "./App.css";
import { Header } from "../../Components/Header/Header";
import { ItemList } from "../../Components/ItemList/ItemList";
import { Message } from "../../Components/Message/Message";
import { useGetItems } from "../../Functions/useGetItems";
import { useParams } from "react-router-dom";

function App() {
  const { filter } = useParams<string>();
  const [loading, error, items] = useGetItems({
    selectedOption: filter,
  });
  // console.log(items);

  items.map((item) => console.log(item.product_id));

  if (loading) {
    return <Message text="Loading" />;
  }

  if (error) {
    return <Message text="Error" />;
  }

  return (
    <div className="App">
      <Header />
      <ItemList items={items} />
    </div>
  );
}

export default App;
