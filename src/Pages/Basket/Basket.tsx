import s from "./Basket.styles";
import React, { createContext, useContext, useEffect, useState } from "react";
import { BasketItem } from "../../Components/BasketItem/BasketItem";
import { item } from "../../Components/Item/Item";
import { Loading } from "../../Components/Loading/Loading";
import { Error } from "../../Components/Error/Error";
import { useGetBasketItems } from "../../Functions/useGetBasketItems";

interface setStates {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setBasketItems: React.Dispatch<React.SetStateAction<item[]>>;
}

export const BasketStateContext = createContext<setStates[]>([]);

export const Basket: React.FC = () => {
  const [basketId, setBasketId] = useState("1");

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

  const [setLoading, setError, setBasketItems, basketItems, loading, error] =
    useGetBasketItems(basketId);

  const uniqueCounts = uniqueCountsFunc(basketItems);

  const [counts, setCounts] = useState(uniqueCounts);

  console.log(uniqueCounts);
  const handleBasketFinished = () => {
    console.log("basket finished");
  };

  const totalAmount = basketItems
    .map((item) => Number(item.product_price))
    .reduce((sum, price) => sum + price, 0);

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <Error></Error>;
  }

  return (
    <s.basketContainer>
      <BasketStateContext.Provider
        value={[
          {
            setLoading: setLoading,
            setError: setError,
            setBasketItems: setBasketItems,
          },
        ]}
      >
        {totalAmount > 0 ? (
          <s.basketContainer>
            <s.basketHeader>Your Basket!</s.basketHeader>
            {Object.keys(uniqueCounts).map((key) => (
              <BasketItem
                key={key}
                item={uniqueCounts[key].itemG}
                number={uniqueCounts[key].number}
                basketItems={basketItems}
                setCounts={setCounts}
              />
            ))}
            <s.checkout>
              <s.description>
                Subtotal: £{Math.round(totalAmount * 100) / 100}
              </s.description>
              <s.checkoutButton
                to={`/order/${1}/complete`}
                onClick={handleBasketFinished}
              >
                Complete Order
              </s.checkoutButton>
              <s.checkoutButton to="/">Continue Shopping</s.checkoutButton>
            </s.checkout>
          </s.basketContainer>
        ) : (
          <s.basketHeader> Your Shopping Basket is Empty!</s.basketHeader>
        )}
      </BasketStateContext.Provider>
    </s.basketContainer>
  );
};
