import React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameArea from "../../components/GameArea/GameArea";
import CharacterAPIData from "../../types/data/characterAPIData.type";
import WeaponAPIData from "../../types/data/weaponAPIData.type";
import FoodAPIData from "../../types/data/foodAPIData.type";
import TalentAPIData from "../../types/data/talentAPIData.type";
import ConstellationAPIData from "../../types/data/constellationAPIData.type";

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
];

const talentData: TalentAPIData[] = [
  {
    talent_id: 1,
    talent_name: "Eat",
    talent_type: "Normal Attack",
    talent_image_url: "dummy talent",
    character_name: "Paimon",
    character_image_url: "dummy",
  },
];

const constellationData: ConstellationAPIData[] = [
  {
    constellation_id: 1,
    constellation_name: "Sleep",
    constellation_level: 1,
    constellation_image_url: "dummy constellation",
    character_name: "Paimon",
    character_image_url: "dummy",
  },
];

test("GameArea renders", () => {
  render(
    <GameArea
      gameType="character"
      selectType="character"
      data={characterData}
      dailyEntity={characterData[0]}
      dailyRecordID={0}
      guessesCounter={0}
      complete={false}
      guesses={[]}
      setGuessCounter={jest.fn()}
      setCompletedState={jest.fn()}
      updateGuesses={jest.fn()}
    />
  );
  const component = screen.getByText(/Total Guesses:/);
  expect(component).toBeInTheDocument();
});

test("Choosing a select option calls setGuessCounter and updateGuesses", () => {
  const setGuessCounterMock = jest.fn();
  const updateGuessesMock = jest.fn();
  render(
    <GameArea
      gameType="character"
      selectType="character"
      data={characterData}
      dailyEntity={characterData[0]}
      dailyRecordID={0}
      guessesCounter={0}
      complete={false}
      guesses={[]}
      setGuessCounter={setGuessCounterMock}
      setCompletedState={jest.fn()}
      updateGuesses={updateGuessesMock}
    />
  );
  const search = screen.getByRole("searchbox");
  act(() => {
    userEvent.click(search);
  });
  const lumine = screen.getByText("Lumine");
  act(() => {
    userEvent.click(lumine);
  });
  expect(setGuessCounterMock).toBeCalledTimes(1);
  expect(updateGuessesMock).toBeCalledTimes(1);
});

test("Choosing the answer select option calls setCompletedState", () => {
  const setCompletedStateMock = jest.fn();
  render(
    <GameArea
      gameType="character"
      selectType="character"
      data={characterData}
      dailyEntity={characterData[0]}
      dailyRecordID={0}
      guessesCounter={0}
      complete={false}
      guesses={[]}
      setGuessCounter={jest.fn()}
      setCompletedState={setCompletedStateMock}
      updateGuesses={jest.fn()}
    />
  );
  const search = screen.getByRole("searchbox");
  act(() => {
    userEvent.click(search);
  });
  const paimon = screen.getByText("Paimon");
  act(() => {
    userEvent.click(paimon);
  });
  expect(setCompletedStateMock).toBeCalledTimes(1);
});

test("The number of total guesses is determined by guessCounter", () => {
  render(
    <GameArea
      gameType="character"
      selectType="character"
      data={characterData}
      dailyEntity={characterData[0]}
      dailyRecordID={0}
      guessesCounter={3}
      complete={false}
      guesses={[]}
      setGuessCounter={jest.fn()}
      setCompletedState={jest.fn()}
      updateGuesses={jest.fn()}
    />
  );
  const guessesText = screen.getByText(/Total Guesses/);
  expect(guessesText).toHaveTextContent("Total Guesses: 3");
});

describe("The layout varies by gameType", () => {
  test("character", () => {
    render(
      <GameArea
        gameType="character"
        selectType="character"
        data={characterData}
        dailyEntity={characterData[0]}
        dailyRecordID={0}
        guessesCounter={0}
        complete={false}
        guesses={[]}
        setGuessCounter={jest.fn()}
        setCompletedState={jest.fn()}
        updateGuesses={jest.fn()}
      />
    );
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });
  test("weapon", () => {
    render(
      <GameArea
        gameType="weapon"
        selectType="weapon"
        data={weaponData}
        dailyEntity={weaponData[0]}
        dailyRecordID={0}
        guessesCounter={0}
        complete={false}
        guesses={[]}
        setGuessCounter={jest.fn()}
        setCompletedState={jest.fn()}
        updateGuesses={jest.fn()}
      />
    );
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });
  test("food", () => {
    render(
      <GameArea
        gameType="food"
        selectType="food"
        data={foodData}
        dailyEntity={foodData[0]}
        dailyRecordID={0}
        guessesCounter={0}
        complete={false}
        guesses={[]}
        setGuessCounter={jest.fn()}
        setCompletedState={jest.fn()}
        updateGuesses={jest.fn()}
      />
    );
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });
  test("talent", () => {
    render(
      <GameArea
        gameType="talent"
        selectType="character"
        data={characterData}
        dailyEntity={talentData[0]}
        dailyRecordID={0}
        guessesCounter={0}
        complete={false}
        guesses={[]}
        setGuessCounter={jest.fn()}
        setCompletedState={jest.fn()}
        updateGuesses={jest.fn()}
      />
    );
    const talentImage = screen.getByAltText("Daily talent.");
    const guessList = screen.getByRole("list");
    expect(talentImage).toBeInTheDocument();
    expect(guessList).toBeInTheDocument();
  });
  test("constellation", () => {
    render(
      <GameArea
        gameType="constellation"
        selectType="character"
        data={characterData}
        dailyEntity={constellationData[0]}
        dailyRecordID={0}
        guessesCounter={0}
        complete={false}
        guesses={[]}
        setGuessCounter={jest.fn()}
        setCompletedState={jest.fn()}
        updateGuesses={jest.fn()}
      />
    );
    const constellationImage = screen.getByAltText("Daily constellation.");
    const guessList = screen.getByRole("list");
    expect(constellationImage).toBeInTheDocument();
    expect(guessList).toBeInTheDocument();
  });
});

test("GameComplete is rendered when complete is true", () => {
  render(
    <GameArea
      gameType="character"
      selectType="character"
      data={characterData}
      dailyEntity={characterData[0]}
      dailyRecordID={0}
      guessesCounter={0}
      complete={true}
      guesses={[]}
      setGuessCounter={jest.fn()}
      setCompletedState={jest.fn()}
      updateGuesses={jest.fn()}
    />
  );
  const completeHeader = screen.getByRole("heading", {
    name: "Nice Job, Traveler!",
  });
  expect(completeHeader).toBeInTheDocument();
});

describe("If complete is true and gameType is talent or constellation...", () => {
  test("...talent info is displayed", () => {
    render(
      <GameArea
        gameType="talent"
        selectType="character"
        data={characterData}
        dailyEntity={talentData[0]}
        dailyRecordID={0}
        guessesCounter={0}
        complete={true}
        guesses={[]}
        setGuessCounter={jest.fn()}
        setCompletedState={jest.fn()}
        updateGuesses={jest.fn()}
      />
    );
    const talentInfo = screen.getByRole("heading", {
      name: "Paimon's Normal Attack Talent: Eat",
    });
    expect(talentInfo).toBeInTheDocument();
  });
  test("...constellation is displayed", () => {
    render(
      <GameArea
        gameType="constellation"
        selectType="character"
        data={characterData}
        dailyEntity={constellationData[0]}
        dailyRecordID={0}
        guessesCounter={0}
        complete={true}
        guesses={[]}
        setGuessCounter={jest.fn()}
        setCompletedState={jest.fn()}
        updateGuesses={jest.fn()}
      />
    );
    const constellationInfo = screen.getByRole("heading", {
      name: "Paimon's Level 1 Constellation: Sleep",
    });
    expect(constellationInfo).toBeInTheDocument();
  });
});
