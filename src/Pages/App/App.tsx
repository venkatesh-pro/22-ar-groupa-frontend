import React from "react";
import "./App.css";
import { Header } from "../../Components/Header/Header";
import { ItemList } from "../../Components/ItemList/ItemList";
import { useGetItems } from "../../Functions/useGetItems";
import { useParams } from "react-router-dom";
import { Loading } from "../../Components/Loading/Loading";
import { Error } from "../../Components/Error/Error";

function App() {
  const { filter } = useParams<string>();
  const [loading, error, items] = useGetItems({
    selectedOption: filter,
  });
  // console.log(items);

  items.map((item) => console.log(item.product_id));
  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <Error></Error>;
  }

  return (
    <div className="App">
      <Header />
      <ItemList items={items} />
    </div>
  );
}

export default App;
