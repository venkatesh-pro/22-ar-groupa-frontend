import { NavLink } from "react-router-dom";
import styled from "styled-components";

const headerContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-between;
  color: white;
  width: 100vw;
  align-items: flex-start;
  height: 100px;
  @media screen and (max-width: 750px) {
  }
`;
const header = styled.div`
  display: flex;
  color: white;
  font-size: 32px;
  margin-left: 50px;
  margin-right: 20px;
  margin-top: 30px;
  font-weight: bolder;
  align-self: center;
  align-content: center;
`;
const logo = styled.h1`
  color: red;
  font-size: 35px;
  font-weight: bolder;
  align-self: center;
  margin: 0px;
`;

const button = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 15px;
  margin: 0px 5px 10px 5px;
  text-decoration: none;
  color: white;
  font-size: 25px;
  background-color: black;
  width: auto;
  padding-left: 10px;
  padding-right: 10px;
  border: 2px solid black;
  border-radius: 15px;

  &:hover {
    background-color: white;
    color: black;
    border-color: white;
  }
  &:active {
    background-color: red;
    color: black;
    border-color: red;
  }
  &.active {
    background-color: white;
    color: black;
    border-color: white;
  }
`;

const menuButton = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-self: center;
  margin-left: 25px;
  text-decoration: none;
  color: white;
  margin-left: 20px;
  font-size: 25px;
  border: none;
  background-color: black;
  width: 50px;
  padding-left: 10px;
  padding-right: 10px;

  &:hover {
    text-decoration: none;
    color: black;
    background-color: white;
    border-radius: 15px;
  }
`;
const menuContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  width: 150px;
  align-items: center;
  align-self: flex-end;
  position: absolute;
  margin-top: 100px;
`;
const buttonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
  align-self: center;
`;

const headerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const styles = {
  header,
  headerContainer,
  button,
  logo,
  buttonContainer,
  menuButton,
  menuContainer,
  headerWrapper,
};

export default styles;
