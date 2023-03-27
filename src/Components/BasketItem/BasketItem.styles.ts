import styled from "styled-components";

const cartItem = styled.div`
  max-width: 700px;
  min-width: 300px;
  height: 250px;
  display: flex;
  align-items: center;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  margin: 30px;
  @media screen and (min-width: 700px) {
    width: 600px;
  }

  @media screen and (max-width: 500px) {
    height: 200px;
  }
`;

const cartItemImg = styled.img`
  width: 200px;
  margin-left: 20px;
  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

const itemDescription = styled.div`
  width: 100%;
  font-size: 30px;
  margin-left: 20px;
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;
const itemName = styled.p``;

const itemPrice = styled.p``;

const deleteButton = styled.button`
  margin-right: 20px;
  width: 50px;
  height: 50px;
  padding: none;
  text-decoration: none;
  border: none;
  color: black;
  background-color: white;

  &:hover {
    color: white;
    background-color: black;
  }
  &:active {
    background-color: red;
    color: black;
  }
`;

const incrementButton = styled.button`
  margin-right: auto;
  margin: auto;
  width: 40px;
  height: 40px;
  padding: none;
  text-decoration: none;
  align-items: center;
  font-size: 16px;
  border: solid;
  color: black;
  background-color: white;

  &:hover {
    color: white;
    background-color: black;
  }
  &:active {
    background-color: red;
    color: black;
  }
`;

const incrementContainer = styled.div`
  display: flex;
`;

const styles = {
  cartItem,
  cartItemImg,
  itemDescription,
  itemName,
  itemPrice,
  deleteButton,
  incrementButton,
  incrementContainer,
};

export default styles;
