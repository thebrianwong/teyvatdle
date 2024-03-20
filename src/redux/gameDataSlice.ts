import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import {
  CharacterData,
  ConstellationData,
  FoodData,
  TalentData,
  WeaponData,
} from "../__generated__/graphql";

type GameData = {
  characters: CharacterData[];
  weapons: WeaponData[];
  foods: FoodData[];
  talents: TalentData[];
  constellations: ConstellationData[];
};

const initialState: GameData = {
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
    setCharacterData: (state, action: PayloadAction<CharacterData[]>) => {
      state.characters = action.payload;
    },
    setWeaponData: (state, action: PayloadAction<WeaponData[]>) => {
      state.weapons = action.payload;
    },
    setFoodData: (state, action: PayloadAction<FoodData[]>) => {
      state.foods = action.payload;
    },
    setTalentData: (state, action: PayloadAction<TalentData[]>) => {
      state.talents = action.payload;
    },
    setConstellationData: (
      state,
      action: PayloadAction<ConstellationData[]>
    ) => {
      state.constellations = action.payload;
    },
  },
});

export const {
  setCharacterData,
  setWeaponData,
  setFoodData,
  setTalentData,
  setConstellationData,
} = apiDataSlice.actions;

export const getCharacters = (state: RootState) => state.apiData.characters;
export const getWeapons = (state: RootState) => state.apiData.weapons;
export const getFoods = (state: RootState) => state.apiData.foods;
export const getTalents = (state: RootState) => state.apiData.talents;
export const getConstellations = (state: RootState) =>
  state.apiData.constellations;

export default apiDataSlice.reducer;
