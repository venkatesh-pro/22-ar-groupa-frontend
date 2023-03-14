import s from "./Header.styles";
import { RiShoppingCart2Line, RiMenuLine } from "react-icons/ri";
import { useState } from "react";

export const Header: React.FC = () => {
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
      <s.headerContainer>
        <s.header>
          f<s.logo>AR</s.logo>nitures
        </s.header>
        <s.menuContainer>
          <s.menuButton onClick={handleClick}>
            <RiMenuLine size={32} />
          </s.menuButton>

          {toggle && (
            <div>
              <s.button to="/">Home</s.button>
              {options.map((op) => (
                <s.button key={op} to={`/${op}`}>
                  {op}
                </s.button>
              ))}
              <s.button to="/signup">Sign Up</s.button>
              <s.button to="/login">Log in</s.button>
              <s.button to="/basket">
                <RiShoppingCart2Line size={32} />
              </s.button>
            </div>
          )}
        </s.menuContainer>
      </s.headerContainer>
    );
  }

  return (
    <s.headerContainer>
      <s.header>
        f<s.logo>AR</s.logo>nitures
      </s.header>
      <s.buttonContainer>
        <s.button to="/">Home</s.button>
        {options.map((op) => (
          <s.button key={op} to={`/${op}`}>
            {op}
          </s.button>
        ))}
        <s.button to="/signup">Sign Up</s.button>
        <s.button to="/login">Log in</s.button>
        <s.button to="/basket">
          <RiShoppingCart2Line size={32} />
        </s.button>
      </s.buttonContainer>
    </s.headerContainer>
  );
};
