import { Link } from "react-router-dom";
import styled from "styled-components";

const basketContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 0px;
`;

const basketHeader = styled.h1``;

const checkoutButton = styled(Link)`
  display: flex;
  width: 250px;
  height: 50px;
  background-color: rgb(19, 19, 19);
  color: white;
  border: none;
  border-radius: 8px;
  margin: 10px;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 25px;
`;

const checkout = styled.div``;

const description = styled.p`
  font-size: 30px;
`;

const styles = {
  basketContainer,
  basketHeader,
  checkout,
  description,
  checkoutButton,
};

export default styles;
