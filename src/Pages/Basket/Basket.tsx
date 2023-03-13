import s from "./Basket.styles";
import React from "react";
import { BasketItem } from "../../Components/BasketItem/BasketItem";
import { useGetItems } from "../../Functions/useGetItems";
import { Message } from "../../Components/Message/Message";
import { Header } from "../../Components/Header/Header";

export const Basket: React.FC = () => {
  const [loading, error, items] = useGetItems({
    selectedOption: "basket",
  });

  const totalAmount = items
    .map((item) => Number(item.product_price))
    .reduce((sum, price) => sum + price, 0);
  if (loading) {
    return <Message text="Loading" />;
  }

  if (error) {
    return <Message text="Error" />;
  }
  return (
    <s.basketContainer>
      <Header />
      <s.basketHeader>Basket</s.basketHeader>
      {items.map((item) => (
        <BasketItem
          key={item.product_name}
          product_name={item.product_name}
          imagePath={item.imagePath}
          product_id={item.product_id}
          product_desc={item.product_desc}
          product_type_id={item.product_type_id}
          threeDModelPath={item.threeDModelPath}
          product_price={item.product_price}
        />
      ))}{" "}
      {totalAmount > 0 ? (
        <s.checkout>
          <s.description> Subtotal: £{totalAmount} </s.description>
          <s.checkoutButton to="/">Continue Shopping</s.checkoutButton>
        </s.checkout>
      ) : (
        <s.basketHeader> Your Shopping Basket is Empty</s.basketHeader>
      )}
    </s.basketContainer>
  );
};
