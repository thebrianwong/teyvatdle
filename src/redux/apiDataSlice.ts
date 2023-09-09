import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import CharacterAPIData from "../types/data/characterAPIData.type";
import WeaponAPIData from "../types/data/weaponAPIData.type";
import FoodAPIData from "../types/data/foodAPIData.type";
import TalentAPIData from "../types/data/talentAPIData.type";
import ConstellationAPIData from "../types/data/constellationAPIData.type";
import TableAPIData from "../types/data/tableAPIData.type";
import ListAPIData from "../types/data/listAPIData.type";

type APIData = {
  characters: CharacterAPIData[];
  weapons: WeaponAPIData[];
  foods: FoodAPIData[];
  talents: TalentAPIData[];
  constellations: ConstellationAPIData[];
};

const initialState: APIData = {
  characters: [],
  weapons: [],
  foods: [],
  talents: [],
  constellations: [],
};

export const apiDataSlice = createSlice({
  name: "apiData",
  initialState,
  reducers: {
    insertGameDataFromAPI: (
      state,
      action: PayloadAction<TableAPIData[] | ListAPIData[]>
    ) => {
      switch (action.type) {
        case "character":
          state.characters = action.payload as CharacterAPIData[];
          break;
        case "weapon":
          state.weapons = action.payload as WeaponAPIData[];
          break;
        case "food":
          state.foods = action.payload as FoodAPIData[];
          break;
        case "talent":
          state.talents = action.payload as TalentAPIData[];
          break;
        case "constellation":
          state.constellations = action.payload as ConstellationAPIData[];
          break;
        default:
          break;
      }
    },
  },
});

export const { insertGameDataFromAPI } = apiDataSlice.actions;

export const selectCharacters = (state: RootState) => state.apiData.characters;
export const selectDailyCharacterData = (state: RootState, id: number) => {
  return state.apiData.characters.find(
    (charData) => charData.character_id === id
  );
};
export const selectWeapons = (state: RootState) => state.apiData.weapons;
export const selectDailyWeaponData = (state: RootState, id: number) => {
  return state.apiData.weapons.find((weapData) => weapData.weapon_id === id);
};
export const selectFoods = (state: RootState) => state.apiData.foods;
export const selectDailyFoodData = (state: RootState, id: number) => {
  return state.apiData.foods.find((foodData) => foodData.food_id === id);
};
export const selectTalents = (state: RootState) => state.apiData.talents;
export const selectDailyTalentData = (state: RootState, id: number) => {
  return state.apiData.talents.find(
    (talentData) => talentData.talent_id === id
  );
};
export const selectConstellations = (state: RootState) =>
  state.apiData.constellations;
export const selectDailyConstellationData = (state: RootState, id: number) => {
  return state.apiData.constellations.find(
    (constData) => constData.constellation_id === id
  );
};

export default apiDataSlice.reducer;
