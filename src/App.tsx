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

function App() {
  const chars = allCharData as CharacterAPIData[];
  const weaps = allWeapData as WeaponAPIData[];
  const foods = allFoodData as FoodAPIData[];

  const charDaily = dummy as CharacterAPIData;
  const weapDaily = dummyTwoStarWeapon as WeaponAPIData;
  const foodDaily = dummyFood as FoodAPIData;
  const talentDaily = dummyTalent as TalentAPIData;
  const constellationDaily = dummyConstellation as ConstellationAPIData;

  return (
    <div className="App">
      {/* <GameArea gameType="character" selectType="character" data={chars} dailyEntity={charDaily} /> */}
      {/* <GameAreaTable gameType="weapon" selectType="weapon" data={weaps} dailyEntity={weapDaily} /> */}
      {/* <GameAreaTable gameType="food" selectType="food" data={foods} dailyEntity={foodDaily} /> */}
      {/* <GameArea
        gameType="talent"
        selectType="character"
        data={chars}
        dailyEntity={talentDaily}
      /> */}
      <GameArea
        gameType="constellation"
        selectType="character"
        data={chars}
        dailyEntity={constellationDaily}
      />
    </div>
  );
}

export default App;
