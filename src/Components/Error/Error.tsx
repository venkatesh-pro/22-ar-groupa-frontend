import s from "./Error.styles";
import { Header } from "../Header/Header";
import errorImage from "./emptyroom.png";

export const Error: React.FC = () => {
  return (
    <div>
      <s.div_ErrorPageContainer>
        <s.Header> Furniture not found :( </s.Header>
        <s.div_ImageContainer>
          <s.ErrorImage src={errorImage} alt="room" />
        </s.div_ImageContainer>
      </s.div_ErrorPageContainer>
    </div>
  );
};
