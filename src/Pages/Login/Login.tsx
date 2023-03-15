import { Header } from "../../Components/Header/Header";
import s from "./Login.styles";
import { RiCloseCircleFill } from "react-icons/ri";

export const Login: React.FC = () => {
  return (
    <s.loginContainer>
      <Header />
      <s.loginHeader>Login</s.loginHeader>
      <s.loginBox>
        <s.userDetailWrapper>
          <s.userDetailContainer key={"username"}>
            <s.userDetailText key={"username-text"}>UserName:</s.userDetailText>
            <s.userDetailBox
              key={"username-input"}
              type="text"
            ></s.userDetailBox>
          </s.userDetailContainer>
          <s.userDetailContainer key={"password"}>
            <s.userDetailText key={"password-text"}>Password:</s.userDetailText>
            <s.userDetailBox
              key={"password-input"}
              type="text"
            ></s.userDetailBox>
          </s.userDetailContainer>
        </s.userDetailWrapper>
        <s.cancelButton to="/">
          <RiCloseCircleFill size={25} />
        </s.cancelButton>
      </s.loginBox>
    </s.loginContainer>
  );
};
