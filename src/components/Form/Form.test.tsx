import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import * as Network from "../../utils/network";
import { Form } from "./Form";

jest.mock("../../utils/network");

const mockedNetwork = Network as jest.Mocked<typeof Network>;

describe("Tests Form", () => {
  test("tests success", async () => {
    render(<Form />);
    await userEvent.type(screen.getByRole("textbox"), "Luke Skywalker");
    mockedNetwork.sendNetlifyFormRequest.mockResolvedValueOnce({
      ok: true,
    } as Response);

    fireEvent.click(screen.getByRole("button"));
    expect(mockedNetwork.sendNetlifyFormRequest).toBeCalledTimes(1);
    expect(await screen.findByText("success")).toBeVisible();
  });
  test("tests failure", async () => {
    render(<Form />);
    await userEvent.type(screen.getByRole("textbox"), "Luke Skywalker");
    mockedNetwork.sendNetlifyFormRequest.mockResolvedValueOnce({
      ok: false,
    } as Response);
    fireEvent.click(screen.getByRole("button"));
    expect(await screen.findByText("failure")).toBeVisible();
  });
  test("Tests correct payload", async () => {
    render(<Form />);
    await userEvent.type(screen.getByRole("textbox"), "boom@clap.com");
    mockedNetwork.sendNetlifyFormRequest.mockResolvedValueOnce({
      ok: true,
    } as Response);
    fireEvent.click(screen.getByRole("button"));
    expect(await screen.findByText("success")).toBeVisible();
    expect(mockedNetwork.sendNetlifyFormRequest.mock.lastCall[1]).toStrictEqual(
      {
        email: "boom@clap.com",
      }
    );
  });
});
