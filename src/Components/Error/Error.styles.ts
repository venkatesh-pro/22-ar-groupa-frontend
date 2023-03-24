import styled from "styled-components";

const div_ErrorPageContainer = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  border-radius: 1px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  width: 700px;

  @media screen and (max-width: 715px) {
    width: 500px;
  }
  @media screen and (max-width: 530px) {
    width: 300px;
  }
`;

const Header = styled.h1`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 530px) {
    font-size: 1rem;
  }
`;

const div_ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const ErrorImage = styled.img`
  margin-bottom: 50px;
  width: 600px;
  border-radius: 25px;

  @media screen and (max-width: 715px) {
    width: 400px;
  }

  @media screen and (max-width: 530px) {
    width: 250px;
    margin-bottom: 25px;
  }
`;
const styles = {
  div_ErrorPageContainer,
  div_ImageContainer,
  ErrorImage,
  Header,
};

export default styles;
