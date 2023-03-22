export const AddToBasket = (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<boolean>>,
  product_id: number | string
) => {
  console.log("ADDED TO BASKET");
  setLoading(true);
  const path = `/api/basketProducts/1/add?productId=${product_id}`;
  console.log(path);
  fetch(path, { method: "POST" })
    .then((response) => {
      console.log(response);
    })
    .finally(() => {
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setError(true);
    });
};
