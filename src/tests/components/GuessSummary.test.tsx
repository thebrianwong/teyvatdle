import React from "react";
import { render, screen } from "@testing-library/react";
import GuessSummary from "../../components/GuessSummary/GuessSummary";
import {
  CharacterData,
  FoodData,
  FoodType,
  GameDataType,
  Gender,
  GenshinElement,
  Height,
  Region,
  Stat,
  WeaponData,
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

const weaponData: WeaponData[] = [
  {
    weaponId: "1",
    weaponName: "Cubes",
    rarity: 5,
    weaponType: WeaponType.Catalyst,
    subStat: Stat.Atk,
    weaponImageUrl: "dummy",
    weaponDomainMaterial: "dummy",
    weaponDomainMaterialImageUrl: "dummy",
    eliteEnemyMaterial: "dummy",
    eliteEnemyMaterialImageUrl: "dummy",
    commonEnemyMaterial: "dummy",
    commonEnemyMaterialImageUrl: "dummy",
    gacha: true,
  },
  {
    weaponId: "2",
    weaponName: "Debate CLub",
    rarity: 3,
    weaponType: WeaponType.Claymore,
    subStat: Stat.Atk,
    weaponImageUrl: "dummy",
    weaponDomainMaterial: "dummy",
    weaponDomainMaterialImageUrl: "dummy",
    eliteEnemyMaterial: "dummy",
    eliteEnemyMaterialImageUrl: "dummy",
    commonEnemyMaterial: "dummy",
    commonEnemyMaterialImageUrl: "dummy",
    gacha: true,
  },
];

const foodData: FoodData[] = [
  {
    foodId: "1",
    foodName: "Paimon (Emergency Food)",
    rarity: 5,
    foodType: FoodType.AdventurersDishes,
    specialDish: false,
    purchasable: false,
    recipe: false,
    event: true,
    foodImageUrl: "dummy",
  },
  {
    foodId: "2",
    foodName: "One of Diona's Drinks",
    rarity: 5,
    foodType: FoodType.AdventurersDishes,
    specialDish: false,
    purchasable: false,
    recipe: false,
    event: true,
    foodImageUrl: "dummy",
  },
];

test("GuessesSummary renders", () => {
  render(
    <GuessSummary
      gameType={GameDataType.Character}
      selectType={GameDataType.Character}
      guesses={[]}
      answer={characterData[0]}
    />
  );
  const component = screen.getByRole("heading", { name: "Summary" });
  expect(component).toBeInTheDocument();
});

describe("The corresponding header emojis are rendered based on selectType", () => {
  test("character", () => {
    render(
      <GuessSummary
        gameType={GameDataType.Character}
        selectType={GameDataType.Character}
        guesses={[]}
        answer={characterData[0]}
      />
    );
    const characterHeader1 = screen.getByText("ㅤ♂️✨🔥📊🌸😈ㅤ");
    const characterHeader2 = screen.getByText("🧑📏🌐⚔️💪👾📖🎂");
    expect(characterHeader1).toBeInTheDocument();
    expect(characterHeader2).toBeInTheDocument();
  });
  test("weapon", () => {
    render(
      <GuessSummary
        gameType={GameDataType.Weapon}
        selectType={GameDataType.Weapon}
        guesses={[]}
        answer={weaponData[0]}
      />
    );
    const weaponHeader1 = screen.getByText("ㅤ✨📊😈ㅤ");
    const weaponHeader2 = screen.getByText("🗡️⚔️💪👾🎰");
    expect(weaponHeader1).toBeInTheDocument();
    expect(weaponHeader2).toBeInTheDocument();
  });
  test("food", () => {
    render(
      <GuessSummary
        gameType={GameDataType.Food}
        selectType={GameDataType.Food}
        guesses={[]}
        answer={foodData[0]}
      />
    );
    const foodHeader1 = screen.getByText("ㅤ✨ㅤㅤㅤㅤㅤ");
    const foodHeader2 = screen.getByText("🍽️🍴🎀🏪✍️🎊");
    expect(foodHeader1).toBeInTheDocument();
    expect(foodHeader2).toBeInTheDocument();
  });
});

describe("The number of squares is based on the gameType", () => {
  test("character", () => {
    render(
      <GuessSummary
        gameType={GameDataType.Character}
        selectType={GameDataType.Character}
        guesses={characterData}
        answer={characterData[0]}
      />
    );
    const guessRow1 = screen.getByText("🟩🟩🟩🟩🟩🟩🟩🟩");
    const guessRow2 = screen.getByText("🟥🟨🟩🟩🟩🟩🟩🟩");
    const guessRow3 = screen.getByText("🟥🟥🟩🟩🟩🟩🟩🟩");
    expect(guessRow1).toBeInTheDocument();
    expect(guessRow2).toBeInTheDocument();
    expect(guessRow3).toBeInTheDocument();
  });
  test("weapon", () => {
    render(
      <GuessSummary
        gameType={GameDataType.Weapon}
        selectType={GameDataType.Weapon}
        guesses={weaponData}
        answer={weaponData[0]}
      />
    );
    const guessRow1 = screen.getByText("🟩🟩🟩🟩🟩");
    const guessRow2 = screen.getByText("🟥🟥🟩🟩🟩");
    expect(guessRow1).toBeInTheDocument();
    expect(guessRow2).toBeInTheDocument();
  });
  test("food", () => {
    render(
      <GuessSummary
        gameType={GameDataType.Food}
        selectType={GameDataType.Food}
        guesses={foodData}
        answer={foodData[0]}
      />
    );
    const guessRow1 = screen.getByText("🟩🟩🟩🟩🟩🟩");
    const guessRow2 = screen.getByText("🟥🟩🟩🟩🟩🟩");
    expect(guessRow1).toBeInTheDocument();
    expect(guessRow2).toBeInTheDocument();
  });
});

describe("The summary is different for talent and constellation", () => {
  test("talent", () => {
    render(
      <GuessSummary
        gameType={GameDataType.Talent}
        selectType={GameDataType.Character}
        guesses={characterData}
        answer={characterData[0]}
      />
    );
    const breakdown = screen.getByText("2x 🟥 1x 🟩");
    expect(breakdown).toBeInTheDocument();
  });
  test("constellation", () => {
    render(
      <GuessSummary
        gameType={GameDataType.Constellation}
        selectType={GameDataType.Character}
        guesses={characterData}
        answer={characterData[0]}
      />
    );
    const breakdown = screen.getByText("2x 🟥 1x 🟩");
    expect(breakdown).toBeInTheDocument();
  });
});

describe("The total guesses...", () => {
  test("...is rendered correctly", () => {
    render(
      <GuessSummary
        gameType={GameDataType.Character}
        selectType={GameDataType.Character}
        guesses={characterData}
        answer={characterData[0]}
      />
    );
    const guessesTotal = screen.getByText(
      "You guessed today's character in 3 tries!"
    );
    expect(guessesTotal).toBeInTheDocument();
  });
  test("...is grammatically correct with just 1 guess", () => {
    render(
      <GuessSummary
        gameType={GameDataType.Character}
        selectType={GameDataType.Character}
        guesses={[characterData[0]]}
        answer={characterData[0]}
      />
    );
    const guessesTotal = screen.getByText(
      "You guessed today's character in 1 try!"
    );
    expect(guessesTotal).toBeInTheDocument();
  });
});
