import { Link } from "react-router-dom";
import styled from "styled-components";

const orderCompleteContainer = styled.div``;

const text = styled.p`
  font-weight: bold;
  margin-left: 15px;
`;

const button = styled(Link)`
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

const styles = { orderCompleteContainer, text, button };

export default styles;
