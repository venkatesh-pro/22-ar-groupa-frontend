import styled from "styled-components";
import Colour from "../../Colour";

const LoadingSpinner = styled.div`
  border: 16px solid ${Colour.overHeader};
  border-top: 16px solid ${Colour.AR};
  border-radius: 50%;
  width: 90px;
  height: 90px;
  animation: spin 3s linear infinite;
  margin: auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Header = styled.h1`
  text-align: center;
  margin: 60px auto;
`;

const styles = { LoadingSpinner, Header };

export default styles;
