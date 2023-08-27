import GuessTableRow from "../GuessTableRow/GuessTableRow";
import dummy from "../../placeholder.json";
import dummyQiqi from "../../nonTravPlaceholder.json";
import dummyWeapon from "../../weaponPlaceholder.json";
import dummyFood from "../../foodPlaceholder.json";
import dummyTwoStarWeapon from "../../twoStarWeapon.json";
import CharacterAPIData from "../../types/data/characterAPIData.type";
import GuessTableProps from "./type";
import GuessTableHeader from "../GuessTableHeader/GuessTableHeader";
import { useState } from "react";
import TableAPIData from "../../types/data/tableAPIData.type";
import WeaponAPIData from "../../types/data/weaponAPIData.type";
import FoodAPIData from "../../types/data/foodAPIData.type";

const GuessTable = ({ tableType }: GuessTableProps) => {
  const [guesses, setGuesses] = useState<TableAPIData[]>([
    // dummy as CharacterAPIData,
    // dummyQiqi as CharacterAPIData,

    // dummyWeapon as WeaponAPIData,
    // dummyTwoStarWeapon as WeaponAPIData,

    dummyFood as FoodAPIData,
    dummyFood as FoodAPIData,
  ]); // keeping here for now, but will likely move this state to the page level, selecting char/weap/food will invoke callback to add the selected item to the list of guess which will be passed to the table

  return (
    <table>
      <GuessTableHeader headerType={tableType} />
      <tbody>
        {guesses.map((guess) => {
          return <GuessTableRow rowType={tableType} rowDataProp={guess} />;
        })}
      </tbody>
    </table>
  );
};

export default GuessTable;
