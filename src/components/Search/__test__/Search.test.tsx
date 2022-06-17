import { screen, waitFor } from "@testing-library/react";
import Search from "../Search";
import { render } from "../../../test-utils/test-utils";
import "@testing-library/jest-dom";

const mockedOnChange = jest.fn();

describe("input should be filled with title", () => {
  test("input should be empty initially", async () => {
    render(<Search title="" onChangeHadler={mockedOnChange} />);
    const input = screen.getByRole("textbox", { name: /search/i });
    expect(input).toHaveValue("");
    await waitFor(() => expect(input).toHaveValue(""));
  });
});
