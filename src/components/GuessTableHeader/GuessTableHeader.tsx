import { ReactElement } from "react";
import GuessTableHeaderProps from "./type";

const GuessTableHeader = ({ headerType }: GuessTableHeaderProps) => {
  let headerColumns: ReactElement;

  if (headerType === "character") {
    headerColumns = (
      <>
        <th style={{ position: "sticky", top: 0 }}></th>
        <th style={{ position: "sticky", top: 0 }}>Character Name</th>
        <th style={{ position: "sticky", top: 0 }}>Gender/Height</th>
        <th style={{ position: "sticky", top: 0 }}>Rarity/Region</th>
        <th style={{ position: "sticky", top: 0 }}>Element/Weapon</th>
        <th style={{ position: "sticky", top: 0 }}>
          Ascension Stat/Enhancement Material
        </th>
        <th style={{ position: "sticky", top: 0 }}>
          Local Specialty/Normal Boss Material
        </th>
        <th style={{ position: "sticky", top: 0 }}>
          Talent Book(s)/Weekly Boss Material
        </th>
        <th style={{ position: "sticky", top: 0 }}>Birthday</th>
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
