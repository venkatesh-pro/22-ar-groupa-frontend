import s from "./Error.styles";
import { Header } from "../Header/Header";
import errorImage from "./emptyroom.png";

export const Error: React.FC = () => {
  return (
    <div>
      <Header />
      <s.Header> Furniture not found :( </s.Header>
      <s.ErrorImage src={errorImage} alt="room" />
    </div>
  );
};
