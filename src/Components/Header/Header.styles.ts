import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Colour from "../../Colour";

const headerContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  color: white;
  width: 100vw;
  align-items: flex-start;
  height: 155px;
  @media screen and (max-width: 750px) {
  }
`;
const header = styled.div`
  display: flex;
  color: black;
  font-size: 65px;
  margin-left: 10vw;
  margin-right: 20px;
  /* margin: auto 15vw; */
  font-weight: 900;
  align-self: center;
  align-content: center;
`;
const logo = styled.span`
  color: ${Colour.AR};
  font-size: 65px;
  font-weight: 900;
  /* align-self: center; */
  /* margin: 0px; */
`;

const button = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 15px;
  margin: 0px 5px 10px 5px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: bolder;
  background-color: white;
  width: auto;
  /* padding-left: 10px;
  padding-right: 10px; */
  padding: 10px;
  border: 2px solid white;
  /* border-radius: 15px; */

  &:hover {
    background-color: lightgray;
    color: black;
    /* border-color: black; */
  }
  &:active {
    background-color: black;
    color: white;
    border-color: black;
  }
  /* &.active {
    background-color: white;
    color: black;
    border-color: white;
  } */
`;

const menuButton = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-self: center;
  margin-left: 25px;
  text-decoration: none;
  color: black;
  margin-left: 20px;
  font-size: 25px;
  border: none;
  background-color: white;
  width: 50px;
  padding-left: 10px;
  padding-right: 10px;

  &:hover {
    text-decoration: none;
    color: black;
    background-color: lightgray;
    border-radius: 15px;
  }
`;
const menuContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 150px;
  align-items: center;
  align-self: flex-end;
  position: absolute;
  margin-top: 100px;
`;
const buttonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
  align-self: center;
`;

const headerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const topBanner = styled.div`
  height: 30px;
  width: 100;
  background-color: ${Colour.overHeader};
  display: flex;
  align-items: flex-end;
  /* align-items: flex-end; */
  margin: 0;


`;

const topBannerContent =styled.div`
  font-weight: 400;
  font-size: 15px;
  margin: auto 1vw;

`

const underBanner2 = styled.div`
  height: 55px;
  width: 100;
  background-color: ${Colour.underHeader2};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

const underBanner = styled.div`
  height: 55px;
  width: 100;
  background-color: ${Colour.underHeader};
  display: flex;
  @media all and (max-width: 1200px) {
  display: none;
}
`;

const bannerContent =styled.div`
  justify-content: center;
  font-weight: 400;
  font-size: 15px;
  margin: auto;

`

const styles = {
  topBannerContent,
  bannerContent,
  underBanner2,
  underBanner,
  topBanner,
  header,
  headerContainer,
  button,
  logo,
  buttonContainer,
  menuButton,
  menuContainer,
  headerWrapper,
};

export default styles;
