import React from "react";
import { item } from "../Item/Item";
import s from "./BasketItem.styles";

interface props {
  item: item;
}

export const CheckoutItem: React.FC<props> = ({ item }) => {
  return (
    <s.cartItem>
      <s.cartItemImg src={item.imagePath} />
      <s.itemDescription>
        <s.itemName>{item.product_name}</s.itemName>
        <s.itemPrice>Price: £{item.product_price}</s.itemPrice>
      </s.itemDescription>
    </s.cartItem>
  );
};
