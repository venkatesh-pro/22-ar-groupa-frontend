import styled from "styled-components";

const itemListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const sortByPriceButton = styled.div`
  gap: 15px;
  margin: 0px 5px 10px 5px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: bolder;
  background-color: white;
  width: auto;
  padding: 10px;
  border: 2px solid white;
  align-self: flex-end;

  &:hover {
    background-color: lightgray;
    color: black;
  }
  &:active {
    background-color: black;
    color: white;
    border-color: black;
  }
`;
const styles = { itemListContainer, items, sortByPriceButton };

export default styles;
