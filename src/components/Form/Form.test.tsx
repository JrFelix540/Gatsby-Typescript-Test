import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { encode } from "../../utils/network";
import { Form } from "./Form";

jest.mock("../../utils/network", () => ({
  sendNetlifyFormRequest: jest.fn(() => Promise.resolve({ ok: true })),
}));

describe("Tests Form", () => {
  test("tests success", async () => {
    render(<Form />);
    await userEvent.type(screen.getByRole("textbox"), "Luke Skywalker");
    fireEvent.click(screen.getByRole("button"));
    expect(await screen.findByText("success")).toBeVisible();
  });
  test("tests failure", async () => {
    render(<Form />);
    jest
      .spyOn(global, "fetch")
      .mockImplementation(
        jest.fn(() => Promise.resolve({ ok: false })) as jest.Mock
      );

    await userEvent.type(screen.getByRole("textbox"), "boom@clap.com");
    fireEvent.click(screen.getByRole("button"));
    expect(global.fetch).toHaveBeenCalledWith(
      "/",
      expect.objectContaining({
        method: "POST",
        body: encode({
          "form-name": "contact",
          email: "boom@clap.com",
        }),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
    );
    expect(await screen.findByText("failure")).toBeVisible();
  });
});
