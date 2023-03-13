import { useEffect, useState } from "react";
import { item } from "../Components/Item/Item";

interface Props {
  selectedOption: string;
  isBasket: boolean;
}
export const useGetItems = ({
  selectedOption,
  isBasket,
}: Props): [boolean, boolean, item[]] => {
  const [items, setItems] = useState<item[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    let path;
    const choice = selectedOption.toUpperCase();
    if (selectedOption === "Home") {
      path = `/api/products/all`;
    } else {
      path = `api/products/all?productType=${choice}`;
      console.log(path);
    }
    fetch(path, {
      method: "GET",
    })
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((response) => {
        setItems(response);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [selectedOption]);
  return [loading, error, items];
};
