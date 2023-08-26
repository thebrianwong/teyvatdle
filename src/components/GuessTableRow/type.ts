import CharacterAPIData from "../../types/data/characterAPIData.type";
import FoodAPIData from "../../types/data/foodAPIData.type";
import WeaponAPIData from "../../types/data/weaponAPIData.type";

type GuessTableRowProps = {
  rowType: "character" | "weapon" | "food";
  rowDataProp: CharacterAPIData | WeaponAPIData | FoodAPIData;
};

export default GuessTableRowProps;
