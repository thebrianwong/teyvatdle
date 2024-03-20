import React from "react";
import { render, screen } from "@testing-library/react";
import GuessList from "../../components/GuessList/GuessList";
import TalentAPIData from "../../types/data/talentAPIData.type";
import CharacterAPIData from "../../types/data/characterAPIData.type";
import {
  CharacterData,
  Gender,
  GenshinElement,
  Height,
  Region,
  Stat,
  TalentData,
  TalentType,
  WeaponType,
} from "../../__generated__/graphql";

const guesses: CharacterData[] = [
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
];

const answer: TalentData = {
  talentId: "1",
  talentName: "Eat",
  talentType: TalentType.NormalAttack,
  talentImageUrl: "dummy talent",
  characterName: "Paimon",
  characterImageUrl: "dummy",
};

test("GuessList renders", () => {
  render(<GuessList guesses={[]} answer={answer} />);
  const component = screen.getByRole("list");
  expect(component).toBeInTheDocument();
});

test("The length of guess dictates the number of GuessListItems", () => {
  render(<GuessList guesses={guesses} answer={answer} />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toBe(2);
});
