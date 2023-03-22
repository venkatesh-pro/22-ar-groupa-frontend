import styled from "styled-components";

const div_FooterContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  margin-top: 5px;
  display: flex;
  width: 100%;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;

  @media screen and (max-width: 715px) {
    /* width: 500px; */
  }
  @media screen and (max-width: 350px) {
    font-size: 12px;
  }
`;

const styles = {
  div_FooterContainer,
};

export default styles;
