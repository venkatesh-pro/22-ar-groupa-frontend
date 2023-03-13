import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { item } from "../Item/Item";
import s from "./ProductCard.styles";

// const ProductCard: React.FC<item> = ({
//   product_name,
//   imagePath,
//   product_desc,
//   product_id,
// }) => {

const ProductCard: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<item | null>(null);

  useEffect(() => {
    fetch(`/api/products/${id}`, {
      method: "GET",
    })
      .then((response) => {
        console.log(response.text);
        return response.json();
      })
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      Id: {id}
      {product ? (
        <div>
          <s.itemImage
            src={product.imagePath}
            alt={product.product_name}
          ></s.itemImage>
          <s.itemText>Product name: {product.product_name}</s.itemText>
          <s.itemText>Description: {product.product_desc}</s.itemText>

          {/* <p>Price: {product.product_price}</p> */}
          <button>Add to basket</button>
          <button>Try AR</button>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductCard;
