import React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tooltip from "../../components/Tooltip/Tooltip";

test("Tooltip renders", () => {
  render(<Tooltip type="character" />);
  const component = screen.getByRole("button", { name: "?" });
  expect(component).toBeInTheDocument();
});

test("Clicking the button displays the modal", () => {
  render(<Tooltip type="character" />);
  const button = screen.getByRole("button", { name: "?" });
  const beforeModalText = screen.queryByText(/Both answers are correct/);
  expect(beforeModalText).not.toBeInTheDocument();
  act(() => {
    userEvent.click(button);
  });
  const afterModalText = screen.getByText(/Both answers are correct/);
  expect(afterModalText).toBeInTheDocument();
});

describe("The modal content varies by type", () => {
  test("character", () => {
    render(<Tooltip type="character" />);
    const button = screen.getByRole("button", { name: "?" });
    act(() => {
      userEvent.click(button);
    });
    const wrong = screen.getByText(/Both answers are wrong./);
    const birthdayWrong = screen.getByText(
      "Birthday: Month and day are wrong."
    );
    const partial = screen.getByText(/One answer is correct./);
    const birthdayPartial = screen.getByText(
      "Birthday: Either month or day are correct."
    );
    const correct = screen.getByText(/Both answers are correct./);
    expect(wrong).toHaveTextContent("Red: Both answers are wrong.");
    expect(birthdayWrong).toBeInTheDocument();
    expect(partial).toHaveTextContent("Yellow: One answer is correct.");
    expect(birthdayPartial).toBeInTheDocument();
    expect(correct).toHaveTextContent("Green: Both answers are correct.");
  });
  test("weapon", () => {
    render(<Tooltip type="weapon" />);
    const button = screen.getByRole("button", { name: "?" });
    act(() => {
      userEvent.click(button);
    });
    const wrong = screen.getByText(/Both answers are wrong./);
    const partial = screen.getByText(/One answer is correct./);
    const correct = screen.getByText(/Both answers are correct./);
    expect(wrong).toHaveTextContent("Red: Both answers are wrong.");
    expect(partial).toHaveTextContent("Yellow: One answer is correct.");
    expect(correct).toHaveTextContent("Green: Both answers are correct.");
  });
  test("food", () => {
    render(<Tooltip type="food" />);
    const button = screen.getByRole("button", { name: "?" });
    act(() => {
      userEvent.click(button);
    });
    const wrong = screen.getByText(/Both answers are wrong./);
    const partial = screen.getByText(/One answer is correct./);
    const correct = screen.getByText(/Both answers are correct./);
    expect(wrong).toHaveTextContent("Red: Both answers are wrong.");
    expect(partial).toHaveTextContent("Yellow: One answer is correct.");
    expect(correct).toHaveTextContent("Green: Both answers are correct.");
  });
  test("talent", () => {
    render(<Tooltip type="talent" />);
    const button = screen.getByRole("button", { name: "?" });
    act(() => {
      userEvent.click(button);
    });
    const wrong = screen.getByText(/Wrong character./);
    const correct = screen.getByText(/Correct character./);
    expect(wrong).toHaveTextContent("Red: Wrong character.");
    expect(correct).toHaveTextContent("Green: Correct character.");
  });
  test("constellation", () => {
    render(<Tooltip type="constellation" />);
    const button = screen.getByRole("button", { name: "?" });
    act(() => {
      userEvent.click(button);
    });
    const wrong = screen.getByText(/Wrong character./);
    const correct = screen.getByText(/Correct character./);
    expect(wrong).toHaveTextContent("Red: Wrong character.");
    expect(correct).toHaveTextContent("Green: Correct character.");
  });
});
