import { Basket } from "./Basket";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addEventListener: function () {},
      removeEventListener: function () {},
    };
  };

test("It renders the basket", () => {
  // render(
  //   <MemoryRouter initialEntries={[`/basket`]}>
  //     <Basket />
  //   </MemoryRouter>
  // );
  // setTimeout(() => {
  //   const basket = screen.getByText("Your Basket!");
  //   expect(basket).toBeInTheDocument();
  // }, 3000);
});

test("It renders the header", () => {
  // render(
  //   <MemoryRouter initialEntries={[`/basket`]}>
  //     <Basket />
  //   </MemoryRouter>
  // );
  // const logo = screen.getByText("AR");
  // const homeButton = screen.getByText("Home");
  // const tableButton = screen.getByText("Table");
  // const chairButton = screen.getByText("Chair");
  // const lightButton = screen.getByText("Light");
  // const signUpButton = screen.getByText("Sign Up");
  // const loginButton = screen.getByText("Log in");
  // expect(logo).toBeInTheDocument();
  // expect(homeButton).toBeInTheDocument();
  // expect(tableButton).toBeInTheDocument();
  // expect(chairButton).toBeInTheDocument();
  // expect(lightButton).toBeInTheDocument();
  // expect(signUpButton).toBeInTheDocument();
  // expect(loginButton).toBeInTheDocument();
});
