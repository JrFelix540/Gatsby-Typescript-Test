import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import { Input } from "./Input";

function MyComponent() {
  const [value, setValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValue(event.target.value);
  };
  return (
    <div>
      <Input value={value} onChange={handleChange} />
      <span data-testid="output">{value}</span>
    </div>
  );
}

test("controlled component", async () => {
  render(<MyComponent />);

  await userEvent.type(screen.getByRole("textbox"), "34");
  expect(screen.getByRole("textbox")).toHaveValue("34");
});
