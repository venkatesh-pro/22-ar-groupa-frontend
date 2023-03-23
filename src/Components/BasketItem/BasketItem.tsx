import React, { useContext } from "react";
import { item } from "../Item/Item";
import s from "./BasketItem.styles";
import { RiDeleteBin2Line } from "react-icons/ri";

import { AddToBasket } from "../../Functions/AddToBasket";
import { BasketStateContext } from "../../Pages/Basket/Basket";

interface props {
  basketItems: item[];
  item: item;
  number: number;
  setCounts: React.Dispatch<
    React.SetStateAction<{
      [productId: string]: { number: number; itemG: item };
    }>
  >;
}

export const BasketItem: React.FC<props> = ({
  basketItems,
  item,
  number,
  setCounts,
}) => {
  console.log("Basket Item");

  const uniqueCountsFunc = (basketItems: item[]) => {
    return basketItems.reduce(
      (
        uniqueCounts: { [productId: string]: { number: number; itemG: item } },
        item: item
      ) => {
        uniqueCounts[item.product_id] = {
          number: (uniqueCounts[item.product_id]?.number || 0) + 1,
          itemG: uniqueCounts[item.product_id]?.itemG || item,
        };
        return uniqueCounts;
      },
      {}
    );
  };

  const [states] = useContext(BasketStateContext);

  const onDelete = (productId: number, basketItems: item[]): item[] => {
    const updatedBasketItems = basketItems.filter(
      (basketItem) => basketItem.product_id !== productId
    );
    return updatedBasketItems;
  };

  const onSingleDelete = (productId: number, basketItems: item[]) => {
    const updatedBasketItems: item[] = basketItems.reduce(
      (updatedBasketItems: item[], basketItem: item) => {
        var count = 0;
        if (basketItem.product_id !== productId) {
          updatedBasketItems.push(basketItem);
        } else if (basketItem.product_id === productId && count === 1) {
        } else {
          count++;
          updatedBasketItems.push(basketItem);
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
        setCounts(uniqueCountsFunc(updatedBasket));
      })
      .catch(() => {
        states.setError(true);
      });
  };

  const handleAdd = () => {
    if (!(item.product_id === undefined)) {
      AddToBasket(states.setLoading, states.setError, item.product_id);
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
