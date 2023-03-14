import s from "./Header.styles";
import { RiShoppingCart2Line } from "react-icons/ri";

export const Header: React.FC = () => {
  const options = ["Table", "Chair", "Light"];
  return (
    <s.headerContainer>
      <s.header>
        f<s.logo>AR</s.logo>nitures
      </s.header>
      <s.buttonContainer>
        <s.button to="/">Home</s.button>
        {options.map((op) => (
          <s.button key={op} to={`/${op}`}>
            {op}
          </s.button>
        ))}
        <s.button to="/signup">Sign Up</s.button>
        <s.button to="/login">Log in</s.button>
        <s.button to="/basket">
          <RiShoppingCart2Line size={32} />
        </s.button>
      </s.buttonContainer>
    </s.headerContainer>
  );
};
