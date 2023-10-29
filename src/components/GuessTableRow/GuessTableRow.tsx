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
import formatBirthday from "../../utils/formatBirthday";
import checkForQuotes from "../../utils/checkForQuotes";
import determineCorrectness from "./determineCorrectness";
import CharacterAnswerAccuracy from "../../types/data/characterAnswerAccuracy.type";
import WeaponAnswerAccuracy from "../../types/data/weaponAnswerAccuracy.type";
import FoodAnswerAccuracy from "../../types/data/foodAnswerAccuracy.type";

const GuessTableRow = memo(
  ({
    rowType,
    rowDataProp,
    answer,
    complete,
    playAnimations,
  }: GuessTableRowProps) => {
    const [rowData, setRowData] = useState<
      CharacterTransformedData | WeaponTransformedData | FoodTransformedData
    >();

    const transformData = (rawData: TableAPIData) => {
      switch (rowType) {
        case "character":
          const rawCharacterData = { ...rawData } as CharacterAPIData;
          const {
            charNameAccuracy,
            genderHeightAccuracy,
            rarityRegionAccuracy,
            eleWeaponAccuracy,
            statMaterialAccuracy,
            localAscensionAccuracy,
            bookTalentAccuracy,
            birthdayAccuracy,
          } = determineCorrectness(
            rowType,
            rawCharacterData,
            answer
          ) as CharacterAnswerAccuracy;
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
              answerAccuracy: charNameAccuracy,
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
              numOfImgs2: 3,
              answerAccuracy: statMaterialAccuracy,
            },
            local_ascension: {
              dataType: "imageDouble",
              content1: rawCharacterData.local_specialty_image_url,
              altText1: rawCharacterData.local_specialty,
              numOfImgs1: 1,
              content2: rawCharacterData.ascension_boss_material_image_url,
              altText2: rawCharacterData.ascension_boss_material,
              answerAccuracy: localAscensionAccuracy,
              numOfImgs2: 1,
            },
            book_talent: {
              dataType: "imageDouble",
              content1: rawCharacterData.talent_book_image_url,
              altText1: rawCharacterData.talent_book,
              numOfImgs1: 3,
              content2: rawCharacterData.talent_boss_material_image_url,
              altText2: rawCharacterData.talent_boss_material,
              answerAccuracy: bookTalentAccuracy,
              numOfImgs2: 1,
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
            weapNameAccuracy,
            rarityWeapTypeAccuracy,
            subStatMaterialAccuracy,
            eliteCommonAccuracy,
            gachaAccuracy,
          } = determineCorrectness(
            rowType,
            rawWeaponData,
            answer
          ) as WeaponAnswerAccuracy;
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
              answerAccuracy: weapNameAccuracy,
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
              numOfImgs2: 4,
              answerAccuracy: subStatMaterialAccuracy,
            },
            elite_common: {
              dataType: "imageDouble",
              content1: rawWeaponData.elite_enemy_material_image_url,
              altText1: rawWeaponData.elite_enemy_material,
              numOfImgs1: 3,
              content2: rawWeaponData.common_enemy_material_image_url,
              altText2: rawWeaponData.common_enemy_material,
              numOfImgs2: 3,
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
            foodNameAccuracy,
            rarityFoodTypeAccuracy,
            specialAccuracy,
            purchasableAccuracy,
            recipeAccuracy,
            eventAccuracy,
          } = determineCorrectness(
            rowType,
            rawFoodData,
            answer
          ) as FoodAnswerAccuracy;
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
              answerAccuracy: foodNameAccuracy,
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
          Object.keys(rowData).map((key, index) => {
            return (
              <GuessTableCell
                key={`${rowData.name.content}-${key}`}
                cellData={rowData[key as keyof typeof rowData]}
                cellNumber={index}
                complete={complete}
                playAnimations={playAnimations}
              />
            );
          })}
      </tr>
    );
  }
);

export default GuessTableRow;
