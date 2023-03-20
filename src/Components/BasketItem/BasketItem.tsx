import React from "react";
import { item } from "../Item/Item";
import s from "./BasketItem.styles";
import { RiDeleteBin2Line } from "react-icons/ri";

export const BasketItem: React.FC<item> = ({
  product_name,
  imagePath,
  product_price,
}) => {
  return (
    <s.cartItem>
      <s.cartItemImg src={imagePath} />
      <s.itemDescription>
        <s.itemName>{product_name}</s.itemName>
        <s.itemPrice>Price: £{product_price}</s.itemPrice>
      </s.itemDescription>
      <s.deleteButton>
        <RiDeleteBin2Line size={32} />
      </s.deleteButton>
    </s.cartItem>
  );
};
