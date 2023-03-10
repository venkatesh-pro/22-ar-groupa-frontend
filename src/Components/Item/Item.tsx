import s from "./Item.styles";

export interface item {
  product_id: number;
  product_name: string;
  product_desc: string;
  product_type_id: number;
  imagePath: string;
  threeDModelPath: string;
}

export const Item: React.FC<item> = ({ product_name, imagePath }) => {
  return (
    <div>
      <s.itemContainer to={"/AR"}>
        <s.itemImage src={imagePath} alt={product_name}></s.itemImage>
        <s.itemName>{product_name}</s.itemName>
      </s.itemContainer>
    </div>
  );
};
