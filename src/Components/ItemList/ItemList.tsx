import { Item } from "../Item/Item";
import tablePic from "../../table.jpg";
import s from "./ItemList.styles";

export const ItemList: React.FC = () => {
  return (
    <s.itemListContainer>
      <Item name={"table 1"} imageSRC={tablePic} />
      <Item name={"table 2"} imageSRC={tablePic} />
      <Item name={"table 3"} imageSRC={tablePic} />
      <Item name={"table 4"} imageSRC={tablePic} />
    </s.itemListContainer>
  );
};
