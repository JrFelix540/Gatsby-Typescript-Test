import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Form } from "./Form";
import { server } from "../../tests/__mocks__/server";
import { rest } from "msw";

describe("Tests Form", () => {
  test("tests success", async () => {
    render(<Form />);
    await userEvent.type(screen.getByRole("textbox"), "ray skywalker");
    fireEvent.click(screen.getByRole("button"));
    expect(await screen.findByText("success")).toBeVisible();
  });
  test("tests failure", async () => {
    server.use(
      rest.post("/", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    render(<Form />);
    await userEvent.type(screen.getByRole("textbox"), "ray skywalker");
    fireEvent.click(screen.getByRole("button"));
    expect(await screen.findByText("failure")).toBeVisible();
  });
});
