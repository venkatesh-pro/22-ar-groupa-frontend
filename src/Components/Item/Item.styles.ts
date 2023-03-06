import { Link } from "react-router-dom";

import styled from "styled-components";

const itemName = styled.div`
  display: flex;
  padding: 10px;
  align-items: right;
  margin-right: 20px;
`;

const itemContainer = styled(Link)`
  font-family: Impact;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  background-color: pink;
  border: solid;
  &:hover {
    color: red;
  }
  &:visited {
    color: black;
  }

  width: 50vw;
  margin: 10px;
  align-content: center;
  border-radius: 3%;
  min-width: 200px;
  max-width: 350px;
`;

const itemImage = styled.img`
  display: flex;
  width: 75%;
  height: 80%;
  margin: auto;
  margin-top: 10px;
  align-items: center;
  align-content: center;
  border-radius: 5%;
`;
const styles = {
  itemName,
  itemContainer,
  itemImage,
};
export default styles;
