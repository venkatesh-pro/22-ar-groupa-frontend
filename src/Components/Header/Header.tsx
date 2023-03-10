import { ChangeEvent } from "react";
import s from "./Header.styles";

interface Props {
  text: string;
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
}

export const Header: React.FC<Props> = ({
  text,
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
      <s.header>{text}</s.header>
      <s.button onClick={handleClick}>Home</s.button>
      {options.map((op) => (
        <s.button key={op} onClick={handleClick}>
          {op}
        </s.button>
      ))}
    </s.headerContainer>
  );
};
