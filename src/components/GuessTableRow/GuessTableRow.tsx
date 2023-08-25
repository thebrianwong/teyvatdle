import { useEffect, useState } from "react";
import dummy from "../../placeholder.json";
import GuessTableCell from "../GuessTableCell/GuessTableCell";
import GuessTableRowProps from "./type";

const GuessTableRow = ({ rowType }: GuessTableRowProps) => {
  const [rowData, setRowData] = useState<any>(null);

  const transformData = (rawData: any) => {
    switch (rowType) {
      case "character":
        const transformedData = {
          character_image: rawData.character_image_url,
          name: rawData.name,
          gender_height: {
            attribute1: rawData.gender,
            attribute2: rawData.height,
          },
          rarity_region: {
            attribute1: rawData.rarity,
            attribute2: rawData.region,
          },
          ele_weapon: {
            attribute1: rawData.element,
            attribute2: rawData.weapon_type,
          },
          stat_material: {
            attribute1: rawData.ascension_stat,
            attribute2: rawData.enhancement_material_image_url,
            altText2: rawData.enhancement_material,
          },
          local_ascension: {
            attribute1: rawData.local_specialty_image_url,
            altText1: rawData.local_specialty,
            attribute2: rawData.ascension_boss_material_image_url,
            altText2: rawData.ascension_boss_material,
          },
          book_talent: {
            attribute1: rawData.talent_book_image_url,
            altText1: rawData.talent_book,
            attribute2: rawData.talent_boss_material_image_url,
            altText2: rawData.talent_boss_material,
          },
          birthday: rawData.birthday,
        };
        setRowData(transformedData);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    transformData(dummy);
  }, []);

  return (
    <tr>
      {/* {Object.keys(dummy).map((key) => {
        return (
          <GuessTableCell
            key={`${dummy.character_id}-${key}`}
            cellData={dummy[key as keyof typeof dummy]}
            cellType={key}
          />
        );
      })} */}
      {rowData &&
        Object.keys(rowData).map((key) => {
          console.log(key);
          return (
            <GuessTableCell
              key={`${rowData.name}-${key}`}
              cellData={rowData[key as keyof typeof rowData]}
              cellType={key}
            />
          );
        })}
    </tr>
  );
};

export default GuessTableRow;
