import s from "./Basket.styles";
import React, { createContext } from "react";
import { BasketItem } from "../../Components/BasketItem/BasketItem";
import { item } from "../../Components/Item/Item";
import { Loading } from "../../Components/Loading/Loading";
import { Error } from "../../Components/Error/Error";
import { useGetBasketItems } from "../../Functions/useGetBasketItems";
import { UniqueCountsFunc } from "../../Functions/UniqueCountsFunc";
import Footer from "../../Components/Footer/Footer";

interface setStates {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setBasketItems: React.Dispatch<React.SetStateAction<item[]>>;
}

interface Props {
  basketId: number;
}

export const BasketStateContext = createContext<setStates[]>([]);

export const Basket: React.FC<Props> = (props: Props) => {
  const [setLoading, setError, setBasketItems, basketItems, loading, error] =
    useGetBasketItems(props.basketId);
  const uniqueCounts = UniqueCountsFunc(basketItems);

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
                basketId={props.basketId}
              />
            ))}
            <s.checkout>
              <s.description>
                Subtotal: £{Math.round(totalAmount * 100) / 100}
              </s.description>
              <s.checkoutButton to={"/complete"} aria-label="Complete Order">
                Complete Order
              </s.checkoutButton>
              <s.checkoutButton to="/" aria-label="Continue Shopping">
                Continue Shopping
              </s.checkoutButton>
            </s.checkout>
          </s.basketContainer>
        ) : (
          <s.basketHeader> Your Shopping Basket is Empty!</s.basketHeader>
        )}
      </BasketStateContext.Provider>
      <Footer />
    </s.basketContainer>
  );
};
