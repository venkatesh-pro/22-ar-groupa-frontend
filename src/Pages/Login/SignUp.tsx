import { Header } from "../../Components/Header/Header";
import s from "./Login.styles";
import {
  RiCloseCircleFill,
  RiLockPasswordFill,
  RiUser3Fill,
} from "react-icons/ri";
import Footer from "../../Components/Footer/Footer";

export const SignUp: React.FC = () => {
  return (
    <s.loginContainer>
      <Header />
      <s.loginHeader>Sign Up</s.loginHeader>
      <s.loginBox>
        <s.cancelButton to="/">
          <RiCloseCircleFill size={25} />
        </s.cancelButton>
        <s.userDetailContainer key={"username"}>
          <s.userDetailText key={"username-text"}>Email:</s.userDetailText>
          <s.userInputWraper>
            <RiUser3Fill size={25} />
            <s.userDetailBox
              key={"username-input"}
              type="text"
            ></s.userDetailBox>
          </s.userInputWraper>
        </s.userDetailContainer>
        <s.userDetailContainer key={"password"}>
          <s.userDetailText key={"password-text"}>Password:</s.userDetailText>
          <s.userInputWraper>
            <RiLockPasswordFill size={25} />
            <s.userDetailBox
              key={"password-input"}
              type="text"
            ></s.userDetailBox>
          </s.userInputWraper>
        </s.userDetailContainer>
        <s.userDetailContainer key={"repeat-password"}>
          <s.userDetailText key={"password-text"}>
            Repeat Password:
          </s.userDetailText>
          <s.userInputWraper>
            <RiLockPasswordFill size={25} />
            <s.userDetailBox
              key={"repeat-password-input"}
              type="text"
            ></s.userDetailBox>
          </s.userInputWraper>
        </s.userDetailContainer>
        <s.loginButton>Create New User</s.loginButton>
      </s.loginBox>
      <Footer />
    </s.loginContainer>
  );
};
