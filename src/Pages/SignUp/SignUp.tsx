import { Header } from "../../Components/Header/Header";
import s from "./SignUp.styles";

export const SignUp: React.FC = () => {
  return (
    <s.signUpContainer>
      <Header />
      <s.form>
        <s.h1>Sign Up</s.h1>
        <s.div_form>
          <s.div_field>
            <label>Email:</label>
            <input type="email" name="email" placeholder="Email" />
          </s.div_field>
          <s.div_field>
            <label>Password:</label>
            <input type="password" name="password" placeholder="Password" />
          </s.div_field>
          <s.div_field>
            <label>Repeat Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Repeat Password"
            />
          </s.div_field>
          <s.button_auth>Create Account</s.button_auth>
        </s.div_form>
      </s.form>
    </s.signUpContainer>
  );
};
