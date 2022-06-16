import { screen } from "@testing-library/react";
import App from "./App";
import { render } from "./test-utils/test-utils";
import "@testing-library/jest-dom";

test("should render title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Public Events/i);
  expect(titleElement).toBeInTheDocument();
});
