import { render, screen } from "@testing-library/react";
import { useState } from "react";

import { MemoryRouter } from "react-router";
import { Login } from "./Login";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addEventListener: function () {},
      removeEventListener: function () {},
    };
  };

test("Renders h1 Login and all inputs fields", () => {
  const [customerId, setCustomerId] = useState<number | null>(1234);
  render(
    <MemoryRouter initialEntries={[`/login`]}>
      <Login setCustomerId={setCustomerId} />
    </MemoryRouter>
  );
  const header = screen.getByTestId("login-header");
  expect(header).toBeInTheDocument();

  const input_email = screen.getByPlaceholderText("Email");
  expect(input_email).toBeInTheDocument();

  const input_pswd = screen.getByPlaceholderText("Password");
  expect(input_pswd).toBeInTheDocument();
});
