import CharacterAPIData from "../../types/data/characterAPIData.type";
import CharacterAnswerAccuracy from "../../types/data/characterAnswerAccuracy.type";
import FoodAPIData from "../../types/data/foodAPIData.type";
import FoodAnswerAccuracy from "../../types/data/foodAnswerAccuracy.type";
import TableAPIData from "../../types/data/tableAPIData.type";
import WeaponAPIData from "../../types/data/weaponAPIData.type";
import WeaponAnswerAccuracy from "../../types/data/weaponAnswerAccuracy.type";
import SelectType from "../../types/selectType.type";
import compareArrays from "../../utils/compareArrays";

const determineCorrectness = (
  rowType: SelectType,
  guessData: TableAPIData,
  answer: TableAPIData
) => {
  switch (rowType) {
    case "character":
      const charGuessData = { ...guessData } as CharacterAPIData;
      const charAnswerData = { ...answer } as CharacterAPIData;
      if (charGuessData.character_name === charAnswerData.character_name) {
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
        charGuessData.weapon_type === charAnswerData.weapon_type
      ) {
        charResults.eleWeaponAccuracy = "correct";
      } else if (
        charGuessData.element !== charAnswerData.element &&
        charGuessData.weapon_type !== charAnswerData.weapon_type
      ) {
        charResults.eleWeaponAccuracy = "wrong";
      } else {
        charResults.eleWeaponAccuracy = "partial";
      }
      // stat, enhancement material
      if (
        charGuessData.ascension_stat === charAnswerData.ascension_stat &&
        charGuessData.enhancement_material ===
          charAnswerData.enhancement_material
      ) {
        charResults.statMaterialAccuracy = "correct";
      } else if (
        charGuessData.ascension_stat !== charAnswerData.ascension_stat &&
        charGuessData.enhancement_material !==
          charAnswerData.enhancement_material
      ) {
        charResults.statMaterialAccuracy = "wrong";
      } else {
        charResults.statMaterialAccuracy = "partial";
      }
      // local specialty, ascension material
      if (
        charGuessData.local_specialty === charAnswerData.local_specialty &&
        charGuessData.ascension_boss_material ===
          charAnswerData.ascension_boss_material
      ) {
        charResults.localAscensionAccuracy = "correct";
      } else if (
        charGuessData.local_specialty !== charAnswerData.local_specialty &&
        charGuessData.ascension_boss_material !==
          charAnswerData.ascension_boss_material
      ) {
        charResults.localAscensionAccuracy = "wrong";
      } else {
        charResults.localAscensionAccuracy = "partial";
      }
      // talent books, talent material
      if (
        compareArrays(charGuessData.talent_book, charAnswerData.talent_book) &&
        charGuessData.talent_boss_material ===
          charAnswerData.talent_boss_material
      ) {
        charResults.bookTalentAccuracy = "correct";
      } else if (
        !compareArrays(charGuessData.talent_book, charAnswerData.talent_book) &&
        charGuessData.talent_boss_material !==
          charAnswerData.talent_boss_material
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
    case "weapon":
      const weapGuessData = { ...guessData } as WeaponAPIData;
      const weapAnswerData = { ...answer } as WeaponAPIData;
      if (weapGuessData.weapon_name === weapAnswerData.weapon_name) {
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
        weapGuessData.weapon_type === weapAnswerData.weapon_type
      ) {
        weapResults.rarityWeapTypeAccuracy = "correct";
      } else if (
        weapGuessData.rarity !== weapAnswerData.rarity &&
        weapGuessData.weapon_type !== weapAnswerData.weapon_type
      ) {
        weapResults.rarityWeapTypeAccuracy = "wrong";
      } else {
        weapResults.rarityWeapTypeAccuracy = "partial";
      }
      // stat, material
      if (
        weapGuessData.sub_stat === weapAnswerData.sub_stat &&
        weapGuessData.weapon_domain_material ===
          weapAnswerData.weapon_domain_material
      ) {
        weapResults.subStatMaterialAccuracy = "correct";
      } else if (
        weapGuessData.sub_stat !== weapAnswerData.sub_stat &&
        weapGuessData.weapon_domain_material !==
          weapAnswerData.weapon_domain_material
      ) {
        weapResults.subStatMaterialAccuracy = "wrong";
      } else {
        weapResults.subStatMaterialAccuracy = "partial";
      }
      // elite, common
      if (
        weapGuessData.elite_enemy_material ===
          weapAnswerData.elite_enemy_material &&
        weapGuessData.common_enemy_material ===
          weapAnswerData.common_enemy_material
      ) {
        weapResults.eliteCommonAccuracy = "correct";
      } else if (
        weapGuessData.elite_enemy_material !==
          weapAnswerData.elite_enemy_material &&
        weapGuessData.common_enemy_material !==
          weapAnswerData.common_enemy_material
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
    case "food":
      const foodGuessData = { ...guessData } as FoodAPIData;
      const foodAnswerData = { ...answer } as FoodAPIData;
      if (foodGuessData.food_name === foodAnswerData.food_name) {
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
        foodGuessData.food_type === foodAnswerData.food_type
      ) {
        foodResults.rarityFoodTypeAccuracy = "correct";
      } else if (
        foodGuessData.rarity !== foodAnswerData.rarity &&
        foodGuessData.food_type !== foodAnswerData.food_type
      ) {
        foodResults.rarityFoodTypeAccuracy = "wrong";
      } else {
        foodResults.rarityFoodTypeAccuracy = "partial";
      }
      // special
      if (foodGuessData.special_dish === foodAnswerData.special_dish) {
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
