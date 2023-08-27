import CharacterAPIData from "../../types/data/characterAPIData.type";
import FoodAPIData from "../../types/data/foodAPIData.type";
import TableAPIData from "../../types/data/tableAPIData.type";
import WeaponAPIData from "../../types/data/weaponAPIData.type";

type SelectMenuProps = {
  selectType: "character" | "weapon" | "food";
  data: CharacterAPIData[];
};

export default SelectMenuProps;
