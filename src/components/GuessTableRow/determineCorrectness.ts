import {
  CharacterData,
  FoodData,
  GameDataType,
  WeaponData,
} from "../../__generated__/graphql";
import CharacterAnswerAccuracy from "../../types/data/characterAnswerAccuracy.type";
import FoodAnswerAccuracy from "../../types/data/foodAnswerAccuracy.type";
import TableAPIData from "../../types/data/tableAPIData.type";
import WeaponAnswerAccuracy from "../../types/data/weaponAnswerAccuracy.type";
import SelectType from "../../types/selectType.type";
import compareArrays from "../../utils/compareArrays";

const determineCorrectness = (
  rowType: SelectType,
  guessData: TableAPIData,
  answer: TableAPIData
) => {
  switch (rowType) {
    case GameDataType.Character:
      const charGuessData = { ...guessData } as CharacterData;
      const charAnswerData = { ...answer } as CharacterData;
      if (charGuessData.characterName === charAnswerData.characterName) {
        const charAllCorrect: CharacterAnswerAccuracy = {
          charNameAccuracy: "correct",
          genderHeightAccuracy: "correct",
          rarityRegionAccuracy: "correct",
          eleWeaponAccuracy: "correct",
          statMaterialAccuracy: "correct",
          localAscensionAccuracy: "correct",
          bookTalentAccuracy: "correct",
          birthdayAccuracy: "correct",
        };
        return charAllCorrect;
      }
      const charResults: CharacterAnswerAccuracy = {
        // name comparison already performed so charNameAccuracy will always be wrong
        charNameAccuracy: "wrong",
        genderHeightAccuracy: "default",
        rarityRegionAccuracy: "default",
        eleWeaponAccuracy: "default",
        statMaterialAccuracy: "default",
        localAscensionAccuracy: "default",
        bookTalentAccuracy: "default",
        birthdayAccuracy: "default",
      };
      // gender, height
      if (
        charGuessData.gender === charAnswerData.gender &&
        charGuessData.height === charAnswerData.height
      ) {
        charResults.genderHeightAccuracy = "correct";
      } else if (
        charGuessData.gender !== charAnswerData.gender &&
        charGuessData.height !== charAnswerData.height
      ) {
        charResults.genderHeightAccuracy = "wrong";
      } else {
        charResults.genderHeightAccuracy = "partial";
      }
      // rarity, region
      if (
        charGuessData.rarity === charAnswerData.rarity &&
        charGuessData.region === charAnswerData.region
      ) {
        charResults.rarityRegionAccuracy = "correct";
      } else if (
        charGuessData.rarity !== charAnswerData.rarity &&
        charGuessData.region !== charAnswerData.region
      ) {
        charResults.rarityRegionAccuracy = "wrong";
      } else {
        charResults.rarityRegionAccuracy = "partial";
      }
      // element, weapon
      if (
        charGuessData.element === charAnswerData.element &&
        charGuessData.weaponType === charAnswerData.weaponType
      ) {
        charResults.eleWeaponAccuracy = "correct";
      } else if (
        charGuessData.element !== charAnswerData.element &&
        charGuessData.weaponType !== charAnswerData.weaponType
      ) {
        charResults.eleWeaponAccuracy = "wrong";
      } else {
        charResults.eleWeaponAccuracy = "partial";
      }
      // stat, enhancement material
      if (
        charGuessData.ascensionStat === charAnswerData.ascensionStat &&
        charGuessData.enhancementMaterial === charAnswerData.enhancementMaterial
      ) {
        charResults.statMaterialAccuracy = "correct";
      } else if (
        charGuessData.ascensionStat !== charAnswerData.ascensionStat &&
        charGuessData.enhancementMaterial !== charAnswerData.enhancementMaterial
      ) {
        charResults.statMaterialAccuracy = "wrong";
      } else {
        charResults.statMaterialAccuracy = "partial";
      }
      // local specialty, ascension material
      if (
        charGuessData.localSpecialty === charAnswerData.localSpecialty &&
        charGuessData.ascensionBossMaterial ===
          charAnswerData.ascensionBossMaterial
      ) {
        charResults.localAscensionAccuracy = "correct";
      } else if (
        charGuessData.localSpecialty !== charAnswerData.localSpecialty &&
        charGuessData.ascensionBossMaterial !==
          charAnswerData.ascensionBossMaterial
      ) {
        charResults.localAscensionAccuracy = "wrong";
      } else {
        charResults.localAscensionAccuracy = "partial";
      }
      // talent books, talent material
      if (
        compareArrays(charGuessData.talentBook!, charAnswerData.talentBook!) &&
        charGuessData.talentBossMaterial === charAnswerData.talentBossMaterial
      ) {
        charResults.bookTalentAccuracy = "correct";
      } else if (
        !compareArrays(charGuessData.talentBook!, charAnswerData.talentBook!) &&
        charGuessData.talentBossMaterial !== charAnswerData.talentBossMaterial
      ) {
        charResults.bookTalentAccuracy = "wrong";
      } else {
        charResults.bookTalentAccuracy = "partial";
      }
      // birthday
      if (charGuessData.birthday && charAnswerData.birthday) {
        const charDate = new Date(charGuessData.birthday);
        const answerDate = new Date(charAnswerData.birthday);
        if (
          charDate.getUTCMonth() === answerDate.getUTCMonth() &&
          charDate.getUTCDate() === answerDate.getUTCDate()
        ) {
          charResults.birthdayAccuracy = "correct";
        } else if (
          charDate.getUTCMonth() !== answerDate.getUTCMonth() &&
          charDate.getUTCDate() !== answerDate.getUTCDate()
        ) {
          charResults.birthdayAccuracy = "wrong";
        } else {
          charResults.birthdayAccuracy = "partial";
        }
      } else if (!charGuessData.birthday && !charAnswerData.birthday) {
        charResults.birthdayAccuracy = "correct";
      } else {
        charResults.birthdayAccuracy = "wrong";
      }
      return charResults;
    case GameDataType.Weapon:
      const weapGuessData = { ...guessData } as WeaponData;
      const weapAnswerData = { ...answer } as WeaponData;
      if (weapGuessData.weaponName === weapAnswerData.weaponName) {
        const weapAllCorrect: WeaponAnswerAccuracy = {
          weapNameAccuracy: "correct",
          rarityWeapTypeAccuracy: "correct",
          subStatMaterialAccuracy: "correct",
          eliteCommonAccuracy: "correct",
          gachaAccuracy: "correct",
        };
        return weapAllCorrect;
      }
      const weapResults: WeaponAnswerAccuracy = {
        weapNameAccuracy: "wrong",
        rarityWeapTypeAccuracy: "default",
        subStatMaterialAccuracy: "default",
        eliteCommonAccuracy: "default",
        gachaAccuracy: "default",
      };
      // rarity, type
      if (
        weapGuessData.rarity === weapAnswerData.rarity &&
        weapGuessData.weaponType === weapAnswerData.weaponType
      ) {
        weapResults.rarityWeapTypeAccuracy = "correct";
      } else if (
        weapGuessData.rarity !== weapAnswerData.rarity &&
        weapGuessData.weaponType !== weapAnswerData.weaponType
      ) {
        weapResults.rarityWeapTypeAccuracy = "wrong";
      } else {
        weapResults.rarityWeapTypeAccuracy = "partial";
      }
      // stat, material
      if (
        weapGuessData.subStat === weapAnswerData.subStat &&
        weapGuessData.weaponDomainMaterial ===
          weapAnswerData.weaponDomainMaterial
      ) {
        weapResults.subStatMaterialAccuracy = "correct";
      } else if (
        weapGuessData.subStat !== weapAnswerData.subStat &&
        weapGuessData.weaponDomainMaterial !==
          weapAnswerData.weaponDomainMaterial
      ) {
        weapResults.subStatMaterialAccuracy = "wrong";
      } else {
        weapResults.subStatMaterialAccuracy = "partial";
      }
      // elite, common
      if (
        weapGuessData.eliteEnemyMaterial ===
          weapAnswerData.eliteEnemyMaterial &&
        weapGuessData.commonEnemyMaterial === weapAnswerData.commonEnemyMaterial
      ) {
        weapResults.eliteCommonAccuracy = "correct";
      } else if (
        weapGuessData.eliteEnemyMaterial !==
          weapAnswerData.eliteEnemyMaterial &&
        weapGuessData.commonEnemyMaterial !== weapAnswerData.commonEnemyMaterial
      ) {
        weapResults.eliteCommonAccuracy = "wrong";
      } else {
        weapResults.eliteCommonAccuracy = "partial";
      }
      // gacha
      if (weapGuessData.gacha === weapAnswerData.gacha) {
        weapResults.gachaAccuracy = "correct";
      } else {
        weapResults.gachaAccuracy = "wrong";
      }
      return weapResults;
    case GameDataType.Food:
      const foodGuessData = { ...guessData } as FoodData;
      const foodAnswerData = { ...answer } as FoodData;
      if (foodGuessData.foodName === foodAnswerData.foodName) {
        const foodAllCorrect: FoodAnswerAccuracy = {
          foodNameAccuracy: "correct",
          rarityFoodTypeAccuracy: "correct",
          specialAccuracy: "correct",
          purchasableAccuracy: "correct",
          recipeAccuracy: "correct",
          eventAccuracy: "correct",
        };
        return foodAllCorrect;
      }
      const foodResults: FoodAnswerAccuracy = {
        foodNameAccuracy: "wrong",
        rarityFoodTypeAccuracy: "default",
        specialAccuracy: "default",
        purchasableAccuracy: "default",
        recipeAccuracy: "default",
        eventAccuracy: "default",
      };
      // rarity, type
      if (
        foodGuessData.rarity === foodAnswerData.rarity &&
        foodGuessData.foodType === foodAnswerData.foodType
      ) {
        foodResults.rarityFoodTypeAccuracy = "correct";
      } else if (
        foodGuessData.rarity !== foodAnswerData.rarity &&
        foodGuessData.foodType !== foodAnswerData.foodType
      ) {
        foodResults.rarityFoodTypeAccuracy = "wrong";
      } else {
        foodResults.rarityFoodTypeAccuracy = "partial";
      }
      // special
      if (foodGuessData.specialDish === foodAnswerData.specialDish) {
        foodResults.specialAccuracy = "correct";
      } else {
        foodResults.specialAccuracy = "wrong";
      }
      // purchasable
      if (foodGuessData.purchasable === foodAnswerData.purchasable) {
        foodResults.purchasableAccuracy = "correct";
      } else {
        foodResults.purchasableAccuracy = "wrong";
      }
      //  recipe
      if (foodGuessData.recipe === foodAnswerData.recipe) {
        foodResults.recipeAccuracy = "correct";
      } else {
        foodResults.recipeAccuracy = "wrong";
      }
      // event
      if (foodGuessData.event === foodAnswerData.event) {
        foodResults.eventAccuracy = "correct";
      } else {
        foodResults.eventAccuracy = "wrong";
      }
      return foodResults;
    default:
      break;
  }
};

export default determineCorrectness;
