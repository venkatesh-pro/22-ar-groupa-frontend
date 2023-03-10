import { useEffect, useState } from "react";
import { item } from "./Components/Item/Item";

interface Props {
  selectedOption: string;
}
export const useGetItems = ({
  selectedOption,
}: Props): [boolean, boolean, item[]] => {
  const [items, setItems] = useState<item[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    let path;
    if (selectedOption === "Home") {
      path = `/api/products/all`;
    } else {
      path = `api/products/type?type=${selectedOption}`;
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
