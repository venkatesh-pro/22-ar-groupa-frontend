import s from "./Message.styles";

interface Props {
  text: string;
}

export const Message: React.FC<Props> = ({ text }) => {
  return (
    <s.loadingContainer>
      <s.loadingheader>{text}</s.loadingheader>
    </s.loadingContainer>
  );
};
