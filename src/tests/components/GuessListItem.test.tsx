import { render, screen } from "@testing-library/react";
import React from "react";
import GuessListItem from "../../components/GuessListItem/GuessListItem";
import {
  CharacterData,
  ConstellationData,
  Gender,
  GenshinElement,
  Height,
  Region,
  Stat,
  TalentData,
  TalentType,
  WeaponType,
} from "../../__generated__/graphql";

const characterData: CharacterData = {
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
};

const correctTalentData: TalentData = {
  talentId: "1",
  talentName: "Eat",
  talentType: TalentType.NormalAttack,
  talentImageUrl: "dummy",
  characterName: "Paimon",
  characterImageUrl: "dummy",
};

const wrongTalentData: TalentData = {
  talentId: "1",
  talentName: "Scary Cubes",
  talentType: TalentType.NormalAttack,
  talentImageUrl: "dummy",
  characterName: "Unknown God",
  characterImageUrl: "dummy",
};

const constellationData: ConstellationData = {
  constellationId: "1",
  constellationName: "Sleep",
  constellationLevel: 1,
  constellationImageUrl: "dummy",
  characterName: "Paimon",
  characterImageUrl: "dummy",
};

describe("GuessListItem renders", () => {
  test("With talent data", () => {
    render(
      <GuessListItem itemData={characterData} answer={correctTalentData} />
    );
    const listItem = screen.getByRole("listitem");
    const characterName = screen.getByText("Paimon");
    expect(listItem).toBeInTheDocument();
    expect(characterName).toBeInTheDocument();
  });

  test("With constellation data", () => {
    render(
      <GuessListItem itemData={characterData} answer={constellationData} />
    );
    const listItem = screen.getByRole("listitem");
    const characterName = screen.getByText("Paimon");
    expect(listItem).toBeInTheDocument();
    expect(characterName).toBeInTheDocument();
  });
});

describe("The image alt text depends on the correct or a wrong answer", () => {
  test("Correct answer", () => {
    render(
      <GuessListItem itemData={characterData} answer={correctTalentData} />
    );
    const correctAltText = screen.getByAltText(
      "One of Paimon's Paintings indicating the correct answer."
    );
    expect(correctAltText).toBeInTheDocument();
  });

  test("Wrong answer", () => {
    render(<GuessListItem itemData={characterData} answer={wrongTalentData} />);
    const wrongAltText = screen.getByAltText(
      "One of Paimon's Paintings indicating a wrong answer."
    );
    expect(wrongAltText).toBeInTheDocument();
  });
});

describe("The image src depends on the correct or a wrong answer", () => {
  test("Correct answer", () => {
    render(
      <GuessListItem itemData={characterData} answer={correctTalentData} />
    );
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "Correct!");
  });

  test("Wrong answer", () => {
    render(<GuessListItem itemData={characterData} answer={wrongTalentData} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "Wrong...");
  });
});
