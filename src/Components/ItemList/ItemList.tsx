import { item, Item } from "../Item/Item";
import s from "./ItemList.styles";

interface Props {
  items: item[];
  basketId: number;
}

export const ItemList: React.FC<Props> = ({ items, basketId }) => {
  return (
    <s.itemListContainer>
      {items.length > 0 ? (
        items.map((item) => (
          <Item
            key={item.product_name}
            product_name={item.product_name}
            imagePath={item.imagePath}
            product_id={item.product_id}
            product_desc={item.product_desc}
            product_type_id={item.product_type_id}
            threeDModelPath={item.threeDModelPath}
            product_price={item.product_price}
            basketId={basketId}
          />
        ))
      ) : (
        <p>No data</p>
      )}
    </s.itemListContainer>
  );
};
