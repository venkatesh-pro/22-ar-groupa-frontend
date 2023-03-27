import { Link } from "react-router-dom";
import styled from "styled-components";
import Colour from "../../Colour";

const productCardContainer = styled.div``;

const div_ProductCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 700px;
  margin: 30px auto;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 615px) {
    flex-direction: column;
    max-width: 300px;
    min-width: 300px;
  }
`;

const div_Gallery = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 615px) {
    flex-direction: column;
    min-width: 300px;
    max-width: 400px;
  }
`;

const img_Big = styled.img`
  margin: 10px;
`;

const div_Details1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 100%;
`;

const div_Details2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 10%;
  @media screen and (max-width: 615px) {
    width: 100%;
    margin-left: 0;
  }
`;

const div_Product_Name = styled.div`
  padding-top: 10px;
  text-align: left;
  font-size: 35px;
  width: 100%;
`;

const div_Product_Description = styled.div`
  width: 100%;
  padding-top: 10px;
  text-align: left;
  font-size: 25px;
`;

const div_Buttons = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: flex-start;
`;

const button_AddToBasket = styled.button`
  color: white;
  background-color: black;
  max-width: 200px;
  padding: 5px 10px;
  font-size: 20px;
  margin: 10px 0px;
  font-weight: bold;
  border: solid black;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
  @media screen and (max-width: 615px) {
    margin-bottom: 0px;
  }
`;

const button_TryAR = styled(Link)`
  text-decoration: none;
  background-color: ${Colour.AR};
  padding: 5px 10px;
  margin: 10px 0px;
  font-size: 20px;
  font-weight: bold;
  color: black;
  &:hover {
    background-color: red;
    color: black;
  }
  &:visited {
    color: none;
  }
`;

const button_GoBack = styled.button`
  margin-top: 10px;
  margin-right: 10px;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  color: white;
  border: 0.5px solid transparent;
  border-radius: 50%;
  background-color: black;
  cursor: pointer;
  &:visited {
    color: white;
  }
  &:hover {
    background-color: white;
    color: black;
  }

  @media screen and (max-width: 615px) {
    margin-bottom: 10px;
    margin-right: 10px;
    margin-top: 0px;
    flex-direction: column;
  }
`;

const styles = {
  productCardContainer,
  div_ProductCard,
  div_Gallery,
  img_Big,
  div_Details1,
  div_Details2,
  div_Product_Name,
  div_Product_Description,
  div_Buttons,
  button_AddToBasket,
  button_TryAR,
  button_GoBack,
};

export default styles;
