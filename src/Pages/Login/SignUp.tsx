import s from "./Login.styles";
import {
  RiCloseCircleFill,
  RiLockPasswordFill,
  RiUser3Fill,
} from "react-icons/ri";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

export const SignUp: React.FC = () => {
  const [customerEmail, setEmail] = useState<string>("");
  const [customerPassword, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [passwordDontMatch, setPasswordDontMatch] = useState(false);
  const [UserExists, setUserExists] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleRepeatPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(e.target.value);
  };
  const handleAdd = () => {
    if (customerPassword === repeatPassword) {
      const payload = JSON.stringify({
        customerEmail,
        customerPassword,
      });
      fetch(`api/customer/checkCustomerEmail?customerEmail=${customerEmail}`, {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          !response
            ? fetch(`api/customer/postNew`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: payload,
              })
                .then(() => {
                  setPasswordDontMatch(false);
                  setUserExists(false);
                })
                .then(() => {
                  navigate("/login");
                })
            : setUserExists(true);
          setPasswordDontMatch(false);
        });
    } else {
      setUserExists(false);
      setPasswordDontMatch(true);
    }
  };
  return (
    <s.loginContainer>
      <s.loginHeader>Sign Up</s.loginHeader>
      <s.loginBox>
        <s.cancelButton to="/">
          <RiCloseCircleFill size={25} />
        </s.cancelButton>
        <s.userDetailContainer key={"username"}>
          {UserExists ? (
            <s.incorrectInput>User already exists!</s.incorrectInput>
          ) : null}
          <s.userDetailText key={"username-text"}>Username:</s.userDetailText>
          <s.userInputWraper>
            <RiUser3Fill size={25} />
            <s.userDetailBox
              key={"username-input"}
              type="text"
              value={customerEmail}
              onChange={handleEmailChange}
            ></s.userDetailBox>
          </s.userInputWraper>
        </s.userDetailContainer>
        <s.userDetailContainer key={"password"}>
          <s.userDetailText key={"password-text"}>Password:</s.userDetailText>
          {passwordDontMatch ? (
            <s.incorrectInput>Passwords don't match!</s.incorrectInput>
          ) : null}
          <s.userInputWraper>
            <RiLockPasswordFill size={25} />
            <s.userDetailBox
              key={"password-input"}
              type="password"
              value={customerPassword}
              onChange={handlePasswordChange}
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
              type="password"
              value={repeatPassword}
              onChange={handleRepeatPasswordChange}
            ></s.userDetailBox>
          </s.userInputWraper>
        </s.userDetailContainer>
        <s.loginButton onClick={handleAdd}>Create New User</s.loginButton>
      </s.loginBox>
      <Footer />
    </s.loginContainer>
  );
};
