import { Link } from "react-router-dom";

import styled from "styled-components";

const itemText = styled.div`
  display: flex;
  padding-top: 10px;
  align-items: right;
  text-align: center;
`;

const itemLink = styled(Link)`
  text-decoration: none;
  /* border-radius: 15px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 4px solid white;
  border-bottom: 4px solid white;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  height: 80%;
  width: 100%;
  color: black;

  &:visited {
    color: black;
  }
  &:hover {
    background-color: lightgrey;
    transition: 0.2s ease-in;
    color: white;
    /* border: 4px solid black; */
  }
`;

const itemContainer = styled.div`
  /* border: 4px solid black; */
  /* border-radius: 15px; */
  width: 90vw;
  /* height: 350px; */
  height: 600px;
  max-width: 450px;
  margin: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
`;

const itemImage = styled.img`
  display: flex;
  /* width: 95%; */
  max-height: 400px;
  /* height: 80%; */
  margin: 5px;
  /* margin-top: 5px; */
  align-items: center;
  align-content: center;
  /* border-radius: 5%; */
`;

const itemPrice = styled.div`
`;

const addToBasketButton = styled.button`
  background-color: black;
  color: white;
  border: 2px solid rgb(19, 19, 19);
  min-width: 100px;
  padding: 5px 10px;
  /* border-radius: 15px; */
  margin-top: 10px;
  font-weight: bold;
  font-size: larger;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const styles = {
  itemText,
  itemContainer,
  itemImage,
  itemPrice,
  addToBasketButton,
  itemLink,
};

export default styles;
