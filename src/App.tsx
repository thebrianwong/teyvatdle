import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import WeaponPage from "./pages/WeaponPage/WeaponPage";
import FoodPage from "./pages/FoodPage/FoodPage";
import TalentPage from "./pages/TalentPage/TalentPage";
import ConstellationPage from "./pages/ConstellationPage/ConstellationPage";
import NavBar from "./components/NavBar/NavBar";
import { useAppSelector, useAppDispatch } from "./redux/hooks";
import {
  insertCharacterAPIData,
  insertConstellationAPIData,
  insertFoodAPIData,
  insertTalentAPIData,
  insertWeaponAPIData,
} from "./redux/apiDataSlice";
import {
  insertDailyRecordFromAPI,
  selectDailyRecordID,
  updateCharacterSolvedValue,
  updateConstellationSolvedValue,
  updateFoodSolvedValue,
  updateTalentSolvedValue,
  updateWeaponSolvedValue,
} from "./redux/dailyRecordSlice";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import GameMode from "./types/gameMode.type";
import getNormalizeDate from "./utils/normalizeDates";
import TableAPIData from "./types/data/tableAPIData.type";
import "./styles/styles.scss";
import { useQuery, useSubscription } from "@apollo/client";
import { GET_TEYVATDLE_API_DATA } from "./graphql/queries/getTeyvatdleApiData";
import {
  CharacterData,
  FoodData,
  GameDataType,
  UpdatedSolvedValue,
  WeaponData,
} from "./__generated__/graphql";
import lowerCaseFirstLetter from "./utils/lowerCaseFirstLetter";
import { LISTEN_FOR_DAILY_RECORD_UPDATES } from "./graphql/subscriptions/listenForDailyRecordUpdates";

function App() {
  const [numOfGuesses, setNumOfGuess] = useState({
    character: 0,
    weapon: 0,
    food: 0,
    talent: 0,
    constellation: 0,
  });
  const [complete, setComplete] = useState({
    character: false,
    weapon: false,
    food: false,
    talent: false,
    constellation: false,
  });
  const [guesses, setGuesses] = useState<{
    character: CharacterData[];
    weapon: WeaponData[];
    food: FoodData[];
    talent: CharacterData[];
    constellation: CharacterData[];
  }>({
    character: [],
    weapon: [],
    food: [],
    talent: [],
    constellation: [],
  });
  const [isSaving, setIsSaving] = useState(false);
  const teyvatdleApiDataQuery = useQuery(GET_TEYVATDLE_API_DATA);
  const dailyRecordSubscription = useSubscription(
    LISTEN_FOR_DAILY_RECORD_UPDATES
  );
  const dispatch = useAppDispatch();
  const dailyRecordID = useAppSelector(selectDailyRecordID);

  useEffect(() => {
    const getStateFromLocalStorage = () => {
      let gameState = {
        numOfGuesses: {
          character: 0,
          weapon: 0,
          food: 0,
          talent: 0,
          constellation: 0,
        },
        complete: {
          character: false,
          weapon: false,
          food: false,
          talent: false,
          constellation: false,
        },
        guesses: {
          character: [],
          weapon: [],
          food: [],
          talent: [],
          constellation: [],
        },
      };
      const savedGameState = localStorage.getItem("teyvatdle");
      if (savedGameState) {
        const parsedState = JSON.parse(savedGameState);
        if (parsedState.date === getNormalizeDate()) {
          gameState.numOfGuesses = parsedState.numOfGuesses;
          gameState.complete = parsedState.complete;
          gameState.guesses = parsedState.guesses;
        }
      }
      setNumOfGuess(gameState.numOfGuesses);
      setComplete(gameState.complete);
      setGuesses(gameState.guesses);
    };
    getStateFromLocalStorage();
  }, []);

  useEffect(() => {
    const saveStateToLocalStorage = () => {
      const date = getNormalizeDate();
      const state = {
        date,
        numOfGuesses,
        complete,
        guesses,
      };
      const stateJSON = JSON.stringify(state);
      localStorage.setItem(`teyvatdle`, stateJSON);
    };
    if (isSaving) {
      saveStateToLocalStorage();
      setIsSaving(false);
    }
  }, [isSaving]);

  useEffect(() => {
    const setTimeOfDayBackground = () => {
      const date = new Date();
      const currentHour = date.getHours();
      if (currentHour >= 5 && currentHour < 8) {
        document.body.classList.add("dawn-background");
      } else if (currentHour >= 8 && currentHour < 17) {
        document.body.classList.add("day-background");
      } else if (currentHour >= 17 && currentHour < 19) {
        document.body.classList.add("dusk-background");
      } else {
        document.body.classList.add("night-background");
      }
    };
    setTimeOfDayBackground();
  }, []);

  useEffect(() => {
    if (
      teyvatdleApiDataQuery.data !== undefined &&
      process.env.NODE_ENV !== "test"
    ) {
      const dailyRecordData = teyvatdleApiDataQuery.data.dailyRecordData;
      const {
        characterData,
        weaponData,
        foodData,
        talentData,
        constellationData,
      } = teyvatdleApiDataQuery.data;

      dispatch(insertDailyRecordFromAPI(dailyRecordData));
      dispatch(insertCharacterAPIData(characterData));
      dispatch(insertWeaponAPIData(weaponData));
      dispatch(insertFoodAPIData(foodData));
      dispatch(insertTalentAPIData(talentData));
      dispatch(insertConstellationAPIData(constellationData));
    }
  }, [teyvatdleApiDataQuery]);

  useEffect(() => {
    const updateSolvedValue = (updatedSolvedValue: UpdatedSolvedValue) => {
      const gameType = updatedSolvedValue.type;
      const newValue = updatedSolvedValue.newSolvedValue;
      switch (gameType) {
        case GameDataType.Character:
          dispatch(updateCharacterSolvedValue(newValue));
          break;
        case GameDataType.Weapon:
          dispatch(updateWeaponSolvedValue(newValue));
          break;
        case GameDataType.Food:
          dispatch(updateFoodSolvedValue(newValue));
          break;
        case GameDataType.Talent:
          dispatch(updateTalentSolvedValue(newValue));
          break;
        case GameDataType.Constellation:
          dispatch(updateConstellationSolvedValue(newValue));
          break;
        default:
          console.error(
            "There was an error updating the daily record's solved values!"
          );
          break;
      }
    };
    if (dailyRecordSubscription.data) {
      updateSolvedValue(dailyRecordSubscription.data.dailyRecordUpdated);
    }
  }, [dailyRecordSubscription]);

  const updateGuesses = (
    newGuesses: TableAPIData[],
    gameType: GameDataType
  ) => {
    setGuesses({ ...guesses, [lowerCaseFirstLetter(gameType)]: newGuesses });
  };

  const setGuessCounter = (type: GameDataType, newValue: number) => {
    setNumOfGuess({ ...numOfGuesses, [lowerCaseFirstLetter(type)]: newValue });
    setIsSaving(true);
  };

  const setCompletedState = (type: GameDataType) => {
    setComplete({ ...complete, [lowerCaseFirstLetter(type)]: true });
    setIsSaving(true);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  dailyRecordID={dailyRecordID}
                  guessesCounter={numOfGuesses.character}
                  complete={complete.character}
                  guesses={guesses.character}
                  setGuessCounter={setGuessCounter}
                  setCompletedState={setCompletedState}
                  updateGuesses={updateGuesses}
                />
              }
            />
            <Route path="/character" element={<Navigate to={"/"} />} />
            <Route
              path="/weapon"
              element={
                <WeaponPage
                  dailyRecordID={dailyRecordID}
                  guessesCounter={numOfGuesses.weapon}
                  complete={complete.weapon}
                  guesses={guesses.weapon}
                  setGuessCounter={setGuessCounter}
                  setCompletedState={setCompletedState}
                  updateGuesses={updateGuesses}
                />
              }
            />
            <Route
              path="/food"
              element={
                <FoodPage
                  dailyRecordID={dailyRecordID}
                  guessesCounter={numOfGuesses.food}
                  complete={complete.food}
                  guesses={guesses.food}
                  setGuessCounter={setGuessCounter}
                  setCompletedState={setCompletedState}
                  updateGuesses={updateGuesses}
                />
              }
            />
            <Route
              path="/talent"
              element={
                <TalentPage
                  dailyRecordID={dailyRecordID}
                  guessesCounter={numOfGuesses.talent}
                  complete={complete.talent}
                  guesses={guesses.talent}
                  setGuessCounter={setGuessCounter}
                  setCompletedState={setCompletedState}
                  updateGuesses={updateGuesses}
                />
              }
            />
            <Route
              path="/constellation"
              element={
                <ConstellationPage
                  dailyRecordID={dailyRecordID}
                  guessesCounter={numOfGuesses.constellation}
                  complete={complete.constellation}
                  guesses={guesses.constellation}
                  setGuessCounter={setGuessCounter}
                  setCompletedState={setCompletedState}
                  updateGuesses={updateGuesses}
                />
              }
            />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
