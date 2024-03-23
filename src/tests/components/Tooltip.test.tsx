import React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tooltip from "../../components/Tooltip/Tooltip";
import { GameDataType } from "../../__generated__/graphql";

test("Tooltip renders", () => {
  render(<Tooltip type={GameDataType.Character} />);
  const component = screen.getByRole("button", { name: "?" });
  expect(component).toBeInTheDocument();
});

test("Clicking the button displays the modal", () => {
  render(<Tooltip type={GameDataType.Character} />);
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
    render(<Tooltip type={GameDataType.Character} />);
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
    render(<Tooltip type={GameDataType.Weapon} />);
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
    render(<Tooltip type={GameDataType.Food} />);
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
    render(<Tooltip type={GameDataType.Talent} />);
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
    render(<Tooltip type={GameDataType.Constellation} />);
    const button = screen.getByRole("button", { name: "?" });
    act(() => {
      userEvent.click(button);
    });
    const wrong = screen.getByText(/Wrong character./);
    const correct = screen.getByText(/Correct character./);
    expect(wrong).toHaveTextContent("Red: Wrong character.");
    expect(correct).toHaveTextContent("Green: Correct character.");
  });
  test("troll", () => {
    render(<Tooltip type="troll" />);
    const button = screen.getByRole("button", { name: "?" });
    act(() => {
      userEvent.click(button);
    });
    const trollText1 = screen.getByText(
      "I ACTIVATE THE SPELL CARD KOKOMI OF GREED."
    );
    const trollText2 = screen.getByText(
      "KOKOMI OF GREED ALLOWS ME TO DRAW 2 CARDS FROM MY DECK AND ADD THEM TO MY HAND."
    );
    expect(trollText1).toBeInTheDocument();
    expect(trollText2).toBeInTheDocument();
  });
});
