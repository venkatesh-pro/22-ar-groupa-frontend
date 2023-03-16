import { item, Item } from "../Item/Item";
import s from "./ItemList.styles";

interface Props {
  items: item[];
}

export const ItemList: React.FC<Props> = ({ items }) => {
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
          />
        ))
      ) : (
        <p>No data</p>
      )}
    </s.itemListContainer>
  );
};
