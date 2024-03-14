import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import DailyRecordAPIData from "../types/data/dailyRecordAPIData.type";
import {
  CharacterData,
  ConstellationData,
  DailyRecordData,
  FoodData,
  FoodType,
  Gender,
  GenshinElement,
  Height,
  Region,
  Stat,
  TalentData,
  TalentType,
  WeaponData,
  WeaponType,
} from "../__generated__/graphql";

const initialState: DailyRecordData = {
  dailyRecordId: "",
  character: {
    characterId: "",
    characterName: "",
    // gender: Gender.Male,
    // height: Height.Medium,
    // rarity: 0,
    // region: Region.Mondstadt,
    // element: GenshinElement.Anemo,
    // weaponType: WeaponType.Sword,
    // ascensionStat: Stat.Atk,
    // birthday: 0,
    // characterImageUrl: "",
    // characterCorrectImageUrl: "",
    // characterWrongImageUrl: "",
    // localSpecialty: "",
    // localSpecialtyImageUrl: "",
    // enhancementMaterial: "",
    // enhancementMaterialImageUrl: "",
    // ascensionBossMaterial: "",
    // ascensionBossMaterialImageUrl: "",
    // talentBossMaterial: "",
    // talentBossMaterialImageUrl: "",
    // talentBook: [],
    // talentBookImageUrl: [],
    // talents: [],
    // constellations: [],
  },
  characterSolved: 0,
  weapon: {
    // weaponId: "",
    // weaponName: "",
    // rarity: 0,
    // weaponType: WeaponType.Sword,
    // subStat: Stat.Atk,
    // weaponImageUrl: "",
    // weaponDomainMaterial: "",
    // weaponDomainMaterialImageUrl: "",
    // eliteEnemyMaterial: "",
    // eliteEnemyMaterialImageUrl: "",
    // commonEnemyMaterial: "",
    // commonEnemyMaterialImageUrl: "",
    // gacha: true,
  },
  weaponSolved: 0,
  talent: {
    talentId: "",
    talentName: "",
    // talentType: TalentType.NormalAttack,
    // talentImageUrl: "",
    // characterName: "",
    // characterImageUrl: "",
  },
  talentSolved: 0,
  constellation: {
    constellationId: "",
    constellationName: "",
    // constellationLevel: 0,
    // constellationImageUrl: "",
    // characterName: "",
    // characterImageUrl: "",
  },
  constellationSolved: 0,
  food: {
    foodId: "",
    foodName: "",
    // rarity: 0,
    // foodType: FoodType.AtkBoostingDishes,
    // specialDish: true,
    // purchasable: true,
    // recipe: true,
    // event: true,
    // foodImageUrl: "",
  },
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
