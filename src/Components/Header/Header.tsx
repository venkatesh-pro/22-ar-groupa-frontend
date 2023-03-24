import s from "./Header.styles";
import {
  RiShoppingCart2Line,
  RiMenuLine,
  RiMoneyPoundCircleLine,
} from "react-icons/ri";
import { BsClipboardCheck, BsTruck } from "react-icons/bs";
import { Dispatch, SetStateAction, useState } from "react";
import { ImMobile } from "react-icons/im";
import { TfiEmail } from "react-icons/tfi";
import { GiUnionJack } from "react-icons/gi";

interface customer {
  customerId: number | null;
  setCustomerId: Dispatch<SetStateAction<number | null>>;
}

export const Header = (props: customer) => {
  const options = ["Table", "Chair", "Light"];
  const [toggle, setToggle] = useState<boolean>(false);
  const moblieMedia: MediaQueryList = window.matchMedia("(max-width:1000px)");
  const [mobileView, setMobileView] = useState<boolean>(moblieMedia.matches);

  const handleClick = () => {
    setToggle((toggle) => !toggle);
  };

  moblieMedia.addEventListener("change", (e) => {
    if (e.matches) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  });

  const menu = () => {
    return (
      <div>
        <s.button to="/">Home</s.button>
        {options.map((op) => (
          <s.button key={op} to={`/${op}`}>
            {op}
          </s.button>
        ))}
        {props.customerId === null ? (
          <s.button to="/login">Log in</s.button>
        ) : (
          <s.button
            to="/"
            onClick={() => {
              props.setCustomerId(null);
            }}
          >
            Log out
          </s.button>
        )}
        {props.customerId === null ? (
          <s.button to="/signup">Sign Up</s.button>
        ) : (
          <s.button to="/basket">
            <RiShoppingCart2Line size={32} />
          </s.button>
        )}
      </div>
    );
  };

  return (
    <div>
      <s.topBanner>
        <s.topBannerContent>
          <GiUnionJack /> en -GBP
        </s.topBannerContent>
        <s.topBannerContent>Quick Returns</s.topBannerContent>
        <s.topBannerContent>Help</s.topBannerContent>
      </s.topBanner>
      <s.headerContainer>
        <s.header>
          THE H<s.logo>AR</s.logo>T.
        </s.header>
        {!mobileView ? (
          <div>
            <s.buttonContainer>{menu()}</s.buttonContainer>
          </div>
        ) : (
          <div>
            <s.menuButton onClick={handleClick}>
              <RiMenuLine size={32} />
            </s.menuButton>
            {toggle ? <s.menuContainer>{menu()}</s.menuContainer> : null}
          </div>
        )}
      </s.headerContainer>
      <s.underBanner>
        <s.bannerContent>
          <BsTruck /> Free UK delivery over £70
        </s.bannerContent>
        <s.bannerContent>
          <RiMoneyPoundCircleLine /> New here? 20% off selected styles with code
          NEW20
        </s.bannerContent>
        <s.bannerContent>
          <BsClipboardCheck /> Easy returns
        </s.bannerContent>
        <s.bannerContent>
          <ImMobile /> Download our app
        </s.bannerContent>
        <s.bannerContent>
          <TfiEmail /> Sign up for latest offers
        </s.bannerContent>
      </s.underBanner>
      <s.underBanner2>
        25% off when you shop through our app | Use code APP25
      </s.underBanner2>
    </div>
  );
};
