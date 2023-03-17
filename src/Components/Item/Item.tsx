import s from "./Item.styles";

export interface item {
  product_id: number;
  product_name: string;
  product_desc: string;
  product_type_id: number;
  imagePath: string;
  threeDModelPath: string;
}

export const Item: React.FC<item> = ({
  product_name,
  imagePath,
  product_desc,
  threeDModelPath,
}) => {
  return (
    <s.itemContainer to="/AR" state={threeDModelPath}>
      <s.itemImage src={imagePath} alt={product_name}></s.itemImage>
      <s.itemText>{product_name}</s.itemText>
      <s.itemText>{product_desc}</s.itemText>
    </s.itemContainer>
  );
};
