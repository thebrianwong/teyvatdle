import dummy from "./placeholder.json";
import dummyQiqi from "./nonTravPlaceholder.json";
import dummyWeapon from "./weaponPlaceholder.json";
import dummyFood from "./foodPlaceholder.json";
import dummyTwoStarWeapon from "./twoStarWeapon.json";
import GuessTableRow from "./components/GuessTableRow/GuessTableRow";
import CharacterAPIData from "./types/data/characterAPIData.type";
import WeaponAPIData from "./types/data/weaponAPIData.type";
import FoodAPIData from "./types/data/foodAPIData.type";
import GuessTable from "./components/GuessTable/GuessTable";
import SelectMenu from "./components/SelectMenu/SelectMenu";
import allCharData from "./allChars.json";
import allWeapData from "./allWeapons.json";
import allFoodData from "./allFoods.json";
import TableAPIData from "./types/data/tableAPIData.type";
import { useState } from "react";

function App() {
  const [guesses, setGuesses] = useState<TableAPIData[]>([]);

  const handleGuess = (guess: TableAPIData) => {
    const newGuesses = [guess, ...guesses];
    setGuesses(newGuesses);
  };

  // const type = "character";
  const type = "weapon";
  // const type = "food";

  const chars = allCharData as CharacterAPIData[];
  const weaps = allWeapData as WeaponAPIData[];
  const foods = allFoodData as FoodAPIData[];

  const sortedData = (data: TableAPIData[]) => {
    return data.sort((a, b) => {
      if (
        a[`${type}_name` as keyof typeof a] <
        b[`${type}_name` as keyof typeof b]
      ) {
        return -1;
      } else if (
        a[`${type}_name` as keyof typeof a] >
        b[`${type}_name` as keyof typeof b]
      ) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div className="App">
      {/* <GuessTable tableType="character" /> */}
      <SelectMenu
        // selectType="character"
        selectType="weapon"
        // selectType="food"
        // data={sortedData(chars)}
        data={sortedData(weaps)}
        // data={sortedData(foods)}
        guesses={guesses}
        handleGuess={handleGuess}
      />
      <GuessTable
        // tableType="character"
        tableType="weapon"
        // tableType="food"
        guessesProp={guesses}
      />
    </div>
  );
}

export default App;
