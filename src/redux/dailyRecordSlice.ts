import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { DailyRecordData } from "../__generated__/graphql";

const initialState: DailyRecordData = {
  dailyRecordId: "",
  character: {},
  characterSolved: 0,
  weapon: {},
  weaponSolved: 0,
  talent: {},
  talentSolved: 0,
  constellation: {},
  constellationSolved: 0,
  food: {},
  foodSolved: 0,
};

export const dailyRecordSlice = createSlice({
  name: "dailyRecord",
  initialState,
  reducers: {
    insertDailyRecordFromAPI: (
      state,
      action: PayloadAction<DailyRecordData>
    ) => {
      return action.payload;
    },
    updateCharacterSolvedValue: (state, action: PayloadAction<number>) => {
      state.characterSolved = action.payload;
    },
    updateWeaponSolvedValue: (state, action: PayloadAction<number>) => {
      state.weaponSolved = action.payload;
    },
    updateFoodSolvedValue: (state, action: PayloadAction<number>) => {
      state.foodSolved = action.payload;
    },
    updateTalentSolvedValue: (state, action: PayloadAction<number>) => {
      state.talentSolved = action.payload;
    },
    updateConstellationSolvedValue: (state, action: PayloadAction<number>) => {
      state.constellationSolved = action.payload;
    },
  },
});

export const {
  insertDailyRecordFromAPI,
  updateCharacterSolvedValue,
  updateWeaponSolvedValue,
  updateFoodSolvedValue,
  updateTalentSolvedValue,
  updateConstellationSolvedValue,
} = dailyRecordSlice.actions;

export const selectDailyRecordID = (state: RootState) =>
  state.dailyRecord.dailyRecordId;
export const selectDailyCharacter = (state: RootState) =>
  state.dailyRecord.character;
export const selectDailyCharacterSolved = (state: RootState) =>
  state.dailyRecord.characterSolved;
export const selectDailyWeapon = (state: RootState) => state.dailyRecord.weapon;
export const selectDailyWeaponSolved = (state: RootState) =>
  state.dailyRecord.weaponSolved;
export const selectDailyFood = (state: RootState) => state.dailyRecord.food;
export const selectDailyFoodSolved = (state: RootState) =>
  state.dailyRecord.foodSolved;
export const selectDailyTalent = (state: RootState) => state.dailyRecord.talent;
export const selectDailyTalentSolved = (state: RootState) =>
  state.dailyRecord.talentSolved;
export const selectDailyConstellation = (state: RootState) =>
  state.dailyRecord.constellation;
export const selectDailyConstellationSolved = (state: RootState) =>
  state.dailyRecord.constellationSolved;

export default dailyRecordSlice.reducer;
