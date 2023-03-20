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
  border: solid;
  border-radius: 8px;
  margin: 10px;
  border-width: 3px;
  border-color: black;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 25px;
  &:active {
    background-color: red;
    color: black;
    border-color: red;
  }
  &:hover {
    background-color: white;
    color: black;
    border-color: black;
  }
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
