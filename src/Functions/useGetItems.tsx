import { useEffect, useState } from "react";
import { item } from "../Components/Item/Item";

interface Props {
  selectedOption: string | undefined;
}
export const useGetItems = ({
  selectedOption,
}: Props): [
  boolean,
  boolean,
  item[],
  React.Dispatch<React.SetStateAction<boolean>>,
  React.Dispatch<React.SetStateAction<boolean>>
] => {
  const [items, setItems] = useState<item[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    let path;
    if (selectedOption === undefined) {
      path = `/products/all`;
    } else {
      const choice = selectedOption.toUpperCase();
      path = `/products/all?productType=${choice}`;
    }

    fetch(path, {
      method: "GET",
    })
      .then((response) => {
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
  return [loading, error, items, setLoading, setError];
};
