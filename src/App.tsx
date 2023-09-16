import CharacterAPIData from "./types/data/characterAPIData.type";
import WeaponAPIData from "./types/data/weaponAPIData.type";
import FoodAPIData from "./types/data/foodAPIData.type";
import { useEffect, useState } from "react";
import TalentAPIData from "./types/data/talentAPIData.type";
import ConstellationAPIData from "./types/data/constellationAPIData.type";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import WeaponPage from "./pages/WeaponPage/WeaponPage";
import FoodPage from "./pages/FoodPage/FoodPage";
import TalentPage from "./pages/TalentPage/TalentPage";
import ConstellationPage from "./pages/ConstellationPage/ConstellationPage";
import NavBar from "./components/NavBar/NavBar";
import { useAppSelector, useAppDispatch } from "./redux/hooks";
import getData from "./services/GameDataService";
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
import { getDailyRecord } from "./services/DailyRecordService";
import "./styles/normalize.css";
import WebSocketData from "./types/data/webSocketData.type";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import GameMode from "./types/gameMode.type";

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

  const setGuessCounter = (type: GameMode, newValue: number) => {
    setNumOfGuess({ ...numOfGuesses, [type]: newValue });
  };

  const setCompletedState = (type: GameMode) => {
    setComplete({ ...complete, [type]: true });
  };

  const dispatch = useAppDispatch();
  const dailyRecordID = useAppSelector(selectDailyRecordID);

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

  useEffect(() => {
    const getAllGameData = async () => {
      const [charData, weapData, foodData, talentData, constData] =
        await Promise.all([
          getData("character"),
          getData("weapon"),
          getData("food"),
          getData("talent"),
          getData("constellation"),
        ]);

      dispatch(insertCharacterAPIData(charData as CharacterAPIData[]));
      dispatch(insertWeaponAPIData(weapData as WeaponAPIData[]));
      dispatch(insertFoodAPIData(foodData as FoodAPIData[]));
      dispatch(insertTalentAPIData(talentData as TalentAPIData[]));
      dispatch(insertConstellationAPIData(constData as ConstellationAPIData[]));
    };
    const getDailyRecordData = async () => {
      const dailyRecordData = await getDailyRecord();
      dispatch(insertDailyRecordFromAPI(dailyRecordData!));
    };
    const getWebSocketConnection = async () => {
      try {
        const ws = new WebSocket(
          `ws://${process.env.REACT_APP_BACKEND_DOMAIN}/`
        );
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

    getAllGameData();
    getDailyRecordData();
    getWebSocketConnection();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                dailyRecordID={dailyRecordID}
                guessesCounter={numOfGuesses.character}
                complete={complete.character}
                setGuessCounter={setGuessCounter}
                setCompletedState={setCompletedState}
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
                setGuessCounter={setGuessCounter}
                setCompletedState={setCompletedState}
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
                setGuessCounter={setGuessCounter}
                setCompletedState={setCompletedState}
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
                setGuessCounter={setGuessCounter}
                setCompletedState={setCompletedState}
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
                setGuessCounter={setGuessCounter}
                setCompletedState={setCompletedState}
              />
            }
          />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
