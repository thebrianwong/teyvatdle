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

const GuessTableRow = memo(
  ({ rowType, rowDataProp, answer }: GuessTableRowProps) => {
    const [rowData, setRowData] = useState<
      CharacterTransformedData | WeaponTransformedData | FoodTransformedData
    >();

  const determineCorrectness = (guessData: TableAPIData) => {
    switch (rowType) {
      case "character":
        const castedCharData = { ...guessData } as CharacterAPIData;
        const castedAnswerData = { ...answer } as CharacterAPIData;
        if (castedCharData.character_name === castedAnswerData.character_name) {
          const allCorrect = {
            gender_height: "correct",
            rarity_region: "correct",
            ele_weapon: "correct",
            stat_material: "correct",
            local_ascension: "correct",
            book_talent: "correct",
            birthday: "correct",
          };
          return allCorrect;
        }
        const results: { [key: string]: string | null } = {
          gender_height: null,
          rarity_region: null,
          ele_weapon: null,
          stat_material: null,
          local_ascension: null,
          book_talent: null,
          birthday: null,
        };
        // gender, height
        if (
          castedCharData.gender === castedAnswerData.gender &&
          castedCharData.height === castedAnswerData.height
        ) {
          results.gender_height = "correct";
        } else if (
          castedCharData.gender !== castedAnswerData.gender &&
          castedCharData.height !== castedAnswerData.height
        ) {
          results.gender_height = "wrong";
        } else {
          results.gender_height = "partial";
        }
        // rarity, region
        if (
          castedCharData.rarity === castedAnswerData.rarity &&
          castedCharData.region === castedAnswerData.region
        ) {
          results.rarity_region = "correct";
        } else if (
          castedCharData.rarity !== castedAnswerData.rarity &&
          castedCharData.region !== castedAnswerData.region
        ) {
          results.rarity_region = "wrong";
        } else {
          results.rarity_region = "partial";
        }
        // element, weapon
        if (
          castedCharData.element === castedAnswerData.element &&
          castedCharData.weapon_type === castedAnswerData.weapon_type
        ) {
          results.ele_weapon = "correct";
        } else if (
          castedCharData.element !== castedAnswerData.element &&
          castedCharData.weapon_type !== castedAnswerData.weapon_type
        ) {
          results.ele_weapon = "wrong";
        } else {
          results.ele_weapon = "partial";
        }
        // stat, enhancement material
        if (
          castedCharData.ascension_stat === castedAnswerData.ascension_stat &&
          castedCharData.enhancement_material ===
            castedAnswerData.enhancement_material
        ) {
          results.stat_material = "correct";
        } else if (
          castedCharData.ascension_stat !== castedAnswerData.ascension_stat &&
          castedCharData.enhancement_material !==
            castedAnswerData.enhancement_material
        ) {
          results.stat_material = "wrong";
        } else {
          results.stat_material = "partial";
        }
        // local specialty, ascension material
        if (
          castedCharData.local_specialty === castedAnswerData.local_specialty &&
          castedCharData.ascension_boss_material ===
            castedAnswerData.ascension_boss_material
        ) {
          results.local_ascension = "correct";
        } else if (
          castedCharData.local_specialty !== castedAnswerData.local_specialty &&
          castedCharData.ascension_boss_material !==
            castedAnswerData.ascension_boss_material
        ) {
          results.local_ascension = "wrong";
        } else {
          results.local_ascension = "partial";
        }
        // talent books, talent material
        if (
          compareArrays(
            castedCharData.talent_book,
            castedAnswerData.talent_book
          ) &&
          castedCharData.talent_boss_material ===
            castedAnswerData.talent_boss_material
        ) {
          results.book_talent = "correct";
        } else if (
          !compareArrays(
            castedCharData.talent_book,
            castedAnswerData.talent_book
          ) &&
          castedCharData.talent_boss_material !==
            castedAnswerData.talent_boss_material
        ) {
          results.book_talent = "wrong";
        } else {
          results.book_talent = "partial";
        }
        // birthday
        if (castedCharData.birthday && castedAnswerData.birthday) {
          const charDate = new Date(castedCharData.birthday);
          const answerDate = new Date(castedAnswerData.birthday);
          if (
            charDate.getUTCMonth() === answerDate.getUTCMonth() &&
            charDate.getUTCDate() === answerDate.getUTCDate()
          ) {
            results.birthday = "correct";
          } else if (
            charDate.getUTCMonth() !== answerDate.getUTCMonth() &&
            charDate.getUTCDate() !== answerDate.getUTCDate()
          ) {
            results.birthday = "wrong";
          } else {
            results.birthday = "partial";
          }
        } else {
          results.birthday = "wrong";
        }
        break;

      default:
        break;
    }
  };

  const transformData = (rawData: TableAPIData) => {
    switch (rowType) {
      case "character":
        const rawCharacterData = { ...rawData } as CharacterAPIData;
        const transformedCharacterData: CharacterTransformedData = {
          character_image: {
            dataType: "mainImage",
            content: rawCharacterData.character_image_url,
            altText: `Party select icon of ${rawCharacterData.character_name}.`,
          },
          name: {
            dataType: "textSingle",
            content: rawCharacterData.character_name,
          },
          gender_height: {
            dataType: "textDouble",
            content1: rawCharacterData.gender,
            content2: rawCharacterData.height,
          },
          rarity_region: {
            dataType: "textDouble",
            content1: `${rawCharacterData.rarity} ⭐`,
            content2: rawCharacterData.region,
            elementalText2: true,
          },
          ele_weapon: {
            dataType: "textDouble",
            content1: rawCharacterData.element,
            elementalText1: true,
            content2: rawCharacterData.weapon_type,
          },
          stat_material: {
            dataType: "textImageCombo",
            content1: rawCharacterData.ascension_stat,
            content2: rawCharacterData.enhancement_material_image_url,
            altText2: rawCharacterData.enhancement_material,
          },
          local_ascension: {
            dataType: "imageDouble",
            content1: rawCharacterData.local_specialty_image_url,
            altText1: rawCharacterData.local_specialty,
            content2: rawCharacterData.ascension_boss_material_image_url,
            altText2: rawCharacterData.ascension_boss_material,
          },
          book_talent: {
            dataType: "imageDouble",
            content1: rawCharacterData.talent_book_image_url,
            altText1: rawCharacterData.talent_book,
            content2: rawCharacterData.talent_boss_material_image_url,
            altText2: rawCharacterData.talent_boss_material,
          },
          birthday: {
            dataType: "textSingle",
            content: formatBirthday(rawCharacterData.birthday),
          },
        };
        setRowData(transformedCharacterData);
        break;
      case "weapon":
        const rawWeaponData = { ...rawData } as WeaponAPIData;
        const transformedWeaponData: WeaponTransformedData = {
          weapon_image: {
            dataType: "mainImage",
            content: rawWeaponData.weapon_image_url,
            altText: checkForQuotes(rawWeaponData.weapon_name),
          },
          name: { dataType: "textSingle", content: rawWeaponData.weapon_name },
          rarity_type: {
            dataType: "textDouble",
            content1: `${rawWeaponData.rarity} ⭐`,
            content2: rawWeaponData.weapon_type,
          },
          stat_material: {
            dataType: "textImageCombo",
            content1: rawWeaponData.sub_stat,
            content2: rawWeaponData.weapon_domain_material_image_url,
            altText2: rawWeaponData.weapon_domain_material,
          },
          elite_common: {
            dataType: "imageDouble",
            content1: rawWeaponData.elite_enemy_material_image_url,
            altText1: rawWeaponData.elite_enemy_material,
            content2: rawWeaponData.common_enemy_material_image_url,
            altText2: rawWeaponData.common_enemy_material,
          },
          gacha: {
            dataType: "booleanSingle",
            content: rawWeaponData.gacha,
          },
        };
        setRowData(transformedWeaponData);
        break;
      case "food":
        const rawFoodData = { ...rawData } as FoodAPIData;
        console.log(rawFoodData.food_name);
        // const checkForQuotes
        const transformedFoodData: FoodTransformedData = {
          food_image: {
            dataType: "mainImage",
            content: rawFoodData.food_image_url,
            altText: checkForQuotes(rawFoodData.food_name),
          },
          name: { dataType: "textSingle", content: rawFoodData.food_name },
          rarity_type: {
            dataType: "textDouble",
            content1: `${rawFoodData.rarity} ⭐`,
            content2: rawFoodData.food_type,
          },
          special: {
            dataType: "booleanSingle",
            content: rawFoodData.special_dish,
          },
          purchasable: {
            dataType: "booleanSingle",
            content: rawFoodData.purchasable,
          },
          recipe: {
            dataType: "booleanSingle",
            content: rawFoodData.recipe,
          },
          event: {
            dataType: "booleanSingle",
            content: rawFoodData.event,
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
};

export default GuessTableRow;
