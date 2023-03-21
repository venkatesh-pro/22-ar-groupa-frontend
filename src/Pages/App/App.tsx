import React, { createContext } from "react";
import "./App.css";
import { Header } from "../../Components/Header/Header";
import { ItemList } from "../../Components/ItemList/ItemList";
import { Message } from "../../Components/Message/Message";
import { useGetItems } from "../../Functions/useGetItems";
import { useParams } from "react-router-dom";

export const AppStateContext = createContext<
  React.Dispatch<React.SetStateAction<boolean>>[]
>([]);

export function App() {
  const { filter } = useParams<string>();
  const [loading, error, items, setLoading, setError] = useGetItems({
    selectedOption: filter,
  });
  // console.log(items);

  items.map((item) => console.log(item.product_id));

  if (loading) {
    return <Message text="Loading" />;
  }

  if (error || items.length === 0) {
    return <Message text="Error" />;
  }

  return (
    <div className="App">
      <Header />
      <AppStateContext.Provider value={[setLoading, setError]}>
        <ItemList items={items} />
      </AppStateContext.Provider>
    </div>
  );
}
