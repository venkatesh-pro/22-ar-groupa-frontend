import React from "react";
import { item } from "../Item/Item";
import s from "./BasketItem.styles";
import { RiDeleteBin2Line } from "react-icons/ri";

interface props {
  item: item;
  number: number;
}

export const BasketItem: React.FC<props> = ({ item, number }) => {
  return (
    <s.cartItem>
      <s.cartItemImg src={item.imagePath} />
      <s.itemDescription>
        <s.itemName>{item.product_name}</s.itemName>
        <s.itemPrice>Price: £{item.product_price}</s.itemPrice>
        <p> number : {number}</p>
      </s.itemDescription>
      <s.deleteButton>
        <RiDeleteBin2Line size={32} />
      </s.deleteButton>
    </s.cartItem>
  );
};
