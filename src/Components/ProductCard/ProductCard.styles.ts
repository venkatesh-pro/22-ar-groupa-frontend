import styled from "styled-components";
import { Link } from "react-router-dom";

const productCardContainer = styled.div``;

const div_ProductCard = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  margin: 50px auto;
  border: 1px solid black;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
`;

const div_Gallery = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  border: 1px solid red;
`;

const img_Big = styled.img`
  margin: 10px;
  border-radius: 20px;
`;

const div_Thumbnails = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;
`;

const img_Small = styled.img`
  max-width: 140px;
  margin: 0px 10px;
  border-radius: 10px;
`;

const div_Details = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  margin-left: 10px;
  border: 1px solid green;
`;

const div_Product_Name = styled.div`
  padding-top: 10px;
  text-align: left;
  font-size: 35px;
`;

const div_Product_Description = styled.div`
  padding-top: 10px;
  text-align: left;
  font-size: 25px;
`;

const div_Buttons = styled.div`
  border: 1px solid lightblue;
`;

const button_AddToBasket = styled.button`
  margin-top: 10px;
  color: pink;
`;

const button_TryAR = styled(Link)`
  color: yellow;
`;

const button_GoBack = styled.button`
  color: red;
`;

const styles = {
  productCardContainer,
  div_ProductCard,
  div_Gallery,
  img_Big,
  div_Thumbnails,
  img_Small,
  div_Details,
  div_Product_Name,
  div_Product_Description,
  div_Buttons,
  button_AddToBasket,
  button_TryAR,
  button_GoBack,
};

export default styles;
