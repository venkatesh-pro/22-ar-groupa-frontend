import { Header } from "../../Components/Header/Header";
import s from "./SignUp.styles";
import { RiCloseCircleFill } from "react-icons/ri";

export const SignUp: React.FC = () => {
  return (
    <s.signUpContainer>
      <Header />
      <s.loginHeader data-testid="signup-header">Sign Up</s.loginHeader>
      <s.loginBox>
        <s.userDetailWrapper>
          <s.userDetailContainer key={"email"}>
            <s.userDetailText key={"email-text"}>Email:</s.userDetailText>
            <s.userDetailBox
              key={"email-input"}
              type="email"
              placeholder="Email"
            ></s.userDetailBox>
          </s.userDetailContainer>

          <s.userDetailContainer key={"password1"}>
            <s.userDetailText key={"password-text"}>Password:</s.userDetailText>
            <s.userDetailBox
              key={"password-input"}
              type="password"
              placeholder="Password"
              data-testid="password1"
            ></s.userDetailBox>
          </s.userDetailContainer>

          <s.userDetailContainer key={"password2"}>
            <s.userDetailText key={"password-text"}>
              Repeat Password:
            </s.userDetailText>
            <s.userDetailBox
              key={"password-input"}
              type="password"
              placeholder="Password"
              data-testid="password2"
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
