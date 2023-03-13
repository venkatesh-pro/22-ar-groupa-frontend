import styled from "styled-components";

const dropDownContainer = styled.div`
  margin: 10px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-self: flex-end;
  border-radius: 5px;
`;

const selectBox = styled.select`
  height: 20px;
  margin-left: 10px;
  background-color: white;
  border: none;
  border-radius: 5px;

`

const styles = {
  dropDownContainer,
  selectBox
};

export default styles;
