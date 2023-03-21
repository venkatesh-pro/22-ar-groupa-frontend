import React, { useContext } from "react";
import { item } from "../Item/Item";
import s from "./BasketItem.styles";
import { RiDeleteBin2Line } from "react-icons/ri";

import { BasketStateContext } from "../../Pages/Basket/Basket";

export const BasketItem: React.FC<item> = ({
  product_name,
  imagePath,
  product_price,
  product_id,
}) => {
  const [setLoading, setError] = useContext(BasketStateContext);

  const handleDelete = () => {
    console.log("ADDED TO BASKET");
    setLoading(true);
    fetch(`basket/1/delete?productId=${product_id}`, { method: "DELETE" })
      .finally(() => {
        setLoading(false);
        window.location.reload();
      })
      .catch(() => {
        setError(true);
      });
  };
  return (
    <s.cartItem>
      <s.cartItemImg src={imagePath} />
      <s.itemDescription>
        <s.itemName>{product_name}</s.itemName>
        <s.itemPrice>Price: £{product_price}</s.itemPrice>
      </s.itemDescription>
      <s.deleteButton onClick={handleDelete}>
        <RiDeleteBin2Line size={32} />
      </s.deleteButton>
    </s.cartItem>
  );
};
