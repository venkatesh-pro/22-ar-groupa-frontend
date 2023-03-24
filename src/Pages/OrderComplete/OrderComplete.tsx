import React from "react";
import { useParams } from "react-router-dom";
import { CheckoutItem } from "../../Components/BasketItem/CheckoutItem";
import { Loading } from "../../Components/Loading/Loading";
import { Error } from "../../Components/Error/Error";
import s from "./OrderComplete.styles";
import { useGetBasketItems } from "../../Functions/useGetBasketItems";
import { UniqueCountsFunc } from "../../Functions/UniqueCountsFunc";

export const OrderComplete: React.FC = () => {
  const { basketId } = useParams();
  const [setLoading, setError, setBasketItems, basketItems, loading, error] =
    useGetBasketItems("1");

  const path = `api/basket/${basketId}/completed`;
  fetch(path, { method: "PUT" })
    .then((response) => {
      console.log(response);
    })
    .finally(() => {})
    .catch((error) => {
      console.log(error);
    });

  const totalAmount = basketItems
    .map((item) => Number(item.product_price))
    .reduce((sum, price) => sum + price, 0);

  const uniqueCounts = UniqueCountsFunc(basketItems);

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
      {Object.keys(uniqueCounts).map((key) => (
        <CheckoutItem
          key={uniqueCounts[key].itemG.product_id}
          item={uniqueCounts[key].itemG}
          number={uniqueCounts[key].number}
        />
      ))}
      <s.text>Total: £{Math.round(totalAmount * 100) / 100}</s.text>
      <s.button to="/">Home</s.button>
    </s.orderCompleteContainer>
  );
};
