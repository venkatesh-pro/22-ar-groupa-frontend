import { Link } from "react-router-dom";
import styled from "styled-components";

const loginContainer = styled.div``;

const loginHeader = styled.h1`
  margin: 20px;
`;

const loginBox = styled.div`
  max-width: 700px;
  min-width: 200px;
  max-height: 700px;
  min-height: 200px;
  border: solid;
  border-width: 7px;
  margin: 30px;
  border-radius: 15px;
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`;

const userDetailText = styled.p`
  color: white;
  margin: 10px;
  font-weight: bold;
`;

const userDetailBox = styled.input`
  margin: 10px;
`;

const userDetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const userDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const cancelButton = styled(Link)`
  &:visited {
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
  userDetailWrapper,
};

export default styles;
