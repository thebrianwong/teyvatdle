import dummy from "./placeholder.json";
import dummyQiqi from "./nonTravPlaceholder.json";
import dummyWeapon from "./weaponPlaceholder.json";
import dummyFood from "./foodPlaceholder.json";
import dummyTwoStarWeapon from "./twoStarWeapon.json";
import dummyTalent from "./talentPlaceholder.json";
import dummyConstellation from "./constellationPlaceholder.json";
import CharacterAPIData from "./types/data/characterAPIData.type";
import WeaponAPIData from "./types/data/weaponAPIData.type";
import FoodAPIData from "./types/data/foodAPIData.type";
import allCharData from "./allChars.json";
import allWeapData from "./allWeapons.json";
import allFoodData from "./allFoods.json";
import TableAPIData from "./types/data/tableAPIData.type";
import { useEffect, useState } from "react";
import GameArea from "./components/GameArea/GameArea";
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
} from "./redux/dailyRecordSlice";
import { getDailyRecord } from "./services/DailyRecordService";

function App() {
  const dispatch = useAppDispatch();
  const dailyRecordID = useAppSelector(selectDailyRecordID);

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

    getAllGameData();
    getDailyRecordData();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<HomePage dailyRecordID={dailyRecordID} />}
          />
          <Route path="/character" element={<Navigate to={"/"} />} />
          <Route
            path="/weapon"
            element={<WeaponPage dailyRecordID={dailyRecordID} />}
          />
          <Route
            path="/food"
            element={<FoodPage dailyRecordID={dailyRecordID} />}
          />
          <Route
            path="/talent"
            element={<TalentPage dailyRecordID={dailyRecordID} />}
          />
          <Route
            path="/constellation"
            element={<ConstellationPage dailyRecordID={dailyRecordID} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
