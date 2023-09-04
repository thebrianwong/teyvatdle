import { memo, useEffect, useState } from "react";
import GuessTableCell from "../GuessTableCell/GuessTableCell";
import GuessTableRowProps from "./type";
import CharacterAPIData from "../../types/data/characterAPIData.type";
import WeaponAPIData from "../../types/data/weaponAPIData.type";
import FoodAPIData from "../../types/data/foodAPIData.type";
import CharacterTransformedData from "../../types/data/characterTransformedData.type";
import WeaponTransformedData from "../../types/data/weaponTransformedData.type";
import FoodTransformedData from "../../types/data/foodTransformedData.type";
import TableAPIData from "../../types/data/tableAPIData.type";
import formatBirthday from "../../util/formatBirthday";
import checkForQuotes from "../../util/checkForQuotes";
import compareArrays from "../../util/compareArrays";
import CharacterAnswerAccuracy from "../../types/data/characterAnswerAccuracy.type";
import WeaponAnswerAccuracy from "../../types/data/weaponAnswerAccuracy.type";
import FoodAnswerAccuracy from "../../types/data/foodAnswerAccuracy.type";

const GuessTableRow = memo(
  ({ rowType, rowDataProp, answer }: GuessTableRowProps) => {
    const [rowData, setRowData] = useState<
      CharacterTransformedData | WeaponTransformedData | FoodTransformedData
    >();

    const determineCorrectness = (guessData: TableAPIData) => {
      switch (rowType) {
        case "character":
          const charGuessData = { ...guessData } as CharacterAPIData;
          const charAnswerData = { ...answer } as CharacterAPIData;
          if (charGuessData.character_name === charAnswerData.character_name) {
            const charAllCorrect: CharacterAnswerAccuracy = {
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
            compareArrays(
              charGuessData.talent_book,
              charAnswerData.talent_book
            ) &&
            charGuessData.talent_boss_material ===
              charAnswerData.talent_boss_material
          ) {
            charResults.bookTalentAccuracy = "correct";
          } else if (
            !compareArrays(
              charGuessData.talent_book,
              charAnswerData.talent_book
            ) &&
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
              rarityWeapTypeAccuracy: "correct",
              subStatMaterialAccuracy: "correct",
              eliteCommonAccuracy: "correct",
              gachaAccuracy: "correct",
            };
            return weapAllCorrect;
          }
          const weapResults: WeaponAnswerAccuracy = {
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
              rarityFoodTypeAccuracy: "correct",
              specialAccuracy: "correct",
              purchasableAccuracy: "correct",
              recipeAccuracy: "correct",
              eventAccuracy: "correct",
            };
            return foodAllCorrect;
          }
          const foodResults: FoodAnswerAccuracy = {
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

    const transformData = (rawData: TableAPIData) => {
      switch (rowType) {
        case "character":
          const rawCharacterData = { ...rawData } as CharacterAPIData;
          const {
            genderHeightAccuracy,
            rarityRegionAccuracy,
            eleWeaponAccuracy,
            statMaterialAccuracy,
            localAscensionAccuracy,
            bookTalentAccuracy,
            birthdayAccuracy,
          } = determineCorrectness(
            rawCharacterData
          )! as CharacterAnswerAccuracy;
          const transformedCharacterData: CharacterTransformedData = {
            character_image: {
              dataType: "mainImage",
              content: rawCharacterData.character_image_url,
              altText: `Party select icon of ${rawCharacterData.character_name}.`,
              answerAccuracy: "default",
            },
            name: {
              dataType: "textSingle",
              content: rawCharacterData.character_name,
              answerAccuracy: "default",
            },
            gender_height: {
              dataType: "textDouble",
              content1: rawCharacterData.gender,
              content2: rawCharacterData.height,
              answerAccuracy: genderHeightAccuracy,
            },
            rarity_region: {
              dataType: "textDouble",
              content1: `${rawCharacterData.rarity} ⭐`,
              content2: rawCharacterData.region,
              elementalText2: true,
              answerAccuracy: rarityRegionAccuracy,
            },
            ele_weapon: {
              dataType: "textDouble",
              content1: rawCharacterData.element,
              elementalText1: true,
              content2: rawCharacterData.weapon_type,
              answerAccuracy: eleWeaponAccuracy,
            },
            stat_material: {
              dataType: "textImageCombo",
              content1: rawCharacterData.ascension_stat,
              content2: rawCharacterData.enhancement_material_image_url,
              altText2: rawCharacterData.enhancement_material,
              answerAccuracy: statMaterialAccuracy,
            },
            local_ascension: {
              dataType: "imageDouble",
              content1: rawCharacterData.local_specialty_image_url,
              altText1: rawCharacterData.local_specialty,
              content2: rawCharacterData.ascension_boss_material_image_url,
              altText2: rawCharacterData.ascension_boss_material,
              answerAccuracy: localAscensionAccuracy,
            },
            book_talent: {
              dataType: "imageDouble",
              content1: rawCharacterData.talent_book_image_url,
              altText1: rawCharacterData.talent_book,
              content2: rawCharacterData.talent_boss_material_image_url,
              altText2: rawCharacterData.talent_boss_material,
              answerAccuracy: bookTalentAccuracy,
            },
            birthday: {
              dataType: "textSingle",
              content: formatBirthday(rawCharacterData.birthday),
              answerAccuracy: birthdayAccuracy,
            },
          };
          setRowData(transformedCharacterData);
          break;
        case "weapon":
          const rawWeaponData = { ...rawData } as WeaponAPIData;
          const {
            rarityWeapTypeAccuracy,
            subStatMaterialAccuracy,
            eliteCommonAccuracy,
            gachaAccuracy,
          } = determineCorrectness(rawWeaponData) as WeaponAnswerAccuracy;
          const transformedWeaponData: WeaponTransformedData = {
            weapon_image: {
              dataType: "mainImage",
              content: rawWeaponData.weapon_image_url,
              altText: checkForQuotes(rawWeaponData.weapon_name),
              answerAccuracy: "default",
            },
            name: {
              dataType: "textSingle",
              content: rawWeaponData.weapon_name,
              answerAccuracy: "default",
            },
            rarity_type: {
              dataType: "textDouble",
              content1: `${rawWeaponData.rarity} ⭐`,
              content2: rawWeaponData.weapon_type,
              answerAccuracy: rarityWeapTypeAccuracy,
            },
            stat_material: {
              dataType: "textImageCombo",
              content1: rawWeaponData.sub_stat,
              content2: rawWeaponData.weapon_domain_material_image_url,
              altText2: rawWeaponData.weapon_domain_material,
              answerAccuracy: subStatMaterialAccuracy,
            },
            elite_common: {
              dataType: "imageDouble",
              content1: rawWeaponData.elite_enemy_material_image_url,
              altText1: rawWeaponData.elite_enemy_material,
              content2: rawWeaponData.common_enemy_material_image_url,
              altText2: rawWeaponData.common_enemy_material,
              answerAccuracy: eliteCommonAccuracy,
            },
            gacha: {
              dataType: "booleanSingle",
              content: rawWeaponData.gacha,
              answerAccuracy: gachaAccuracy,
            },
          };
          setRowData(transformedWeaponData);
          break;
        case "food":
          const rawFoodData = { ...rawData } as FoodAPIData;
          const {
            rarityFoodTypeAccuracy,
            specialAccuracy,
            purchasableAccuracy,
            recipeAccuracy,
            eventAccuracy,
          } = determineCorrectness(rawFoodData)! as FoodAnswerAccuracy;
          const transformedFoodData: FoodTransformedData = {
            food_image: {
              dataType: "mainImage",
              content: rawFoodData.food_image_url,
              altText: checkForQuotes(rawFoodData.food_name),
              answerAccuracy: "default",
            },
            name: {
              dataType: "textSingle",
              content: rawFoodData.food_name,
              answerAccuracy: "default",
            },
            rarity_type: {
              dataType: "textDouble",
              content1: `${rawFoodData.rarity} ⭐`,
              content2: rawFoodData.food_type,
              answerAccuracy: rarityFoodTypeAccuracy,
            },
            special: {
              dataType: "booleanSingle",
              content: rawFoodData.special_dish,
              answerAccuracy: specialAccuracy,
            },
            purchasable: {
              dataType: "booleanSingle",
              content: rawFoodData.purchasable,
              answerAccuracy: purchasableAccuracy,
            },
            recipe: {
              dataType: "booleanSingle",
              content: rawFoodData.recipe,
              answerAccuracy: recipeAccuracy,
            },
            event: {
              dataType: "booleanSingle",
              content: rawFoodData.event,
              answerAccuracy: eventAccuracy,
            },
          };
          setRowData(transformedFoodData);
          break;
        default:
          break;
      }
    };

    useEffect(() => {
      transformData(rowDataProp);
    }, []);

    return (
      <tr>
        {rowData &&
          Object.keys(rowData).map((key) => {
            return (
              <GuessTableCell
                key={`${rowData.name.content}-${key}`}
                cellData={rowData[key as keyof typeof rowData]}
              />
            );
          })}
      </tr>
    );
  }
);

export default GuessTableRow;
