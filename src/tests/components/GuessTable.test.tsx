import React from "react";
import { render, screen, within } from "@testing-library/react";
import GuessTable from "../../components/GuessTable/GuessTable";
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

const characterData: CharacterData = {
  characterId: "4",
  characterName: "Unknown God",
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
};

const characterGuesses: CharacterData[] = [
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
  },
];

test("GuessTable renders", () => {
  render(
    <GuessTable
      tableType={GameDataType.Character}
      guessesProp={[]}
      answer={characterData}
      complete={false}
    />
  );
  const component = screen.getByRole("table");
  expect(component).toBeInTheDocument();
});

test("The number of rows is determined by the number of guess", () => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
  render(
    <GuessTable
      tableType={GameDataType.Character}
      guessesProp={characterGuesses}
      answer={characterData}
      complete={false}
    />
  );
  // 2 rowgroup's, one for table header and another for table body
  const tableBody = screen.getAllByRole("rowgroup")[1];
  const rows = within(tableBody).getAllByRole("row");
  expect(rows.length).toBe(3);
});
