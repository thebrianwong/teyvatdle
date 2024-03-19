import React from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameArea from "../../components/GameArea/GameArea";
import CharacterAPIData from "../../types/data/characterAPIData.type";
import WeaponAPIData from "../../types/data/weaponAPIData.type";
import FoodAPIData from "../../types/data/foodAPIData.type";
import TalentAPIData from "../../types/data/talentAPIData.type";
import ConstellationAPIData from "../../types/data/constellationAPIData.type";
import {
  CharacterData,
  ConstellationData,
  FoodData,
  FoodType,
  GameDataType,
  Gender,
  GenshinElement,
  Height,
  Region,
  Stat,
  TalentData,
  TalentType,
  WeaponData,
  WeaponType,
} from "../../__generated__/graphql";
import { MockedProvider } from "@apollo/client/testing";
import { UPDATE_DAILY_RECORD } from "../../graphql/mutations/updateDailyRecord";

beforeAll(() => {
  jest.setTimeout(6000);
});

const mocks = [
  {
    request: {
      query: UPDATE_DAILY_RECORD,
      variables: {
        id: "0",
        type: GameDataType.Character,
      },
    },
    result: {
      data: {
        updateDailyRecord: { updateDailyRecord: "mock" },
      },
    },
  },
];

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
];

const talentData: TalentData[] = [
  {
    talentId: "1",
    talentName: "Eat",
    talentType: TalentType.NormalAttack,
    talentImageUrl: "dummy talent",
    characterName: "Paimon",
    characterImageUrl: "dummy",
  },
];

const constellationData: ConstellationData[] = [
  {
    constellationId: "1",
    constellationName: "Sleep",
    constellationLevel: 1,
    constellationImageUrl: "dummy constellation",
    characterName: "Paimon",
    characterImageUrl: "dummy",
  },
];

test("GameArea renders", () => {
  render(
    <MockedProvider>
      <GameArea
        gameType={GameDataType.Character}
        selectType={GameDataType.Character}
        gameData={characterData}
        dailyEntity={characterData[0]}
        dailyRecordID="0"
        guessesCounter={0}
        complete={false}
        guesses={[]}
        setGuessCounter={jest.fn()}
        setCompletedState={jest.fn()}
        updateGuesses={jest.fn()}
      />
    </MockedProvider>
  );
  const component = screen.getByText(/Total Guesses:/);
  expect(component).toBeInTheDocument();
});

test("Choosing a select option calls setGuessCounter and updateGuesses", () => {
  const setGuessCounterMock = jest.fn();
  const updateGuessesMock = jest.fn();
  render(
    <MockedProvider>
      <GameArea
        gameType={GameDataType.Character}
        selectType={GameDataType.Character}
        gameData={characterData}
        dailyEntity={characterData[0]}
        dailyRecordID="0"
        guessesCounter={0}
        complete={false}
        guesses={[]}
        setGuessCounter={setGuessCounterMock}
        setCompletedState={jest.fn()}
        updateGuesses={updateGuessesMock}
      />
    </MockedProvider>
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

test("Choosing the answer select option calls setCompletedState", async () => {
  const setCompletedStateMock = jest.fn();
  render(
    <MockedProvider mocks={mocks}>
      <GameArea
        gameType={GameDataType.Character}
        selectType={GameDataType.Character}
        gameData={characterData}
        dailyEntity={characterData[0]}
        dailyRecordID="0"
        guessesCounter={0}
        complete={false}
        guesses={[]}
        setGuessCounter={jest.fn()}
        setCompletedState={setCompletedStateMock}
        updateGuesses={jest.fn()}
      />
    </MockedProvider>
  );
  const search = screen.getByRole("searchbox");
  act(() => {
    userEvent.click(search);
  });
  const paimon = screen.getByText("Paimon");
  act(() => {
    userEvent.click(paimon);
  });
  await waitFor(
    () => {
      expect(setCompletedStateMock).toBeCalledTimes(1);
    },
    { timeout: 6000 }
  );
}, 6000);

test("The number of total guesses is determined by guessCounter", () => {
  render(
    <MockedProvider>
      <GameArea
        gameType={GameDataType.Character}
        selectType={GameDataType.Character}
        gameData={characterData}
        dailyEntity={characterData[0]}
        dailyRecordID="0"
        guessesCounter={3}
        complete={false}
        guesses={[]}
        setGuessCounter={jest.fn()}
        setCompletedState={jest.fn()}
        updateGuesses={jest.fn()}
      />
    </MockedProvider>
  );
  const guessesText = screen.getByText(/Total Guesses/);
  expect(guessesText).toHaveTextContent("Total Guesses: 3");
});

describe("The layout varies by gameType", () => {
  test("character", () => {
    render(
      <MockedProvider>
        <GameArea
          gameType={GameDataType.Character}
          selectType={GameDataType.Character}
          gameData={characterData}
          dailyEntity={characterData[0]}
          dailyRecordID="0"
          guessesCounter={0}
          complete={false}
          guesses={[]}
          setGuessCounter={jest.fn()}
          setCompletedState={jest.fn()}
          updateGuesses={jest.fn()}
        />
      </MockedProvider>
    );
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });
  test("weapon", () => {
    render(
      <MockedProvider>
        <GameArea
          gameType={GameDataType.Weapon}
          selectType={GameDataType.Weapon}
          gameData={weaponData}
          dailyEntity={weaponData[0]}
          dailyRecordID="0"
          guessesCounter={0}
          complete={false}
          guesses={[]}
          setGuessCounter={jest.fn()}
          setCompletedState={jest.fn()}
          updateGuesses={jest.fn()}
        />
      </MockedProvider>
    );
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });
  test("food", () => {
    render(
      <MockedProvider>
        <GameArea
          gameType={GameDataType.Food}
          selectType={GameDataType.Food}
          gameData={foodData}
          dailyEntity={foodData[0]}
          dailyRecordID="9"
          guessesCounter={0}
          complete={false}
          guesses={[]}
          setGuessCounter={jest.fn()}
          setCompletedState={jest.fn()}
          updateGuesses={jest.fn()}
        />
      </MockedProvider>
    );
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });
  test("talent", () => {
    render(
      <MockedProvider>
        <GameArea
          gameType={GameDataType.Talent}
          selectType={GameDataType.Character}
          gameData={characterData}
          dailyEntity={talentData[0]}
          dailyRecordID="0"
          guessesCounter={0}
          complete={false}
          guesses={[]}
          setGuessCounter={jest.fn()}
          setCompletedState={jest.fn()}
          updateGuesses={jest.fn()}
        />
      </MockedProvider>
    );
    const talentImage = screen.getByAltText("Daily talent.");
    const guessList = screen.getByRole("list");
    expect(talentImage).toBeInTheDocument();
    expect(guessList).toBeInTheDocument();
  });
  test("constellation", () => {
    render(
      <MockedProvider>
        <GameArea
          gameType={GameDataType.Constellation}
          selectType={GameDataType.Character}
          gameData={characterData}
          dailyEntity={constellationData[0]}
          dailyRecordID="0"
          guessesCounter={0}
          complete={false}
          guesses={[]}
          setGuessCounter={jest.fn()}
          setCompletedState={jest.fn()}
          updateGuesses={jest.fn()}
        />
      </MockedProvider>
    );
    const constellationImage = screen.getByAltText("Daily constellation.");
    const guessList = screen.getByRole("list");
    expect(constellationImage).toBeInTheDocument();
    expect(guessList).toBeInTheDocument();
  });
});

test("GameComplete is rendered when complete is true", () => {
  render(
    <MockedProvider>
      <GameArea
        gameType={GameDataType.Character}
        selectType={GameDataType.Character}
        gameData={characterData}
        dailyEntity={characterData[0]}
        dailyRecordID="0"
        guessesCounter={0}
        complete={true}
        guesses={[]}
        setGuessCounter={jest.fn()}
        setCompletedState={jest.fn()}
        updateGuesses={jest.fn()}
      />
    </MockedProvider>
  );
  const completeHeader = screen.getByRole("heading", {
    name: "Nice Job, Traveler!",
  });
  expect(completeHeader).toBeInTheDocument();
});

describe("If complete is true and gameType is talent or constellation...", () => {
  test("...talent info is displayed", () => {
    render(
      <MockedProvider>
        <GameArea
          gameType={GameDataType.Talent}
          selectType={GameDataType.Character}
          gameData={characterData}
          dailyEntity={talentData[0]}
          dailyRecordID="0"
          guessesCounter={0}
          complete={true}
          guesses={[]}
          setGuessCounter={jest.fn()}
          setCompletedState={jest.fn()}
          updateGuesses={jest.fn()}
        />
      </MockedProvider>
    );
    const talentInfo = screen.getByRole("heading", {
      name: "Paimon's Normal Attack Talent: Eat",
    });
    expect(talentInfo).toBeInTheDocument();
  });
  test("...constellation is displayed", () => {
    render(
      <MockedProvider>
        <GameArea
          gameType={GameDataType.Constellation}
          selectType={GameDataType.Character}
          gameData={characterData}
          dailyEntity={constellationData[0]}
          dailyRecordID="0"
          guessesCounter={0}
          complete={true}
          guesses={[]}
          setGuessCounter={jest.fn()}
          setCompletedState={jest.fn()}
          updateGuesses={jest.fn()}
        />
      </MockedProvider>
    );
    const constellationInfo = screen.getByRole("heading", {
      name: "Paimon's Level 1 Constellation: Sleep",
    });
    expect(constellationInfo).toBeInTheDocument();
  });
});
