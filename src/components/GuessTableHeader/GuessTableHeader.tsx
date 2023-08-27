import { ReactElement } from "react";
import GuessTableHeaderProps from "./type";

const GuessTableHeader = ({ headerType }: GuessTableHeaderProps) => {
  let headerColumns: ReactElement;

  if (headerType === "character") {
    headerColumns = (
      <>
        <th></th>
        <th>Character Name</th>
        <th>Gender/Height</th>
        <th>Rarity/Region</th>
        <th>Element/Weapon</th>
        <th>Ascension Stat/Enhancement Material</th>
        <th>Local Specialty/Normal Boss Material</th>
        <th>Talent Book(s)/Weekly Boss Material</th>
        <th>Birthday</th>
      </>
    );
  } else if (headerType === "weapon") {
    headerColumns = (
      <>
        <th></th>
        <th>Weapon Name</th>
        <th>Rarity/Weapon Type</th>
        <th>Sub Stat/Weapon Ascension Material</th>
        <th>Elite/Common Enhancement Material</th>
        <th>Gacha Weapon</th>
      </>
    );
  } else if (headerType === "food") {
    headerColumns = (
      <>
        <th></th>
        <th>Food Name</th>
        <th>Rarity/Food Type</th>
        <th>Special Dish</th>
        <th>Purchasable from Vendor</th>
        <th>Has Recipe</th>
        <th>From Event</th>
      </>
    );
  }

  return (
    <thead>
      <tr>{headerColumns!}</tr>
    </thead>
  );
};

export default GuessTableHeader;
