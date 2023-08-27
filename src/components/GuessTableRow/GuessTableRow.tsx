import { useEffect, useState } from "react";
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

const GuessTableRow = ({ rowType, rowDataProp }: GuessTableRowProps) => {
  const [rowData, setRowData] = useState<
    CharacterTransformedData | WeaponTransformedData | FoodTransformedData
  >();

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
            altText: rawWeaponData.weapon_name,
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
        const transformedFoodData: FoodTransformedData = {
          food_image: {
            dataType: "mainImage",
            content: rawFoodData.food_image_url,
            altText: JSON.parse(rawFoodData.food_name),
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
              key={`${rowData.name}-${key}`}
              cellData={rowData[key as keyof typeof rowData]}
            />
          );
        })}
    </tr>
  );
};

export default GuessTableRow;
