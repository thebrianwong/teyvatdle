import React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SelectMenu from "../../components/SelectMenu/SelectMenu";
import {
  CharacterData,
  GameDataType,
  Gender,
  GenshinElement,
  Height,
  Region,
  Stat,
  WeaponType,
} from "../../__generated__/graphql";

const characterData: CharacterData[] = [
  {
    characterId: "1",
    characterName: "Paimon",
    gender: Gender.Female,
    height: Height.Short,
    rarity: 5,
    region: Region.Mondstadt,
    element: GenshinElement.Anemo,
    weaponType: WeaponType.Catalyst,
    ascensionStat: Stat.Atk,
    birthday: null,
    characterImageUrl: "dummy",
    characterCorrectImageUrl: "Correct!",
    characterWrongImageUrl: "Wrong...",
    localSpecialty: "dummy",
    localSpecialtyImageUrl: "dummy",
    enhancementMaterial: "dummy",
    enhancementMaterialImageUrl: "dummy",
    ascensionBossMaterial: "dummy",
    ascensionBossMaterialImageUrl: "dummy",
    talentBossMaterial: "dummy",
    talentBossMaterialImageUrl: "dummy",
    talentBook: ["dummy"],
    talentBookImageUrl: ["dummy"],
  },
  {
    characterId: "2",
    characterName: "Lumine",
    gender: Gender.Female,
    height: Height.Medium,
    rarity: 5,
    region: Region.Mondstadt,
    element: GenshinElement.Anemo,
    weaponType: WeaponType.Catalyst,
    ascensionStat: Stat.Atk,
    birthday: null,
    characterImageUrl: "dummy",
    characterCorrectImageUrl: "Correct!",
    characterWrongImageUrl: "Wrong...",
    localSpecialty: "dummy",
    localSpecialtyImageUrl: "dummy",
    enhancementMaterial: "dummy",
    enhancementMaterialImageUrl: "dummy",
    ascensionBossMaterial: "dummy",
    ascensionBossMaterialImageUrl: "dummy",
    talentBossMaterial: "dummy",
    talentBossMaterialImageUrl: "dummy",
    talentBook: ["dummy"],
    talentBookImageUrl: ["dummy"],
  },
  {
    characterId: "3",
    characterName: "Aether",
    gender: Gender.Male,
    height: Height.Medium,
    rarity: 5,
    region: Region.Mondstadt,
    element: GenshinElement.Anemo,
    weaponType: WeaponType.Catalyst,
    ascensionStat: Stat.Atk,
    birthday: null,
    characterImageUrl: "dummy",
    characterCorrectImageUrl: "Correct!",
    characterWrongImageUrl: "Wrong...",
    localSpecialty: "dummy",
    localSpecialtyImageUrl: "dummy",
    enhancementMaterial: "dummy",
    enhancementMaterialImageUrl: "dummy",
    ascensionBossMaterial: "dummy",
    ascensionBossMaterialImageUrl: "dummy",
    talentBossMaterial: "dummy",
    talentBossMaterialImageUrl: "dummy",
    talentBook: ["dummy"],
    talentBookImageUrl: ["dummy"],
  },
];

test("SelectMenu renders", () => {
  render(
    <SelectMenu
      selectType={GameDataType.Character}
      data={characterData}
      guesses={[]}
      gameCompleted={false}
      allowInteraction={true}
      handleGuess={jest.fn()}
    />
  );
  const component = screen.getByRole("searchbox");
  expect(component).toBeInTheDocument();
});

test("Clicking on the search bar shows the select options", () => {
  render(
    <SelectMenu
      selectType={GameDataType.Character}
      data={characterData}
      guesses={[]}
      gameCompleted={false}
      allowInteraction={true}
      handleGuess={jest.fn()}
    />
  );
  const listBeforeClick = screen.queryByRole("list");
  expect(listBeforeClick).not.toBeInTheDocument();
  const searchBar = screen.getByRole("searchbox");
  act(() => {
    userEvent.click(searchBar);
  });
  const listAfterClick = screen.getByRole("list");
  expect(listAfterClick).toBeInTheDocument();
});

describe("Selecting a select option...", () => {
  const handleGuessMock = jest.fn();

  test("...calls handleGuess", () => {
    render(
      <SelectMenu
        selectType={GameDataType.Character}
        data={characterData}
        guesses={[]}
        gameCompleted={false}
        allowInteraction={true}
        handleGuess={handleGuessMock}
      />
    );
    const searchBar = screen.getByRole("searchbox");
    act(() => {
      userEvent.click(searchBar);
    });
    const listItem = screen.getAllByRole("listitem")[0];
    act(() => {
      userEvent.click(listItem);
    });
    expect(handleGuessMock).toBeCalledTimes(1);
  });
  test("...hides the select options", () => {
    render(
      <SelectMenu
        selectType={GameDataType.Character}
        data={characterData}
        guesses={[]}
        gameCompleted={false}
        allowInteraction={true}
        handleGuess={handleGuessMock}
      />
    );
    const searchBar = screen.getByRole("searchbox");
    act(() => {
      userEvent.click(searchBar);
    });
    const listItem = screen.getAllByRole("listitem")[0];
    act(() => {
      userEvent.click(listItem);
    });
    const list = screen.queryByRole("list");
    expect(list).not.toBeInTheDocument();
  });
  test("...resets the search value", () => {
    render(
      <SelectMenu
        selectType={GameDataType.Character}
        data={characterData}
        guesses={[]}
        gameCompleted={false}
        allowInteraction={true}
        handleGuess={handleGuessMock}
      />
    );
    const searchBar = screen.getByRole("searchbox");
    act(() => {
      userEvent.click(searchBar);
      userEvent.keyboard("Paimon");
    });
    expect(searchBar).toHaveAttribute("value", "Paimon");
    const listItem = screen.getAllByRole("listitem")[0];
    act(() => {
      userEvent.click(listItem);
    });
    expect(searchBar).toHaveAttribute("value", "");
  });
});
