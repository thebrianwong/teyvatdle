import { useEffect, useState } from "react";
import dummy from "../../placeholder.json";
import dummyQiqi from "../../nonTravPlaceholder.json";
import dummyWeapon from "../../weaponPlaceholder.json";
import dummyFood from "../../foodPlaceholder.json";
import GuessTableCell from "../GuessTableCell/GuessTableCell";
import GuessTableRowProps from "./type";

const GuessTableRow = ({ rowType }: GuessTableRowProps) => {
  const [rowData, setRowData] = useState<any>(null);

  const transformData = (rawData: any) => {
    switch (rowType) {
      case "character":
        const transformedCharacterData = {
          character_image: {
            dataType: "mainImage",
            content: rawData.character_image_url,
            altText: `Party select icon of ${rawData.character_name}.`,
          },
          name: { dataType: "textSingle", content: rawData.character_name },
          gender_height: {
            dataType: "textDouble",
            content1: rawData.gender,
            content2: rawData.height,
          },
          rarity_region: {
            dataType: "textDouble",
            content1: `${rawData.rarity} ⭐`,
            content2: rawData.region,
            elementalText2: true,
          },
          ele_weapon: {
            dataType: "textDouble",
            content1: rawData.element,
            elementalText1: true,
            content2: rawData.weapon_type,
          },
          stat_material: {
            dataType: "textImageCombo",
            content1: rawData.ascension_stat,
            content2: rawData.enhancement_material_image_url,
            altText2: rawData.enhancement_material,
          },
          local_ascension: {
            dataType: "imageDouble",
            content1: rawData.local_specialty_image_url,
            altText1: rawData.local_specialty,
            content2: rawData.ascension_boss_material_image_url,
            altText2: rawData.ascension_boss_material,
          },
          book_talent: {
            dataType: "imageDouble",
            content1: rawData.talent_book_image_url,
            altText1: rawData.talent_book,
            content2: rawData.talent_boss_material_image_url,
            altText2: rawData.talent_boss_material,
          },
          birthday: { dataType: "textSingle", content: rawData.birthday },
        };
        setRowData(transformedCharacterData);
        break;
      case "weapon":
        const transformedWeaponData = {
          weapon_image: {
            dataType: "mainImage",
            content: rawData.weapon_image_url,
            altText: rawData.weapon_name,
          },
          name: { dataType: "textSingle", content: rawData.weapon_name },
          rarity_type: {
            dataType: "textDouble",
            content1: `${rawData.rarity} ⭐`,
            content2: rawData.weapon_type,
          },
          stat_material: {
            dataType: "textImageCombo",
            content1: rawData.sub_stat,
            content2: rawData.weapon_domain_material_image_url,
            altText2: rawData.weapon_domain_material,
          },
          elite_common: {
            dataType: "imageDouble",
            content1: rawData.elite_enemy_material_image_url,
            altText1: rawData.elite_enemy_material,
            content2: rawData.common_enemy_material_image_url,
            altText2: rawData.common_enemy_material,
          },
          gacha: {
            dataType: "booleanSingle",
            content: rawData.gacha,
          },
        };
        setRowData(transformedWeaponData);
        break;
      case "food":
        const transformedFoodData = {
          food_image: {
            dataType: "mainImage",
            content: rawData.food_image_url,
            altText: JSON.parse(rawData.food_name),
          },
          name: { dataType: "textSingle", content: rawData.food_name },
          rarity_type: {
            dataType: "textDouble",
            content1: `${rawData.rarity} ⭐`,
            content2: rawData.food_type,
          },
          special: {
            dataType: "booleanSingle",
            content: rawData.special_dish,
          },
          purchasable: {
            dataType: "booleanSingle",
            content: rawData.purchasable,
          },
          recipe: {
            dataType: "booleanSingle",
            content: rawData.recipe,
          },
          event: {
            dataType: "booleanSingle",
            content: rawData.event,
          },
        };
        setRowData(transformedFoodData);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // transformData(dummy);
    // transformData(dummyQiqi);
    // transformData(dummyWeapon);
    transformData(dummyFood);
  }, []);

  return (
    <tr>
      {rowData &&
        Object.keys(rowData).map((key) => {
          console.log(key);
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
