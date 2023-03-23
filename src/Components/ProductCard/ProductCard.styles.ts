import { Link } from "react-router-dom";
import styled from "styled-components";

const productCardContainer = styled.div``;

const div_ProductCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 700px;
  /* min-width: 610px; */
  margin: 30px auto;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  /* border-radius: 25px; */
  /* border: 1px solid black; */

  @media screen and (max-width: 615px) {
    flex-direction: column;
    max-width: 300px;
    min-width: 300px;
  }
`;

const div_Gallery = styled.div`
  display: flex;
  flex-direction: column;
  /* min-width: 400px; */
  /* max-width: 600px; */

  @media screen and (max-width: 615px) {
    flex-direction: column;
    min-width: 300px;
    max-width: 400px;
  }
`;

const img_Big = styled.img`
  margin: 10px;
  /* border: 1px solid black; */
  /* border-radius: 20px; */
`;

const div_Details1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 100%;
  /* border: 1px solid yellow; */
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
  /* border: 1px solid yellow; */
`;

const div_Product_Name = styled.div`
  padding-top: 10px;
  text-align: left;
  font-size: 35px;
  width: 100%;
  /* border: 1px solid aqua; */
`;

const div_Product_Description = styled.div`
  width: 100%;
  padding-top: 10px;
  text-align: left;
  font-size: 25px;
  /* border: 1px solid aqua; */
`;

const div_Buttons = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: flex-start;
  /* border: 1px solid red; */
`;

const button_AddToBasket = styled.button`
  color: white;
  background-color: black;
  border: 2px solid black;
  max-width: 200px;
  padding: 5px 10px;
  /* margin-bottom: 25px; */
  font-size: 20px;
  /* border-radius: 15px; */
  margin: 10px 0px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
  @media screen and (max-width: 615px) {
    margin-bottom: 0px;
  }
`;

const button_TryAR = styled(Link)`
  text-decoration: none;
  background-color: turquoise;
  /* border: 2px solid black; */
  /* width: 45px; */

  padding: 5px 10px;
  /* border-radius: 15px; */
  margin: 10px 0px;
  font-size: 20px;
  font-weight: bold;
  color: white;
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
