import { NavLink } from "react-router-dom";
import styled from "styled-components";

const headerContainer = styled.div`
  height: auto;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  width: 100vw;
  flex-wrap: wrap;
  @media screen and (max-width: 750px) {
    background-color: blue;
  }
`;
const header = styled.h1`
  display: flex;
  justify-content: flex-start;
  color: white;
  font-size: 30px;
  margin-left: 50px;
  margin-right: 20px;
  align-items: center;
  font-weight: bolder;
`;
const logo = styled.h1`
  color: red;
  font-size: 35px;
  font-weight: bolder;
`;

const button = styled(NavLink)`
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
  width: auto;
  padding-left: 10px;
  padding-right: 10px;

  &:hover {
    text-decoration: none;
    color: black;
    background-color: white;
    border-radius: 15px;
  }

  &.active {
    background-color: white;
    color: black;
    border: 1px solid white;
    padding: 5px;
    border-radius: 15px;
  }
`;

const buttonContainer = styled.div`
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  margin-right: 50px;
`;
const styles = {
  header,
  headerContainer,
  button,
  logo,
  buttonContainer,
};

export default styles;
