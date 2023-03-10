import { Link } from "react-router-dom";

import styled from "styled-components";

const itemText = styled.div`
  display: flex;
  padding-top: 10px;
  align-items: right;
  text-align: center;
`;

const itemContainer = styled(Link)`
  border: 1px solid black;
  border-radius: 15px;
  width: 300px;
  height: 350px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  &:hover {
    background-color: pink;
    transition: 0.2s ease-in;
    cursor: pointer;
  }
  &:visited {
    color: black;
  }
`;

const itemImage = styled.img`
  display: flex;
  width: 80%;
  height: 50%;
  margin: 10px;
  margin-top: 10px;
  align-items: center;
  align-content: center;
  border-radius: 5%;
`;

const itemPrice = styled.div``;

const styles = {
  itemText,
  itemContainer,
  itemImage,
  itemPrice,
};

export default styles;
