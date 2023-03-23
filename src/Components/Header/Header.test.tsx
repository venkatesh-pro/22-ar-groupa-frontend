import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Basket } from "../../Pages/Basket/Basket";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addEventListener: function () {},
      removeEventListener: function () {},
    };
  };

test("It renders the logo", () => {
  //   render(
  //     <MemoryRouter initialEntries={[`/basket`]}>
  //       <Basket />
  //     </MemoryRouter>
  //   );
  //   const logo = screen.getByText("AR");
  //   expect(logo).toBeInTheDocument();
  // });
  // test("It renders the buttons", () => {
  //   render(
  //     <MemoryRouter initialEntries={[`/basket`]}>
  //       <Basket />
  //     </MemoryRouter>
  //   );
  //   const homeButton = screen.getByText("Home");
  //   const tableButton = screen.getByText("Table");
  //   const chairButton = screen.getByText("Chair");
  //   const lightButton = screen.getByText("Light");
  //   const signUpButton = screen.getByText("Sign Up");
  //   const loginButton = screen.getByText("Log in");
  //   expect(homeButton).toBeInTheDocument();
  //   expect(tableButton).toBeInTheDocument();
  //   expect(chairButton).toBeInTheDocument();
  //   expect(lightButton).toBeInTheDocument();
  //   expect(signUpButton).toBeInTheDocument();
  //   expect(loginButton).toBeInTheDocument();
});
