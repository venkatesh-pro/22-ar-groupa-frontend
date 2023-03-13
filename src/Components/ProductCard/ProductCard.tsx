import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductCard = () => {
  const { id } = useParams();

  //   const useGetItemById = (): any => {
  useEffect(() => {
    fetch(`/api/products/${id}`, {
      method: "GET",
    })
      .then((response) => {
        console.log(response.status);
        console.log(response);
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>This is product card TITLE</h1>
      Id: {id}
      {/* {product_name} */}
    </div>
  );
};

export default ProductCard;
