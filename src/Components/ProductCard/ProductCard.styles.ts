import styled from "styled-components";

const productCardContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  // margin: 0px;
`;

const productCard = styled.div`
  // display: flex;
  margin: 30px 200px;
  border: 1px solid black;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
`;

const itemImage = styled.img`
  display: flex;
  width: 30%;
  height: 40%;
  margin: 10px;
  margin-top: 10px;
  border-radius: 5%;
`;

const itemText = styled.div`
  display: flex;
  padding-top: 10px;
  align-items: right;
  text-align: center;
  font-size: 20px;
`;

const itemPrice = styled.div``;

const styles = {
  productCardContainer,
  productCard,
  itemText,
  itemImage,
  itemPrice,
};

export default styles;
