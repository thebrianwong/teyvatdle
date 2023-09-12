import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import DailyRecordAPIData from "../types/data/dailyRecordAPIData.type";

const initialState: DailyRecordAPIData = {
  daily_record_id: 0,
  character_id: 0,
  character_solved: 0,
  weapon_id: 0,
  weapon_solved: 0,
  talent_id: 0,
  talent_solved: 0,
  constellation_id: 0,
  constellation_solved: 0,
  food_id: 0,
  food_solved: 0,
};

export const dailyRecordSlice = createSlice({
  name: "dailyRecord",
  initialState,
  reducers: {
    insertDailyRecordFromAPI: (
      state,
      action: PayloadAction<DailyRecordAPIData>
    ) => {
      return action.payload;
    },
    updateCharacterSolvedValue: (state, action: PayloadAction<number>) => {
      state.character_solved = action.payload;
    },
    updateWeaponSolvedValue: (state, action: PayloadAction<number>) => {
      state.weapon_solved = action.payload;
    },
    updateFoodSolvedValue: (state, action: PayloadAction<number>) => {
      state.food_solved = action.payload;
    },
    updateTalentSolvedValue: (state, action: PayloadAction<number>) => {
      state.talent_solved = action.payload;
    },
    updateConstellationSolvedValue: (state, action: PayloadAction<number>) => {
      state.constellation_solved = action.payload;
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
  state.dailyRecord.daily_record_id;
export const selectDailyCharacterID = (state: RootState) =>
  state.dailyRecord.character_id;
export const selectDailyCharacterSolved = (state: RootState) =>
  state.dailyRecord.character_solved;
export const selectDailyWeaponID = (state: RootState) =>
  state.dailyRecord.weapon_id;
export const selectDailyWeaponSolved = (state: RootState) =>
  state.dailyRecord.weapon_solved;
export const selectDailyFoodID = (state: RootState) =>
  state.dailyRecord.food_id;
export const selectDailyFoodSolved = (state: RootState) =>
  state.dailyRecord.food_solved;
export const selectDailyTalentID = (state: RootState) =>
  state.dailyRecord.talent_id;
export const selectDailyTalentSolved = (state: RootState) =>
  state.dailyRecord.talent_solved;
export const selectDailyConstellationID = (state: RootState) =>
  state.dailyRecord.constellation_id;
export const selectDailyConstellationSolved = (state: RootState) =>
  state.dailyRecord.constellation_solved;

export default dailyRecordSlice.reducer;
