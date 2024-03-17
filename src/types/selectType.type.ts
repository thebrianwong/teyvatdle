import { GameDataType } from "../__generated__/graphql";

// type SelectType = "character" | "weapon" | "food";
type SelectType =
  | GameDataType.Character
  | GameDataType.Weapon
  | GameDataType.Food;

export default SelectType;
