export const AddToBasket = (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<boolean>>,
  product_id: number | string,
  basketId: number
) => {
  console.log("ADDED TO BASKET");
  setLoading(true);
  const path = `/api/basketProducts/${basketId}/add?productId=${product_id}`;
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
