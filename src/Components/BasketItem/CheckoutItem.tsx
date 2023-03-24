import React from "react";
import { item } from "../Item/Item";
import s from "./BasketItem.styles";

interface props {
  item: item;
  number: number;
}

export const CheckoutItem: React.FC<props> = ({ item, number }) => {
  return (
    <s.cartItem>
      <s.cartItemImg src={item.imagePath} />
      <s.itemDescription>
        <s.itemName>{item.product_name}</s.itemName>
        <s.itemPrice>Quantity: {number}</s.itemPrice>
        <s.itemPrice>Price: £{item.product_price}</s.itemPrice>
      </s.itemDescription>
    </s.cartItem>
  );
};
