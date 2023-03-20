import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router";
import { SignUp } from "./SignUp";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addEventListener: function () {},
      removeEventListener: function () {},
    };
  };

test("Renders h1 Sign Up and all inputs fields", () => {
  render(
    <MemoryRouter initialEntries={[`/signup`]}>
      <SignUp />
    </MemoryRouter>
  );
  const header = screen.getByTestId("signup-header");
  expect(header).toBeInTheDocument();

  const input_email = screen.getByPlaceholderText("Email");
  expect(input_email).toBeInTheDocument();

  const input_pswd1 = screen.getByTestId("password1");
  expect(input_pswd1).toBeInTheDocument();

  const input_pswd2 = screen.getByTestId("password2");
  expect(input_pswd2).toBeInTheDocument();

  //   const input_password = screen.getByPlaceholderText("Password");
  //   expect(input_password).toHaveLength(2);
});
