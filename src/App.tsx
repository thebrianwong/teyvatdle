import CharacterAPIData from "./types/data/characterAPIData.type";
import WeaponAPIData from "./types/data/weaponAPIData.type";
import FoodAPIData from "./types/data/foodAPIData.type";
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
import WebSocketData from "./types/data/webSocketData.type";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import GameMode from "./types/gameMode.type";
import getNormalizeDate from "./utils/normalizeDates";
import TableAPIData from "./types/data/tableAPIData.type";
import "./styles/styles.scss";
import { useQuery } from "@apollo/client";
import { GET_TEYVATDLE_API_DATA } from "./graphql/queries/getTeyvatdleApiData";

function App() {
  const [webSocketConnection, setWebSocketConnection] = useState<WebSocket>();
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
    character: CharacterAPIData[];
    weapon: WeaponAPIData[];
    food: FoodAPIData[];
    talent: CharacterAPIData[];
    constellation: CharacterAPIData[];
  }>({
    character: [],
    weapon: [],
    food: [],
    talent: [],
    constellation: [],
  });
  const [isSaving, setIsSaving] = useState(false);
  const teyvatdleApiDataQuery = useQuery(GET_TEYVATDLE_API_DATA);
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
    const updateSolvedValue = (data: WebSocketData) => {
      const newValue = data.newSolvedValue;
      switch (data.type) {
        case "character":
          dispatch(updateCharacterSolvedValue(newValue));
          break;
        case "weapon":
          dispatch(updateWeaponSolvedValue(newValue));
          break;
        case "food":
          dispatch(updateFoodSolvedValue(newValue));
          break;
        case "talent":
          dispatch(updateTalentSolvedValue(newValue));
          break;
        case "constellation":
          dispatch(updateConstellationSolvedValue(newValue));
          break;
        default:
          break;
      }
    };
    const getWebSocketConnection = async () => {
      try {
        const ws = new WebSocket(`${process.env.REACT_APP_BACKEND_WEBSOCKET}/`);
        setWebSocketConnection(ws);
        ws.addEventListener("message", async (data) => {
          const parsedData: WebSocketData = await JSON.parse(data.data);
          updateSolvedValue(parsedData);
        });
      } catch (err) {
        console.error(
          "There was an error connecting to the servers. Refresh the page or try again later!"
        );
      }
    };
    if (process.env.NODE_ENV !== "test") {
      getWebSocketConnection();
    }
  }, []);

  const updateGuesses = (newGuesses: TableAPIData[], gameType: GameMode) => {
    setGuesses({ ...guesses, [gameType]: newGuesses });
  };

  const setGuessCounter = (type: GameMode, newValue: number) => {
    setNumOfGuess({ ...numOfGuesses, [type]: newValue });
    setIsSaving(true);
  };

  const setCompletedState = (type: GameMode) => {
    setComplete({ ...complete, [type]: true });
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
