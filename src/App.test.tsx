import { screen, waitFor } from "@testing-library/react";
import App from "./App";
import { render } from "./test-utils/test-utils";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("should render input events", () => {
  test("should render title", () => {
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
  it("initial value of total should be zero", async () => {
    render(<App />);
    const iconBtn = await screen.findAllByLabelText("add to favorites", {
      selector: "button",
    });
    const basketTotal = await screen.findByTestId("badge");
    console.log("basketTotal", basketTotal.textContent);
    await waitFor(() => expect(basketTotal).toBeInTheDocument());
    expect(basketTotal.textContent).toHaveProperty("0");
    userEvent.click(iconBtn[0]);
  });
  it.only("initial value should be changed on button click", async () => {
    render(<App />);
    const iconBtn = await screen.findAllByLabelText("add to favorites", {
      selector: "button",
    });
    const basketTotal = await screen.findByTestId("badge");
    userEvent.click(iconBtn[0]);
    console.log("basketTotal ater click", basketTotal.textContent);
    expect(basketTotal.textContent).toBe("1");
  });
});
