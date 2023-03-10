import styled from "styled-components";

const headerContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: black;
  display: flex;
  align-items: center;
  color: white;
`;
const header = styled.h1`
  display: flex;
  justify-content: flex-start;
  color: white;
  font-size: 30px;
  margin-left: 10px;
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
  color: black;
  margin-left: 20px;
  font-size: 25px;
  border-radius: 15px;
  border: 1px solid white;
  background-color: white;

  &:hover {
    text-decoration: none;
    color: white;
    border: 1px solid white;
    background-color: black;
  }

  &:active {
    background-color: white;
    color: black;
    padding: 5px;
  }
`;

const styles = {
  header,
  headerContainer,
  button,
  logo,
};

export default styles;
