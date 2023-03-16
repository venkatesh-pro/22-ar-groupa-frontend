import { Header } from "../../Components/Header/Header";
import s from "./SignUp.styles";
import { RiCloseCircleFill } from "react-icons/ri";

export const SignUp: React.FC = () => {
  return (
    <s.signUpContainer>
      <Header />
      <s.loginHeader>Sign Up</s.loginHeader>
      <s.loginBox>
        <s.userDetailWrapper>
          <s.userDetailContainer key={"email"}>
            <s.userDetailText key={"email-text"}>Email:</s.userDetailText>
            <s.userDetailBox key={"email-input"} type="email"></s.userDetailBox>
          </s.userDetailContainer>

          <s.userDetailContainer key={"password"}>
            <s.userDetailText key={"password-text"}>Password:</s.userDetailText>
            <s.userDetailBox
              key={"password-input"}
              type="text"
            ></s.userDetailBox>
          </s.userDetailContainer>

          <s.userDetailContainer key={"password"}>
            <s.userDetailText key={"password-text"}>
              Repeat Password:
            </s.userDetailText>
            <s.userDetailBox
              key={"password-input"}
              type="text"
            ></s.userDetailBox>
          </s.userDetailContainer>
          <button>Create New User</button>
        </s.userDetailWrapper>
        <s.cancelButton to="/">
          <RiCloseCircleFill size={25} />
        </s.cancelButton>
      </s.loginBox>
    </s.signUpContainer>
  );
};
