import { ReactElement, memo } from "react";
import GuessTableHeaderProps from "./type";
import "./styles.scss";
import { GameDataType } from "../../__generated__/graphql";

const GuessTableHeader = memo(({ selectType }: GuessTableHeaderProps) => {
  let headerColumns: ReactElement;

  switch (selectType) {
    case GameDataType.Character:
      headerColumns = (
        <>
          <th colSpan={2}>Character</th>
          <th>
            <p>Gender</p>
            <p>Height</p>
          </th>
          <th>
            <p>Rarity</p>
            <p>Region</p>
          </th>
          <th>
            <p>Element</p>
            <p>Weapon</p>
          </th>
          <th>
            <p>Ascension Stat</p>
            <p>Enhancement Material</p>
          </th>
          <th>
            <p>Local Specialty</p>
            <p>Normal Boss Material</p>
          </th>
          <th>
            <p>Talent Book(s)</p>
            <p>Weekly Boss Material</p>
          </th>
          <th>Birthday</th>
        </>
      );
      break;
    case GameDataType.Weapon:
      headerColumns = (
        <>
          <th colSpan={2}>Weapon</th>
          <th>
            <p>Rarity</p>
            <p>Weapon Type</p>
          </th>
          <th>
            <p>Sub Stat</p>
            <p>Weapon Ascension Material</p>
          </th>
          <th>
            <p>Elite Enhancement Material</p>
            <p>Common Enhancement Material</p>
          </th>
          <th>Gacha Weapon</th>
        </>
      );
      break;
    case GameDataType.Food:
      headerColumns = (
        <>
          <th colSpan={2}>Food</th>
          <th>
            <p>Rarity</p>
            <p>Food Type</p>
          </th>
          <th>Special Dish</th>
          <th>Purchasable from Vendor</th>
          <th>Has Recipe</th>
          <th>From Event</th>
        </>
      );
      break;
    default:
      break;
  }

  return (
    <thead>
      <tr>{headerColumns!}</tr>
    </thead>
  );
});

export default GuessTableHeader;
