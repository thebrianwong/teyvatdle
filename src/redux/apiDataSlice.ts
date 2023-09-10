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
    insertCharacterAPIData: (
      state,
      action: PayloadAction<CharacterAPIData[]>
    ) => {
      state.characters = action.payload as CharacterAPIData[];
    },
    insertWeaponAPIData: (state, action: PayloadAction<WeaponAPIData[]>) => {
      state.weapons = action.payload as WeaponAPIData[];
    },
    insertFoodAPIData: (state, action: PayloadAction<FoodAPIData[]>) => {
      state.foods = action.payload as FoodAPIData[];
    },
    insertTalentAPIData: (state, action: PayloadAction<TalentAPIData[]>) => {
      state.talents = action.payload as TalentAPIData[];
    },
    insertConstellationAPIData: (
      state,
      action: PayloadAction<ConstellationAPIData[]>
    ) => {
      state.constellations = action.payload as ConstellationAPIData[];
    },
  },
});

export const {
  insertCharacterAPIData,
  insertWeaponAPIData,
  insertFoodAPIData,
  insertTalentAPIData,
  insertConstellationAPIData,
} = apiDataSlice.actions;

export const loadCharacters = (state: RootState) => state.apiData.characters;
export const loadDailyCharacter = (state: RootState, id: number) => {
  return state.apiData.characters.find(
    (charData) => charData.character_id === id
  );
};
export const loadWeapons = (state: RootState) => state.apiData.weapons;
export const loadDailyWeapon = (state: RootState, id: number) => {
  return state.apiData.weapons.find((weapData) => weapData.weapon_id === id);
};
export const loadFoods = (state: RootState) => state.apiData.foods;
export const loadDailyFood = (state: RootState, id: number) => {
  return state.apiData.foods.find((foodData) => foodData.food_id === id);
};
export const loadTalents = (state: RootState) => state.apiData.talents;
export const loadDailyTalent = (state: RootState, id: number) => {
  return state.apiData.talents.find(
    (talentData) => talentData.talent_id === id
  );
};
export const loadConstellations = (state: RootState) =>
  state.apiData.constellations;
export const loadDailyConstellation = (state: RootState, id: number) => {
  return state.apiData.constellations.find(
    (constData) => constData.constellation_id === id
  );
};

export default apiDataSlice.reducer;
