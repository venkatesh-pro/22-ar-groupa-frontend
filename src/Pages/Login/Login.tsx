import s from "./Login.styles";
import {
  RiCloseCircleFill,
  RiUser3Fill,
  RiLockPasswordFill,
} from "react-icons/ri";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

interface customer {
  customerId: number | null;
  setCustomerId: Dispatch<SetStateAction<number | null>>;
  setBasketId: Dispatch<SetStateAction<number>>;
}

export const Login = (props: customer) => {
  const [customerEmail, setEmail] = useState<string>("");
  const [customerPassword, setPassword] = useState<string>("");
  const [incorrect, setIncorrect] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleAdd = () => {
    fetch(
      `/api/customer/getCustomerId?customerEmail=${customerEmail}&customerPassword=${customerPassword}`,
      {
        method: "Get",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response === -1) {
          setIncorrect(true);
        } else {
          props.setCustomerId(response);
          let ID = response;
          setIncorrect(false);
          navigate("/");
          fetch(`/api/basket/${ID}/getBasketId`, {
            method: "Get",
          })
            .then((response) => {
              return response.json();
            })
            .then((response) => {
              props.setBasketId(response);
            });
        }
      });
  };

  return (
    <s.loginContainer>
      <s.loginHeader data-testid="login-header">Log In</s.loginHeader>
      <s.loginBox>
        <s.cancelButton to="/" aria-label="Go back">
          <RiCloseCircleFill size={25} />
        </s.cancelButton>
        <s.userDetailContainer key={"username"}>
          <s.userDetailText key={"username-text"}>Username:</s.userDetailText>
          {incorrect ? (
            <s.userDetailText>Incorrect username or password</s.userDetailText>
          ) : null}
          <s.userInputWraper>
            <RiUser3Fill size={25} />
            <s.userDetailBox
              key={"username-input"}
              type="text"
              value={customerEmail}
              onChange={handleEmailChange}
              aria-label="Enter your user name"
            ></s.userDetailBox>
          </s.userInputWraper>
        </s.userDetailContainer>
        <s.userDetailContainer key={"password"}>
          <s.userDetailText key={"password-text"}>Password:</s.userDetailText>
          <s.userInputWraper>
            <RiLockPasswordFill size={25} />
            <s.userDetailBox
              key={"password-input"}
              type="password"
              value={customerPassword}
              onChange={handlePasswordChange}
              aria-label="Enter your password"
            ></s.userDetailBox>
          </s.userInputWraper>
        </s.userDetailContainer>
        <s.loginButton onClick={handleAdd}>Login</s.loginButton>
      </s.loginBox>
      <Footer />
    </s.loginContainer>
  );
};
