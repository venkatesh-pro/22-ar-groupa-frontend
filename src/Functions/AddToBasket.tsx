export const AddToBasket = (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<boolean>>,
  product_id: number | string,
  basketId: number
) => {
  setLoading(true);
  const path = `/api/basketProducts/${basketId}/add?productId=${product_id}`;
  fetch(path, { method: "POST" })
    .finally(() => {
      setLoading(false);
    })
    .catch((error) => {
      setError(true);
    });
};
