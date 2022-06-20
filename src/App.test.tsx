import { screen, waitFor } from "@testing-library/react";
import App from "./App";
import { render } from "./test-utils/test-utils";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("should render input events", () => {
  test.skip("should render title", () => {
    render(<App />);
    const titleElement = screen.getByText(/Public Events/i);
    expect(titleElement).toBeInTheDocument();
  });

  test.skip("should render search input", () => {
    render(<App />);
    const input = screen.getByRole("textbox", { name: /search/i });
    expect(input).toHaveValue("");
    userEvent.type(input, "test");
    expect(input).toHaveValue("test");
  });
});

describe("add items to basket", () => {
  it("should verify mock data fetch", async () => {
    render(<App />);
    const iconBtn = await screen.findAllByLabelText("add to favorites", {
      selector: "button",
    });
    await waitFor(() => expect(iconBtn).toBeTruthy());
    await waitFor(() => expect(iconBtn).toHaveLength(2));
  });
});
