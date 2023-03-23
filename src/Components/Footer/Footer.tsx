import s from "./Footer.styles";
import { CgHeart } from "react-icons/cg";

const Footer = () => {
  const heartStyle = { color: "red", padding: "5px" };

  return (
    <footer>
      <s.div_FooterContainer>
        Made with <CgHeart style={heartStyle} /> by AcceleratARz Team @ THG 2023
      </s.div_FooterContainer>
    </footer>
  );
};

export default Footer;
