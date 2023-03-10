import { Link } from "react-router-dom";
import styled from "styled-components";

const headerContainer = styled.div`
  height: auto;
  background-color: black;
  display: flex;
  align-items: center;
  color: white;
  max-width: 100vw;
  flex-wrap: wrap;
`;
const header = styled.h1`
  display: flex;
  justify-content: flex-start;
  color: white;
  font-size: 30px;
  margin-left: 10px;
  margin-right: 20px;
  align-items: center;
`;
const logo = styled.h1`
  color: red;
  font-size: 35px;
`;

const button = styled.button`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 15px;
  margin-left: 25px;
  text-decoration: none;
  color: white;
  font-size: 25px;
  border: none;
  background-color: black;
  margin: 10px;

  &:hover {
    text-decoration: none;
    color: black;
    background-color: white;
    border-radius: 15px;
  }

  &:active {
    background-color: red;
    color: black;
  }
`;

const basketButton = styled(Link)`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 15px;
  margin-left: 25px;
  text-decoration: none;
  color: white;
  margin-left: 20px;
  font-size: 25px;
  border: none;
  background-color: black;

  &:hover {
    text-decoration: none;
    color: black;
    background-color: white;
    border-radius: 15px;
  }

  &:active {
    background-color: red;
    color: black;
  }
`;
const styles = {
  header,
  headerContainer,
  button,
  logo,
  basketButton,
};

export default styles;
