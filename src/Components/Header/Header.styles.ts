import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Colour from "../../Colour";

const headerContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-content: center;
  color: white;
  width: 100vw;
  align-items: center;
  height: 155px;
  margin: auto;
  @media screen and (max-width: 1000px) {
  }
`;
const header = styled.div`
  display: flex;
  color: black;
  font-size: 45px;
  margin-left: 10vw;
  margin-right: 20px;
  font-weight: 900;
  align-self: center;
  align-content: center;
`;
const logo = styled.span`
  color: ${Colour.AR};
  font-size: 45px;
  font-weight: 900;
`;

const button = styled(NavLink)`
  @media screen and (max-width: 1000px) {
    display: flex;
  }
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

const menuButton = styled.button`
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
  }
`;
const menuContainer = styled.div`
  position: absolute;
  right: 0px;
  background-color: white;
`;
const buttonContainer = styled.div`
  display: flex;
  margin-right: 50px;
  height: 100px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const topBanner = styled.div`
  height: 30px;
  width: 100;
  background-color: ${Colour.overHeader};
  display: flex;
  align-items: flex-end;
  margin: 0;
`;

const topBannerContent = styled.div`
  font-weight: 400;
  font-size: 15px;
  margin: auto 1vw;
`;

const underBanner2 = styled.div`
  height: 55px;
  width: 100;
  background-color: ${Colour.underHeader2};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
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

const bannerContent = styled.div`
  justify-content: center;
  font-weight: 400;
  font-size: 15px;
  margin: auto;
`;

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
};

export default styles;
