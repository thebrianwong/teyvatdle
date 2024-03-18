import React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SelectOptions from "../../components/SelectOptions/SelectOptions";
import CharacterAPIData from "../../types/data/characterAPIData.type";
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

const characterDataList: CharacterData[] = [
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

const characterGuess: CharacterData[] = [
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
];

test("SelectOptions renders", () => {
  render(
    <SelectOptions
      dataList={characterDataList}
      dataType={GameDataType.Character}
      filterValue=""
      guesses={[]}
      handleGuess={jest.fn()}
    />
  );
  const component = screen.getByRole("list");
  expect(component).toBeInTheDocument();
});

test("SelectOptions contains items with li, img, and p elements", () => {
  render(
    <SelectOptions
      dataList={characterDataList}
      dataType={GameDataType.Character}
      filterValue=""
      guesses={[]}
      handleGuess={jest.fn()}
    />
  );
  const li = screen.getAllByRole("listitem");
  const img = screen.getAllByRole("img");
  const p = screen.getAllByText(/.+/);
  expect(li.length).toBeGreaterThan(0);
  expect(img.length).toBeGreaterThan(0);
  expect(p.length).toBeGreaterThan(0);
});

test("If there is no filterValue or guesses, everything from dataList is rendered", () => {
  render(
    <SelectOptions
      dataList={characterDataList}
      dataType={GameDataType.Character}
      filterValue=""
      guesses={[]}
      handleGuess={jest.fn()}
    />
  );
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toBe(3);
});

test("Only items that contain the filterValue are rendered", () => {
  render(
    <SelectOptions
      dataList={characterDataList}
      dataType={GameDataType.Character}
      filterValue="e"
      guesses={[]}
      handleGuess={jest.fn()}
    />
  );
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toBe(2);
});

test("filterValue is case insensitive", () => {
  render(
    <SelectOptions
      dataList={characterDataList}
      dataType={GameDataType.Character}
      filterValue="E"
      guesses={[]}
      handleGuess={jest.fn()}
    />
  );
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toBe(2);
});

test("filterValue ignores spaces in the beginning and end", () => {
  render(
    <SelectOptions
      dataList={characterDataList}
      dataType={GameDataType.Character}
      filterValue=" e "
      guesses={[]}
      handleGuess={jest.fn()}
    />
  );
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toBe(2);
});

test("Guesses aren't rendered", () => {
  render(
    <SelectOptions
      dataList={characterDataList}
      dataType={GameDataType.Character}
      filterValue=""
      guesses={characterGuess}
      handleGuess={jest.fn()}
    />
  );
  const listItems = screen.getAllByRole("listitem");
  const lumine = screen.queryByText("Lumine");
  expect(listItems.length).toBe(2);
  expect(lumine).toBeNull();
});

test("filterValue and guesses can be combined together to filter further down", () => {
  render(
    <SelectOptions
      dataList={characterDataList}
      dataType={GameDataType.Character}
      filterValue="e"
      guesses={characterGuess}
      handleGuess={jest.fn()}
    />
  );
  const listItems = screen.getAllByRole("listitem");
  const aether = screen.getByText("Aether");
  const lumine = screen.queryByText("Lumine");
  const paimon = screen.queryByText("Paimon");
  expect(listItems.length).toBe(1);
  expect(aether).toBeInTheDocument();
  expect(lumine).not.toBeInTheDocument();
  expect(paimon).not.toBeInTheDocument();
});

test("A special item is rendered if there are no valid items", () => {
  render(
    <SelectOptions
      dataList={characterDataList}
      dataType={GameDataType.Character}
      filterValue="Dainsleif"
      guesses={characterGuess}
      handleGuess={jest.fn()}
    />
  );
  const listItems = screen.getAllByRole("listitem");
  const specialItem = screen.getByText("Paimon doesn't remember that one...");
  expect(listItems.length).toBe(1);
  expect(specialItem).toBeInTheDocument();
});

test("Clicking on an item calls handleGuess", () => {
  const handleClick = jest.fn();
  render(
    <SelectOptions
      dataList={characterDataList}
      dataType={GameDataType.Character}
      filterValue=""
      guesses={[]}
      handleGuess={handleClick}
    />
  );
  const listItems = screen.getAllByRole("listitem");
  const listItem = listItems[0];
  act(() => {
    userEvent.click(listItem);
  });
  expect(handleClick).toHaveBeenCalled();
});

test("Clicking on the special item doesn't call handleGuess", () => {
  const handleClick = jest.fn();
  render(
    <SelectOptions
      dataList={characterDataList}
      dataType={GameDataType.Character}
      filterValue="Dainsleif"
      guesses={[]}
      handleGuess={handleClick}
    />
  );
  const listItems = screen.getAllByRole("listitem");
  const listItem = listItems[0];
  act(() => {
    userEvent.click(listItem);
  });
  expect(handleClick).not.toHaveBeenCalled();
});
