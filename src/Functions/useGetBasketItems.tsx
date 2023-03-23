import { useEffect, useState } from "react";
import { couldStartTrivia } from "typescript";
import { item } from "../Components/Item/Item";

export const useGetBasketItems = (
  basketId: string
): [
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<boolean>>,
  setItems: React.Dispatch<React.SetStateAction<item[]>>,
  basketItems: item[],
  loading: boolean,
  error: boolean
] => {
  const [basketItems, setBasketItems] = useState<item[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log("i cri 1");

  useEffect(() => {
    setLoading(true);
    setError(false);
    const path = `/basket/1/getProducts`;
    fetch(path, {
      method: "GET",
    })
      .then((response) => {
        console.log("i cri 2");
        return response.json();
      })
      .then((response) => {
        setBasketItems(response);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);
  return [setLoading, setError, setBasketItems, basketItems, loading, error];
};
