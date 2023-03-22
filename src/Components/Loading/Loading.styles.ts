import styled from "styled-components";

const LoadingSpinner = styled.div`
  border: 16px solid #e4cbc6; /* Light grey */
  border-top: 16px solid #ad381f; /* Blue */
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
