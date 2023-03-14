import s from "./DropDownBox.styles";

interface Props {
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
}

export const DropDownBox: React.FC<Props> = ({
  selectedOption,
  setSelectedOption,
  options,
}) => {
  const handleSelect = (e: any) => {
    setSelectedOption(e.target.value);
  };

  return (
    <s.dropDownContainer>
      <s.selectBox
        id="priority-input"
        onChange={handleSelect}
        defaultValue={selectedOption}
      >
        {options.map((op) => (
          <option key={op}>{op}</option>
        ))}
      </s.selectBox>
    </s.dropDownContainer>
  );
};
