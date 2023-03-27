import s from "./MainFooter.styles";

const MainFooter = () => {
  return (
    <footer>
      <s.line />
      <s.div_FooterContainer>
        <s.mulitpleListContainer>
          <s.listContainer>
            <s.listTitle>Help & information</s.listTitle>
            <s.ul>
              <s.li>Help & Contact Us</s.li>
              <s.li>Returns</s.li>
              <s.li>UK delivery</s.li>
              <s.li>International delivery</s.li>
              <s.li>Track my Order</s.li>
              <s.li>Cookie Settings</s.li>
            </s.ul>
          </s.listContainer>
          <s.listContainer>
            <s.listTitle>How to contact us</s.listTitle>
            <s.ul>
              <s.li>Log in to your account here</s.li>
              <s.li>Or call: 01606 811 863</s.li>
              <s.li>Mon - Fri: 8am - 5pm</s.li>
              <s.li>Sat & Sun: Closed</s.li>
              <s.li>Bank Holidays: Closed</s.li>
            </s.ul>
          </s.listContainer>
          <s.listContainer>
            <s.listTitle>Why shop with us?</s.listTitle>
            <s.ul>
              <s.li>About us</s.li>
              <s.li>Download our app</s.li>
              <s.li>Brand A-Z</s.li>
              <s.li>Key Worker, Teach & Senior Discount</s.li>
              <s.li>Student discount</s.li>
              <s.li>Refer a friend</s.li>
              <s.li>Affiliates & influencers</s.li>
              <s.li>Buying guides</s.li>
              <s.li>Clearpay: buy now, pay later</s.li>
            </s.ul>
          </s.listContainer>
          <s.listContainer>
            <s.listTitle>Terms & conditions</s.listTitle>
            <s.ul>
              <s.li>Offer T&Cs & exclusions</s.li>
              <s.li>Terms and conditions</s.li>
              <s.li>Privacy policy</s.li>
              <s.li>Modern slavery statement</s.li>
              <s.li>Cookie information</s.li>
            </s.ul>
          </s.listContainer>
        </s.mulitpleListContainer>
      </s.div_FooterContainer>
      <s.line />
    </footer>
  );
};

export default MainFooter;
