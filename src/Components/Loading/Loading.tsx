import s from "./Loading.styles";

export const Loading: React.FC = () => {
  return (
    <div>
      <s.Header> Finding furniture . . .</s.Header>
      <s.LoadingSpinner></s.LoadingSpinner>
    </div>
  );
};
