import { Header } from "../../Components/Header/Header";
import s from "./Login.styles";
import {
  RiCloseCircleFill,
  RiUser3Fill,
  RiLockPasswordFill,
} from "react-icons/ri";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const [customerEmail, setEmail] = useState<string>("");
  const [customerPassword, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const [customerId, setCustomerId] = useState(null);

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
        setCustomerId(response);
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

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
              value={customerEmail}
              onChange={handleEmailChange}
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
              value={customerPassword}
              onChange={handlePasswordChange}
            ></s.userDetailBox>
          </s.userInputWraper>
        </s.userDetailContainer>
        <s.loginButton onClick={handleAdd}>LOGIN</s.loginButton>
      </s.loginBox>
    </s.loginContainer>
  );
};
