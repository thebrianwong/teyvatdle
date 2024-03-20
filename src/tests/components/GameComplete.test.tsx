import React from "react";
import { render, screen } from "@testing-library/react";
import GameComplete from "../../components/GameComplete/GameComplete";
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

test("GameComplete renders", () => {
  render(
    <GameComplete
      gameType={GameDataType.Character}
      selectType={GameDataType.Character}
      guesses={[]}
      answer={characterData}
    />
  );
  const header = screen.getByRole("heading", { name: "Nice Job, Traveler!" });
  const img = screen.getByAltText("A cheering and excited Paimon.");
  expect(header).toBeInTheDocument();
  expect(img).toBeInTheDocument();
});

describe("GameComplete's subtext changes based on gameType", () => {
  test("With gameType as character", () => {
    render(
      <GameComplete
        gameType={GameDataType.Character}
        selectType={GameDataType.Character}
        guesses={[]}
        answer={characterData}
      />
    );
    const characterText = screen.getByText(
      "Come back tomorrow and Paimon will have a new character for you to guess!"
    );
    expect(characterText).toBeInTheDocument();
  });

  test("With gameType as talent", () => {
    render(
      <GameComplete
        gameType={GameDataType.Talent}
        selectType={GameDataType.Character}
        guesses={[]}
        answer={characterData}
      />
    );
    const talentText = screen.getByText(
      "Come back tomorrow and Paimon will have a new talent for you to guess!"
    );
    expect(talentText).toBeInTheDocument();
  });
});
