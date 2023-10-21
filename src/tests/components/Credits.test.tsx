import React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Credits from "../../components/Credits/Credits";

test("Credits renders", () => {
  render(<Credits />);
  const component = screen.getByRole("button", { name: "Credits" });
  expect(component).toBeInTheDocument();
});

test("Clicking the Credits button displays the Credits modal", () => {
  render(<Credits />);
  const button = screen.getByRole("button", { name: "Credits" });
  act(() => {
    userEvent.click(button);
  });
  const modalTitle = screen.getByRole("heading", { name: "Credits" });
  const closeButton = screen.getByRole("button", { name: "X" });
  expect(modalTitle).toBeInTheDocument();
  expect(closeButton).toBeInTheDocument();
});

test("Clicking the close button closes the Credits modal", () => {
  render(<Credits />);
  const button = screen.getByRole("button", { name: "Credits" });
  act(() => {
    userEvent.click(button);
  });
  const closeButton = screen.getByRole("button", { name: "X" });
  act(() => {
    userEvent.click(closeButton);
  });
  const modalTitle = screen.queryByRole("heading", { name: "Credits" });
  expect(modalTitle).toBeNull();
});

test("Hitting esc on the keyboard closes the Credits modal", () => {
  render(<Credits />);
  const button = screen.getByRole("button", { name: "Credits" });
  act(() => {
    userEvent.click(button);
  });
  act(() => {
    userEvent.keyboard("{Escape}");
  });
  const modalTitle = screen.queryByRole("heading", { name: "Credits" });
  expect(modalTitle).toBeNull();
});
