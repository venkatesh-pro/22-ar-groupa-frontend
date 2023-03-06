import s from "./Item.styles";

interface Props {
  name: string;
  imageSRC: string;
}

export const Item: React.FC<Props> = ({ name, imageSRC }) => {
  return (
    <div>
      <s.itemContainer to={"/AR"}>
        <s.itemImage src={imageSRC} alt={name}></s.itemImage>
        <s.itemName>{name}</s.itemName>
      </s.itemContainer>
    </div>
  );
};
