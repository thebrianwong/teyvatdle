import dummy from "./placeholder.json";
import dummyQiqi from "./nonTravPlaceholder.json";
import dummyWeapon from "./weaponPlaceholder.json";
import dummyFood from "./foodPlaceholder.json";
import dummyTwoStarWeapon from "./twoStarWeapon.json";
import CharacterAPIData from "./types/data/characterAPIData.type";
import WeaponAPIData from "./types/data/weaponAPIData.type";
import FoodAPIData from "./types/data/foodAPIData.type";
import allCharData from "./allChars.json";
import allWeapData from "./allWeapons.json";
import allFoodData from "./allFoods.json";
import TableAPIData from "./types/data/tableAPIData.type";
import { useEffect, useState } from "react";
import GameAreaTable from "./components/GameAreaTable/GameAreaTable";

function App() {
  const chars = allCharData as CharacterAPIData[];
  const weaps = allWeapData as WeaponAPIData[];
  const foods = allFoodData as FoodAPIData[];

  const charDaily = dummy as CharacterAPIData;
  const weapDaily = dummyTwoStarWeapon as WeaponAPIData;
  const foodDaily = dummyFood as FoodAPIData;
  return (
    <div className="App">
      <GameAreaTable
        gameType="character"
        data={chars}
        dailyEntity={charDaily}
      />
      {/* <GameAreaTable gameType="weapon" data={weaps} dailyEntity={weapDaily} /> */}
      {/* <GameAreaTable gameType="food" data={foods} dailyEntity={foodDaily} /> */}
    </div>
  );
}

export default App;
