import { Link } from "react-router-dom";
import styled from "styled-components";

const headerContainer = styled.div`
  height: auto;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  font-weight: bolder;
`;
const logo = styled.h1`
  color: red;
  font-size: 35px;
  font-weight: bolder;
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
  font-weight: bold;

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
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-left: 25px;
  text-decoration: none;
  color: white;
  margin-left: 20px;
  font-size: 25px;
  border: none;
  background-color: black;
  width: 50px;

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

const buttonContainer = styled.div`
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
`;
const styles = {
  header,
  headerContainer,
  button,
  logo,
  basketButton,
  buttonContainer,
};

export default styles;
