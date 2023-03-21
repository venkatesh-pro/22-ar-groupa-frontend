import { Link } from "react-router-dom";
import styled from "styled-components";

const productCardContainer = styled.div``;

const div_ProductCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 700px;
  min-width: 610px;
  margin: 50px auto;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  border: 1px solid black;
`;

const div_Gallery = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  max-width: 500px;
  border: 1px solid red;
`;

const img_Big = styled.img`
  margin: 10px;
  border-radius: 20px;
`;

// const div_Thumbnails = styled.div`
//   display: flex;
//   flex-direction: row;
//   margin-bottom: 10px;
//   justify-content: space-between;
// `;

// const img_Small = styled.img`
//   max-width: 140px;
//   margin: 0px 10px;
//   border-radius: 10px;
// `;

const div_Details1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  border: 1px solid yellow;
  width: 100%;
`;

const div_Details2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  border: 1px solid yellow;
  width: 10%;
`;

const div_Product_Name = styled.div`
  padding-top: 10px;
  text-align: left;
  font-size: 35px;
  border: 1px solid aqua;
  width: 100%;
`;

const div_Product_Description = styled.div`
  width: 100%;
  padding-top: 10px;
  text-align: left;
  font-size: 25px;
  border: 1px solid aqua;
`;

const div_Buttons = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px solid red;
`;

const button_AddToBasket = styled.button`
  background-color: transparent;
  border: 2px solid black;
  max-width: 115px;
  padding: 5px 10px;
  margin-bottom: 10px;
  border-radius: 15px;
  margin-top: 10px;
  font-weight: bold;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const button_TryAR = styled(Link)`
  text-decoration: none;
  background-color: lightpink;
  border: 2px solid black;
  width: 45px;

  padding: 5px 10px;
  border-radius: 15px;
  margin-top: 10px;
  font-size: 13.33px;
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
  margin-top: 5px;
  margin-right: 5px;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  color: white;
  border: 0.5px solid transparent;
  border-radius: 50%;
  background-color: black;
  &:visited {
    color: white;
  }
  &:hover {
    background-color: white;
    color: black;
  }
`;

const styles = {
  productCardContainer,
  div_ProductCard,
  div_Gallery,
  img_Big,
  // div_Thumbnails,
  // img_Small,
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
