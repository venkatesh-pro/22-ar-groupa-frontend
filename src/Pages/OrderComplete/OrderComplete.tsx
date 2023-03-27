import React, { useEffect } from "react";

import { CheckoutItem } from "../../Components/BasketItem/CheckoutItem";
import { Loading } from "../../Components/Loading/Loading";
import { Error } from "../../Components/Error/Error";
import s from "./OrderComplete.styles";
import { useGetBasketItems } from "../../Functions/useGetBasketItems";
import { UniqueCountsFunc } from "../../Functions/UniqueCountsFunc";

interface Props {
  basketId: number;
  setBasketId: React.Dispatch<React.SetStateAction<number>>;
}

export const OrderComplete: React.FC<Props> = ({ basketId, setBasketId }) => {
  const [setLoading, setError, , basketItems, loading, error] =
    useGetBasketItems(basketId);

  useEffect(() => {
    const path = `/api/basket/${basketId}/completed`;
    setLoading(true);
    fetch(path, { method: "PUT" })
      .then((response) => {
        console.log(response);
      })
      .finally(() => {
        setLoading(false);
        fetch(`/api/basket/${basketId}/getBasketId`, {
          method: "Get",
        })
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            setBasketId(response);
          });
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  }, []);

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
      <s.header>ORDER COMPLETE!</s.header>
      <s.text>Order Number: {basketId}</s.text>
      <s.itemContainer>
        {Object.keys(uniqueCounts).map((key) => (
          <CheckoutItem
            key={uniqueCounts[key].itemG.product_id}
            item={uniqueCounts[key].itemG}
            number={uniqueCounts[key].number}
          />
        ))}
      </s.itemContainer>
      <s.text>Total: £{Math.round(totalAmount * 100) / 100}</s.text>
      <s.button to="/">Home</s.button>
    </s.orderCompleteContainer>
  );
};
