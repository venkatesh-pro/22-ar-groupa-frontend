import { Header } from "../Header/Header";
import s from "./Message.styles";

interface Props {
  text: string;
}

export const Message: React.FC<Props> = ({ text }) => {
  return (
    <s.loadingContainer>
      <Header />
      <s.loadingheader>{text}</s.loadingheader>
    </s.loadingContainer>
  );
};
