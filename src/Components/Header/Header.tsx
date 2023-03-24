import s from "./Header.styles";
import { RiShoppingCart2Line, RiMenuLine } from "react-icons/ri";
import { Dispatch, SetStateAction, useState } from "react";

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

  if (mobileView) {
    return (
      <div>
      <s.topBanner/>
      <s.headerWrapper>
        <s.headerContainer>
          <s.header>
            THE H<s.logo>AR</s.logo>T.
          </s.header>
          <s.menuButton onClick={handleClick}>
            <RiMenuLine size={32} />
          </s.menuButton>
        </s.headerContainer>
        {toggle && (
          <s.menuContainer>
            <s.button to="/">Home</s.button>
            {options.map((op) => (
              <s.button key={op} to={`/${op}`}>
                {op}
              </s.button>
            ))}
            {props.customerId === null ? (
              <div>
                <s.button to="/signup">Sign Up</s.button>
                <s.button to="/login">Log in</s.button>
              </div>
            ) : (
              <div>
                <s.button
                  to="/App"
                  onClick={() => {
                    props.setCustomerId(null);
                  }}
                >
                  Log out
                </s.button>{" "}
                <s.header>{props.customerId}</s.header>
              </div>
            )}
            <s.button to="/basket">
              <RiShoppingCart2Line size={32} />
            </s.button>
          </s.menuContainer>
        )}
      </s.headerWrapper>
      <s.underBanner/>
      </div>
    );
  }

  return (
    <div>
    <s.topBanner/>
    <s.headerContainer>
      <s.header>
        THE H<s.logo>AR</s.logo>T.
      </s.header>
      
      <s.buttonContainer>
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
      </s.buttonContainer>
    </s.headerContainer>
    <s.underBanner/>
    </div>
  );
};
