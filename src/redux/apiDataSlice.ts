import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import {
  CharacterData,
  ConstellationData,
  FoodData,
  TalentData,
  WeaponData,
} from "../__generated__/graphql";

type APIData = {
  characters: CharacterData[];
  weapons: WeaponData[];
  foods: FoodData[];
  talents: TalentData[];
  constellations: ConstellationData[];
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
    insertCharacterAPIData: (state, action: PayloadAction<CharacterData[]>) => {
      state.characters = action.payload;
    },
    insertWeaponAPIData: (state, action: PayloadAction<WeaponData[]>) => {
      state.weapons = action.payload;
    },
    insertFoodAPIData: (state, action: PayloadAction<FoodData[]>) => {
      state.foods = action.payload;
    },
    insertTalentAPIData: (state, action: PayloadAction<TalentData[]>) => {
      state.talents = action.payload;
    },
    insertConstellationAPIData: (
      state,
      action: PayloadAction<ConstellationData[]>
    ) => {
      state.constellations = action.payload;
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
export const loadWeapons = (state: RootState) => state.apiData.weapons;
export const loadFoods = (state: RootState) => state.apiData.foods;
export const loadTalents = (state: RootState) => state.apiData.talents;
export const loadConstellations = (state: RootState) =>
  state.apiData.constellations;

export default apiDataSlice.reducer;
