import { useContext } from "react";
import { AddToBasket } from "../../Functions/AddToBasket";
import { AppStateContext } from "../../Pages/App/App";
import s from "./Item.styles";

export interface item {
  product_id: number;
  product_name: string;
  product_desc: string;
  product_type_id: number;
  imagePath: string;
  threeDModelPath: string;
  product_price: string | undefined;
}

export const Item: React.FC<item> = ({
  product_name,
  imagePath,
  product_desc,
  product_id,
  product_price,
  threeDModelPath,
}) => {
  const [setLoading, setError] = useContext(AppStateContext);

  const handleAddToBasket = () => {
    AddToBasket(setLoading, setError, product_id);
  };

  return (
    <s.itemContainer>
      <s.itemLink to={`/product/${product_id}`} state={threeDModelPath}>
        <s.itemImage src={imagePath} alt={product_name}></s.itemImage>
        <s.itemText>{product_name}</s.itemText>
        <s.itemText>£ {product_price}</s.itemText>
      </s.itemLink>
      <s.addToBasketButton onClick={handleAddToBasket}>
        Add To Basket
      </s.addToBasketButton>
    </s.itemContainer>
  );
};
