import s from "./Basket.styles";
import React, { createContext } from "react";
import { BasketItem } from "../../Components/BasketItem/BasketItem";
import { useGetItems } from "../../Functions/useGetItems";
import { Header } from "../../Components/Header/Header";
import { item } from "../../Components/Item/Item";
import { Loading } from "../../Components/Loading/Loading";
import { Error } from "../../Components/Error/Error";

export const BasketStateContext = createContext<
  React.Dispatch<React.SetStateAction<boolean>>[]
>([]);

export const Basket: React.FC = () => {
  const [loading, error, items, setLoading, setError] = useGetItems({
    selectedOption: "basket",
  });

  const totalAmount = items
    .map((item) => Number(item.product_price))
    .reduce((sum, price) => sum + price, 0);
  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <Error></Error>;
  }

  var uniqueCounts = items.reduce(
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

  console.log(uniqueCounts);
  return (
    <s.basketContainer>
      <Header />
      <BasketStateContext.Provider value={[setLoading, setError]}>
        {totalAmount > 0 ? (
          <s.basketContainer>
            <s.basketHeader>Your Basket!</s.basketHeader>
            {Object.keys(uniqueCounts).map((key) => (
              <BasketItem
                key={key}
                item={uniqueCounts[key].itemG}
                number={uniqueCounts[key].number}
              />
            ))}
            <s.checkout>
              <s.description> Subtotal: £{totalAmount} </s.description>
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
