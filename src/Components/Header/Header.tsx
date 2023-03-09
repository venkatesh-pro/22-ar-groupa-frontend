import s from "./Header.styles";

interface Props {
  text: string;
}
export const Header: React.FC<Props> = ({ text }) => {
  return (
    <s.headerContainer>
      <s.header>{text}</s.header>
    </s.headerContainer>
  );
};
