import React from "react";
import { useParams } from "react-router-dom";
import { CheckoutItem } from "../../Components/BasketItem/CheckoutItem";
import { Loading } from "../../Components/Loading/Loading";
import { Error } from "../../Components/Error/Error";
import s from "./OrderComplete.styles";
import { useGetItems } from "../../Functions/useGetItems";

export const OrderComplete: React.FC = () => {
  const { basketId } = useParams();
  const [loading, error, items] = useGetItems({
    selectedOption: "basket",
  });

  const totalAmount = items
    .map((item) => Number(item.product_price))
    .reduce((sum, price) => sum + price, 0);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <s.orderCompleteContainer>
      <s.text>ORDER COMPLETE!</s.text>
      <s.text>Order Number: {basketId}</s.text>
      {items.map((item) => (
        <CheckoutItem key={item.product_id} item={item} />
      ))}
      <s.text>Total: £{totalAmount}</s.text>
      <s.button to="/">Home</s.button>
    </s.orderCompleteContainer>
  );
};
