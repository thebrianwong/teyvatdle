import React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SelectSearchBar from "../../components/SelectSearchBar/SelectSearchBar";
import { GameDataType } from "../../__generated__/graphql";

test("SelectSearchBar renders", () => {
  render(
    <SelectSearchBar
      value=""
      gameCompleted={false}
      selectType={GameDataType.Character}
      allowInteraction={true}
      handleClick={jest.fn()}
      handleInput={jest.fn()}
    />
  );
  const component = screen.getByRole("searchbox");
  expect(component).toBeInTheDocument();
});

test("Clicks are handled", () => {
  const clickMock = jest.fn();
  render(
    <SelectSearchBar
      value=""
      gameCompleted={false}
      selectType={GameDataType.Character}
      allowInteraction={true}
      handleClick={clickMock}
      handleInput={jest.fn()}
    />
  );
  const inputElement = screen.getByRole("searchbox");
  act(() => {
    inputElement.focus();
    userEvent.click(inputElement);
    userEvent.click(inputElement);
  });
  expect(clickMock).toHaveBeenCalledTimes(3);
});

test("Keyboard input is handled", () => {
  const keyboardMock = jest.fn();
  render(
    <SelectSearchBar
      value=""
      gameCompleted={false}
      selectType={GameDataType.Character}
      allowInteraction={true}
      handleClick={jest.fn()}
      handleInput={keyboardMock}
    />
  );
  const inputElement = screen.getByRole("searchbox");
  inputElement.focus();
  act(() => {
    userEvent.keyboard("Lumine");
  });
  expect(keyboardMock).toHaveBeenCalledTimes(6);
});

test("The input's value is passed to it from its parent", () => {
  render(
    <SelectSearchBar
      value="Lumine"
      gameCompleted={false}
      selectType={GameDataType.Character}
      allowInteraction={true}
      handleClick={jest.fn()}
      handleInput={jest.fn()}
    />
  );
  const input = screen.getByRole("searchbox");
  expect(input).toHaveValue("Lumine");
});

describe("Placeholder text varies based on selectType", () => {
  test("character", () => {
    render(
      <SelectSearchBar
        value=""
        gameCompleted={false}
        selectType={GameDataType.Character}
        allowInteraction={true}
        handleClick={jest.fn()}
        handleInput={jest.fn()}
      />
    );
    const input = screen.getByPlaceholderText("Paimon...?");
    expect(input).toBeInTheDocument();
  });
  test("weapon", () => {
    render(
      <SelectSearchBar
        value=""
        gameCompleted={false}
        selectType={GameDataType.Weapon}
        allowInteraction={true}
        handleClick={jest.fn()}
        handleInput={jest.fn()}
      />
    );
    const input = screen.getByPlaceholderText("Debate Club...?");
    expect(input).toBeInTheDocument();
  });
  test("food", () => {
    render(
      <SelectSearchBar
        value=""
        gameCompleted={false}
        selectType={GameDataType.Food}
        allowInteraction={true}
        handleClick={jest.fn()}
        handleInput={jest.fn()}
      />
    );
    const input = screen.getByPlaceholderText("Sweet Madame...?");
    expect(input).toBeInTheDocument();
  });
});

test("The input is disabled when the game is completed", () => {
  render(
    <SelectSearchBar
      value=""
      gameCompleted={true}
      selectType={GameDataType.Character}
      allowInteraction={true}
      handleClick={jest.fn()}
      handleInput={jest.fn()}
    />
  );
  const input = screen.getByRole("searchbox");
  expect(input).toBeDisabled();
});

test("The input's click and keyboard handlers won't be called if the game is complete", () => {
  const clickMock = jest.fn();
  const keyboardMock = jest.fn();
  render(
    <SelectSearchBar
      value=""
      gameCompleted={true}
      selectType={GameDataType.Character}
      allowInteraction={true}
      handleClick={clickMock}
      handleInput={keyboardMock}
    />
  );
  const input = screen.getByRole("searchbox");
  act(() => {
    userEvent.click(input);
    input.focus();
    userEvent.keyboard("Lumine");
  });
  expect(clickMock).not.toHaveBeenCalled();
  expect(keyboardMock).not.toHaveBeenCalled();
});
