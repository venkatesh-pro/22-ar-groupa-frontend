import { Link } from "react-router-dom";
import styled from "styled-components";

const loginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const loginHeader = styled.h1`
  margin: 20px;
`;

const loginBox = styled.div`
  max-width: 370px;
  min-width: 200px;
  height: auto;
  border: solid;
  border-width: 7px;
  margin: 30px;
  border-radius: 15px;
  background-color: black;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px;
`;
const loginButton = styled.button`
  width: auto;
  border: none;
  text-decoration: none;
  background-color: white;
  color: black;
  font-weight: bold;
  border-radius: 15px;
  align-self: flex-end;
  margin-top: 10px;
  border: solid;
  border-width: 3px;
  border-color: white;
  padding: 5px 10px 5px 10px;

  &:hover {
    background-color: black;
    color: white;
  }
`;
const userDetailText = styled.p`
  color: white;
  margin: 10px;
  font-weight: bold;
`;

const incorrectInput = styled.p`
  color: white;
  margin: 10px;
`;

const userDetailBox = styled.input`
  margin: 10px;
  margin-left: 0px;
  height: 25px;
  width: 100px;
`;

const userDetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const userInputWraper = styled.div`
  display: flex;
  color: white;
  align-items: center;
`;

const cancelButton = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;

  &:visited {
    color: white;
  }
  &:hover {
    background-color: white;
    color: black;
    border-radius: 50%;
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
