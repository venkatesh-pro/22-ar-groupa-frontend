import styled from "styled-components";

const sortByContainer = styled.div`
  display: flex;
  align-self: flex-end;
  width: 150px;
  margin-top: 10px;
`;

const selectSortBy = styled.select`
  border: solid black;
  width: 130px;
  height: 25px;
  font-weight: bold;
`;

const optionSortBy = styled.option`
  font-weight: bold;
`;

const styles = { sortByContainer, selectSortBy, optionSortBy };

export default styles;
