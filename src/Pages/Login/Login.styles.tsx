import { Link } from "react-router-dom";
import styled from "styled-components";

const loginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const loginHeader = styled.h1`
  margin: 20px;
  display: flex;
  justify-content: center;
`;

const loginBox = styled.div`
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  max-width: 370px;
  min-width: 200px;
  height: auto;
  border: solid;
  border-width: 1px;
  margin: 10px auto;
  border-radius: 1px;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px;
`;
const loginButton = styled.button`
  width: auto;
  border: none;
  text-decoration: none;
  background-color: black;
  color: white;
  font-weight: bold;
  border-radius: 1px;
  align-self: flex-end;
  margin-top: 10px;
  border: 2px solid black;
  padding: 5px 10px 5px 10px;

  &:hover {
    background-color: white;
    color: black;
  }
`;
const userDetailText = styled.p`
  color: black;
  margin: 10px;
  font-weight: bold;
`;

const incorrectInput = styled.p`
  color: black;
  margin: 10px;
`;

const userDetailBox = styled.input`
  margin: 10px;
  margin-left: 0px;
  height: 25px;
  width: 150px;
`;

const userDetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const userInputWraper = styled.div`
  display: flex;
  color: black;
  align-items: center;
`;

const cancelButton = styled(Link)`
  margin-top: 0px;
  margin-right: 0px;
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
`;

const styles = {
  loginContainer,
  loginHeader,
  loginBox,
  userDetailBox,
  userDetailContainer,
  userDetailText,
  cancelButton,
  userInputWraper,
  loginButton,
  incorrectInput,
};

export default styles;
