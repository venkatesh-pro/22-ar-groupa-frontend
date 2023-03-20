import { Link } from "react-router-dom";
import styled from "styled-components";

const loginContainer = styled.div``;

const loginHeader = styled.h1`
  margin: 20px;
`;

const loginBox = styled.div`
  max-width: 370px;
  min-width: 200px;
  height: 225px;
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
  width: 100px;
  border: none;
  text-decoration: none;
  background-color: white;
  color: black;
  font-weight: bold;
  border-radius: 15px;
  align-self: flex-end;
  margin-top: 10px;

  &:hover {
    background-color: #484848;
    color: white;
  }
`;
const userDetailText = styled.p`
  color: white;
  margin: 10px;
  font-weight: bold;
`;

const userDetailBox = styled.input`
  margin: 10px;
  height: 25px;
  width: 100px;
`;

const userDetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const cancelButton = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;

  &:visited {
    color: white;
  }
  &:hover {
    background-color: #484848;
    color: white;
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

  loginButton,
};

export default styles;
