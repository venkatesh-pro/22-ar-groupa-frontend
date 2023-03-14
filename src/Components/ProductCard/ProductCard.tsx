import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../Header/Header";
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
      {product ? (
        <s.productCardContainer>
          <Header />
          <s.productCard>
            <s.itemImage
              src={product.imagePath}
              alt={product.product_name}
            ></s.itemImage>
            <s.itemText>Product name: {product.product_name}</s.itemText>
            <s.itemText>Description: {product.product_desc}</s.itemText>
            <s.itemText>Price: £{product.product_price}</s.itemText>
            <button>Add to basket</button>
            <button>Try AR</button>
          </s.productCard>
        </s.productCardContainer>
      ) : (
        <s.productCardContainer>
          <p>Product not found</p>
        </s.productCardContainer>
      )}
    </div>
  );
};

export default ProductCard;
