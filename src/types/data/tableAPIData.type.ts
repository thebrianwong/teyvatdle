import CharacterAPIData from "./characterAPIData.type";
import FoodAPIData from "./foodAPIData.type";
import WeaponAPIData from "./weaponAPIData.type";

type TableAPIData = CharacterAPIData | WeaponAPIData | FoodAPIData;

export default TableAPIData;
