import { Header } from "../../Components/Header/Header";
import s from "./Login.styles";
import {
  RiCloseCircleFill,
  RiUser3Fill,
  RiLockPasswordFill,
} from "react-icons/ri";
import Footer from "../../Components/Footer/Footer";

export const Login: React.FC = () => {
  return (
    <s.loginContainer>
      <Header />
      <s.loginHeader data-testid="login-header">Login</s.loginHeader>
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
        <s.loginButton>LOGIN</s.loginButton>
      </s.loginBox>
      <Footer />
    </s.loginContainer>
  );
};
