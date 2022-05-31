import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { Button as TestButton } from "./Button";

describe("Button Tests", () => {
  it("Button does onClick event", () => {
    const handleClick = jest.fn();
    render(<TestButton onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
