import React, { useContext } from "react";
import { item } from "../Item/Item";
import s from "./BasketItem.styles";
import { RiDeleteBin2Line } from "react-icons/ri";

import { AddToBasket } from "../../Functions/AddToBasket";
import { BasketStateContext } from "../../Pages/Basket/Basket";
import { UniqueCountsFunc } from "../../Functions/UniqueCountsFunc";

interface props {
  basketItems: item[];
  item: item;
  number: number;
}

export const BasketItem: React.FC<props> = ({ basketItems, item, number }) => {
  console.log("Basket Item");

  const [states] = useContext(BasketStateContext);

  const onDelete = (productId: number, basketItems: item[]): item[] => {
    const updatedBasketItems = basketItems.filter(
      (basketItem) => basketItem.product_id !== productId
    );
    return updatedBasketItems;
  };

  const onSingleDelete = (productId: number, basketItems: item[]) => {
    var count = 0;
    const updatedBasketItems: item[] = basketItems.reduce(
      (updatedBasketItems: item[], basketItem: item) => {
        if (basketItem.product_id !== productId) {
          updatedBasketItems.push(basketItem);
        } else if (basketItem.product_id === productId && count === 1) {
          updatedBasketItems.push(basketItem);
        } else {
          count++;
        }
        return updatedBasketItems;
      },
      []
    );
    return updatedBasketItems;
  };

  const handleDelete = () => {
    console.log("ADDED TO BASKET");
    states.setLoading(true);
    fetch(`basketProducts/1/delete?productId=${item.product_id}`, {
      method: "DELETE",
    })
      .finally(() => {
        states.setLoading(false);
        states.setBasketItems(onDelete(item.product_id, basketItems));
      })
      .catch(() => {
        states.setError(true);
      });
  };

  const handleSingleDelete = () => {
    console.log("ADDED TO BASKET");
    states.setLoading(true);
    fetch(`api/basketProducts/1/single/delete?productId=${item.product_id}`, {
      method: "DELETE",
    })
      .finally(() => {
        states.setLoading(false);
        const updatedBasket = onSingleDelete(item.product_id, basketItems);
        states.setBasketItems(updatedBasket);
      })
      .catch(() => {
        states.setError(true);
      });
  };

  const handleAdd = () => {
    if (!(item.product_id === undefined)) {
      AddToBasket(states.setLoading, states.setError, item.product_id);
      const newItem = item;
      const updatedBasket = [...basketItems, newItem];
      states.setBasketItems(updatedBasket);
    }
  };
  return (
    <s.cartItem>
      <s.cartItemImg src={item.imagePath} />
      <s.itemDescription>
        <s.itemName>{item.product_name}</s.itemName>
        <s.itemPrice>Price: £{item.product_price}</s.itemPrice>
        <s.incrementContainer>
          <s.incrementButton onClick={handleSingleDelete}>
            {" "}
            -{" "}
          </s.incrementButton>
          <s.itemPrice> Quantity : {number}</s.itemPrice>
          <s.incrementButton onClick={handleAdd}> + </s.incrementButton>
        </s.incrementContainer>
      </s.itemDescription>
      <s.deleteButton onClick={handleDelete}>
        <RiDeleteBin2Line size={32} />
      </s.deleteButton>
    </s.cartItem>
  );
};
