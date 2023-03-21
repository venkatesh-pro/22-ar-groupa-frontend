import s from "./Basket.styles";
import React, { createContext } from "react";
import { BasketItem } from "../../Components/BasketItem/BasketItem";
import { useGetItems } from "../../Functions/useGetItems";
import { Message } from "../../Components/Message/Message";
import { Header } from "../../Components/Header/Header";

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
    return <Message text="Loading" />;
  }

  if (error) {
    return <Message text="Error" />;
  }
  return (
    <s.basketContainer>
      <Header />
      <BasketStateContext.Provider value={[setLoading, setError]}>
        {totalAmount > 0 ? (
          <s.basketContainer>
            <s.basketHeader>Your Basket!</s.basketHeader>

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
