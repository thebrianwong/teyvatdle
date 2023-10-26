import React from "react";
import { render, screen } from "@testing-library/react";
import GuessSummary from "../../components/GuessSummary/GuessSummary";
import CharacterAPIData from "../../types/data/characterAPIData.type";
import WeaponAPIData from "../../types/data/weaponAPIData.type";
import FoodAPIData from "../../types/data/foodAPIData.type";

const characterData: CharacterAPIData[] = [
  {
    character_id: 1,
    character_name: "Paimon",
    gender: "Female",
    height: "Short",
    rarity: 5,
    region: "Mondstadt",
    element: "Anemo",
    weapon_type: "Catalyst",
    ascension_stat: "ATK",
    birthday: null,
    character_image_url: "dummy",
    character_correct_image_url: "Correct!",
    character_wrong_image_url: "Wrong...",
    local_specialty: "dummy",
    local_specialty_image_url: "dummy",
    enhancement_material: "dummy",
    enhancement_material_image_url: "dummy",
    ascension_boss_material: "dummy",
    ascension_boss_material_image_url: "dummy",
    talent_boss_material: "dummy",
    talent_boss_material_image_url: "dummy",
    talent_book: ["dummy"],
    talent_book_image_url: ["dummy"],
  },
  {
    character_id: 2,
    character_name: "Lumine",
    gender: "Female",
    height: "Medium",
    rarity: 5,
    region: "Mondstadt",
    element: "Anemo",
    weapon_type: "Catalyst",
    ascension_stat: "ATK",
    birthday: null,
    character_image_url: "dummy",
    character_correct_image_url: "Correct!",
    character_wrong_image_url: "Wrong...",
    local_specialty: "dummy",
    local_specialty_image_url: "dummy",
    enhancement_material: "dummy",
    enhancement_material_image_url: "dummy",
    ascension_boss_material: "dummy",
    ascension_boss_material_image_url: "dummy",
    talent_boss_material: "dummy",
    talent_boss_material_image_url: "dummy",
    talent_book: ["dummy"],
    talent_book_image_url: ["dummy"],
  },
  {
    character_id: 3,
    character_name: "Aether",
    gender: "Male",
    height: "Medium",
    rarity: 5,
    region: "Mondstadt",
    element: "Anemo",
    weapon_type: "Catalyst",
    ascension_stat: "ATK",
    birthday: null,
    character_image_url: "dummy",
    character_correct_image_url: "Correct!",
    character_wrong_image_url: "Wrong...",
    local_specialty: "dummy",
    local_specialty_image_url: "dummy",
    enhancement_material: "dummy",
    enhancement_material_image_url: "dummy",
    ascension_boss_material: "dummy",
    ascension_boss_material_image_url: "dummy",
    talent_boss_material: "dummy",
    talent_boss_material_image_url: "dummy",
    talent_book: ["dummy"],
    talent_book_image_url: ["dummy"],
  },
];

const weaponData: WeaponAPIData[] = [
  {
    weapon_id: 1,
    weapon_name: "Cubes",
    rarity: 5,
    weapon_type: "Catalyst",
    sub_stat: "ATK",
    weapon_image_url: "dummy",
    weapon_domain_material: "dummy",
    weapon_domain_material_image_url: "dummy",
    elite_enemy_material: "dummy",
    elite_enemy_material_image_url: "dummy",
    common_enemy_material: "dummy",
    common_enemy_material_image_url: "dummy",
    gacha: true,
  },
  {
    weapon_id: 2,
    weapon_name: "Debate Club",
    rarity: 3,
    weapon_type: "Claymore",
    sub_stat: "ATK",
    weapon_image_url: "dummy",
    weapon_domain_material: "dummy",
    weapon_domain_material_image_url: "dummy",
    elite_enemy_material: "dummy",
    elite_enemy_material_image_url: "dummy",
    common_enemy_material: "dummy",
    common_enemy_material_image_url: "dummy",
    gacha: true,
  },
];

const foodData: FoodAPIData[] = [
  {
    food_id: 1,
    food_name: "Paimon (Emergency Food)",
    rarity: 5,
    food_type: "Adventurer's Dishes",
    special_dish: false,
    purchasable: false,
    recipe: false,
    event: true,
    food_image_url: "dummy",
  },
  {
    food_id: 1,
    food_name: "One of Diona's Drinks",
    rarity: 5,
    food_type: "Adventurer's Dishes",
    special_dish: false,
    purchasable: false,
    recipe: false,
    event: true,
    food_image_url: "dummy",
  },
];

test("GuessesSummary renders", () => {
  render(
    <GuessSummary
      gameType="character"
      selectType="character"
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
        gameType="character"
        selectType="character"
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
        gameType="weapon"
        selectType="weapon"
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
        gameType="food"
        selectType="food"
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
        gameType="character"
        selectType="character"
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
        gameType="weapon"
        selectType="weapon"
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
        gameType="food"
        selectType="food"
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
        gameType="talent"
        selectType="character"
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
        gameType="constellation"
        selectType="character"
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
        gameType="character"
        selectType="character"
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
        gameType="character"
        selectType="character"
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
