import styled from "styled-components";
import Colour from "../../Colour";

const div_FooterContainer = styled.div`
  width: 90vw;
  margin: 3vh auto;
`;

const mulitpleListContainer = styled.div`
    display: flex;
   margin:  0 auto;
   max-width: 1500px;
   flex-direction: row;
   @media screen and (max-width: 1000px) {
    flex-direction: column;
  }

`

const line = styled.div`
  height: 3px;
  background-color: ${Colour.overHeader};
`;
const ul = styled.ul`
  padding: 0;
  list-style-type: none;
`;

const li = styled.li`
  margin: 23px;
  font-weight: 250;
`;
const listContainer = styled.div`


  margin:  1vh auto;
  @media screen and (max-width: 1000px) {
    margin:  3vh 6vw;
  }
`;

const listTitle = styled.div`
  font-weight: 700;
`;

const styles = {
  div_FooterContainer,
  line,
  ul,
  li,
  listContainer,
  listTitle,
  mulitpleListContainer
};

export default styles;
