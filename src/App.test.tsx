import { screen } from "@testing-library/react";
import App from "./App";
import { render } from "./test-utils/test-utils";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

test.skip("should render title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Public Events/i);
  expect(titleElement).toBeInTheDocument();
});

test("should render search input", () => {
  render(<App />);
  const input = screen.getByRole("textbox", { name: /search/i });
  expect(input).toHaveValue("");
  userEvent.type(input, "test");
  expect(input).toHaveValue("test");
});
