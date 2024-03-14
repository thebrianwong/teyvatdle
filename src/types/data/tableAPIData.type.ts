import {
  CharacterData,
  FoodData,
  WeaponData,
} from "../../__generated__/graphql";
import CharacterAPIData from "./characterAPIData.type";
import FoodAPIData from "./foodAPIData.type";
import WeaponAPIData from "./weaponAPIData.type";

// type TableAPIData = CharacterAPIData | WeaponAPIData | FoodAPIData;
type TableAPIData = CharacterData | WeaponData | FoodData;

export default TableAPIData;
