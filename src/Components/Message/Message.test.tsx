import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Message } from "./Message";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addEventListener: function () {},
      removeEventListener: function () {},
    };
  };

const mockMessage = "message";

test("It displays message", () => {
  render(
    <MemoryRouter initialEntries={[`/`]}>
      <Message text={mockMessage} />
    </MemoryRouter>
  );

  const message = screen.getByText("message");
  expect(message).toBeInTheDocument();
});

test("It renders the header", () => {
  render(
    <MemoryRouter initialEntries={[`/`]}>
      <Message text={mockMessage} />
    </MemoryRouter>
  );
  const logo = screen.getByText("AR");
  const homeButton = screen.getByText("Home");
  const tableButton = screen.getByText("Table");
  const chairButton = screen.getByText("Chair");
  const lightButton = screen.getByText("Light");
  const signUpButton = screen.getByText("Sign Up");
  const loginButton = screen.getByText("Log in");
  expect(logo).toBeInTheDocument();
  expect(homeButton).toBeInTheDocument();
  expect(tableButton).toBeInTheDocument();
  expect(chairButton).toBeInTheDocument();
  expect(lightButton).toBeInTheDocument();
  expect(signUpButton).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});
