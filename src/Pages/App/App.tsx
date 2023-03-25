import React, { createContext } from "react";
import "./App.css";
import { ItemList } from "../../Components/ItemList/ItemList";
import { useGetItems } from "../../Functions/useGetItems";
import { useParams } from "react-router-dom";
import { Loading } from "../../Components/Loading/Loading";
import { Error } from "../../Components/Error/Error";
import Footer from "../../Components/Footer/Footer";

export const AppStateContext = createContext<
  React.Dispatch<React.SetStateAction<boolean>>[]
>([]);

interface Props {
  basketId: number;
}

export function App(props: Props) {
  const { filter } = useParams<string>();
  const [loading, error, items, setLoading, setError] = useGetItems({
    selectedOption: filter,
  });
  // console.log(items);

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <Error></Error>;
  }

  return (
    <div className="App">
      <AppStateContext.Provider value={[setLoading, setError]}>
        <ItemList items={items} basketId={props.basketId} />
      </AppStateContext.Provider>
      <Footer />
    </div>
  );
}
