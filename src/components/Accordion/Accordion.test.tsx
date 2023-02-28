import { act, render, screen } from "@testing-library/react";
import React from "react";
import { Accordion } from "./Accordion.component";

describe("Accordion", () => {
  test("calls callback when expanding with a data item", async () => {
    const mockFn = jest.fn();
    const dataItem = {};

    render(<Accordion onExpand={mockFn} title={"Title"} dataItem={dataItem} />);
    const button = screen.getByTestId("button");
    await act(() => button.click());
    expect(mockFn).toBeCalledWith(dataItem);
  });
});
