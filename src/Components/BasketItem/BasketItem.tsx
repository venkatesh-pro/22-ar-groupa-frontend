import React, { useContext } from "react";
import { item } from "../Item/Item";
import s from "./BasketItem.styles";
import { RiDeleteBin2Line } from "react-icons/ri";
import { BasketStateContext } from "../../Pages/Basket/Basket";
import { AddToBasket } from "../../Functions/AddToBasket";

interface props {
  item: item;
  number: number;
}

export const BasketItem: React.FC<props> = ({ item, number }) => {
  const [setLoading, setError] = useContext(BasketStateContext);

  const handleDelete = () => {
    console.log("ADDED TO BASKET");
    setLoading(true);
    fetch(`basket/1/delete?productId=${item.product_id}`, { method: "DELETE" })
      .finally(() => {
        setLoading(false);
        window.location.reload();
      })
      .catch(() => {
        setError(true);
      });
  };

  const handleSingleDelete = () => {
    console.log("ADDED TO BASKET");
    setLoading(true);
    fetch(`basket/1/single/delete?productId=${item.product_id}`, {
      method: "DELETE",
    })
      .finally(() => {
        setLoading(false);
        window.location.reload();
      })
      .catch(() => {
        setError(true);
      });
  };

  const handleAdd = () => {
    if (!(item.product_id === undefined)) {
      AddToBasket(setLoading, setError, item.product_id);
      window.location.reload();
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
