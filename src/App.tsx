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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/character" element={<Navigate to={"/"} />} />
          <Route path="/weapon" element={<WeaponPage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/talent" element={<TalentPage />} />
          <Route path="/constellation" element={<ConstellationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
