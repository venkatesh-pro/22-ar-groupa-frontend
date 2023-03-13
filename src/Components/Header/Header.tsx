import s from "./Header.styles";
import { RiShoppingCart2Line } from "react-icons/ri";

interface Props {
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
}

export const Header: React.FC<Props> = ({
  selectedOption,
  setSelectedOption,
  options,
}) => {
  const handleClick = (e: any) => {
    const chosen = e.target.innerHTML;
    console.log(chosen);
    if (!(selectedOption === chosen)) {
      setSelectedOption(chosen);
    }
  };

  return (
    <s.headerContainer>
      <s.header>
        f<s.logo>AR</s.logo>nitures
      </s.header>
      <s.buttonContainer>
        <s.button onClick={handleClick}>Home</s.button>
        {options.map((op) => (
          <s.button key={op} onClick={handleClick}>
            {op}
          </s.button>
        ))}
        <s.button>Sign Up</s.button>
        <s.button>Log in</s.button>
        <s.basketButton to="/basket">
          <RiShoppingCart2Line size={32} />
        </s.basketButton>
      </s.buttonContainer>
    </s.headerContainer>
  );
};
