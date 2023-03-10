import styled from "styled-components";

const headerContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: black;
  display: flex;
  align-items: center;
`;
const header = styled.h1`
  justify-content: flex-start;
  color: white;
  font-size: 30px;
  margin-left: 10px;
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
  margin-left: 20px;
  font-size: 25px;

  &:hover {
    text-decoration: none;
    color: white;
    margin-left: 20px;
    font-size: 25px;
    border: 1px solid white;
    padding: 5px;
    border-radius: 15px;
  }

  &:active {
    background-color: white;
    color: black;
    border: 1px solid white;
    padding: 5px;
    border-radius: 15px;
  }
`;

const styles = {
  header,
  headerContainer,
  button,
  logo,
};

export default styles;
