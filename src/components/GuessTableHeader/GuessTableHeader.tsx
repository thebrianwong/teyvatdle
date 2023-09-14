import { ReactElement } from "react";
import GuessTableHeaderProps from "./type";

const GuessTableHeader = ({ selectType }: GuessTableHeaderProps) => {
  let headerColumns: ReactElement;

  if (selectType === "character") {
    headerColumns = (
      <>
        {/* all th need class with background color styling to remove transparent background */}
        <th colSpan={2} style={{ position: "sticky", top: 0 }}>
          Character
        </th>
        <th style={{ position: "sticky", top: 0 }}>
          Gender
          <br />
          Height
        </th>
        <th style={{ position: "sticky", top: 0 }}>
          Rarity
          <br />
          Region
        </th>
        <th style={{ position: "sticky", top: 0 }}>
          Element
          <br />
          Weapon
        </th>
        <th style={{ position: "sticky", top: 0 }}>
          Ascension Stat
          <br />
          Enhancement Material
        </th>
        <th style={{ position: "sticky", top: 0 }}>
          Local Specialty
          <br />
          Normal Boss Material
        </th>
        <th style={{ position: "sticky", top: 0 }}>
          Talent Book(s)
          <br />
          Weekly Boss Material
        </th>
        <th style={{ position: "sticky", top: 0 }}>Birthday</th>
      </>
    );
  } else if (selectType === "weapon") {
    headerColumns = (
      <>
        <th colSpan={2}>Weapon</th>
        <th>
          Rarity
          <br />
          Weapon Type
        </th>
        <th>
          Sub Stat
          <br />
          Weapon Ascension Material
        </th>
        <th>
          Elite Enhancement Material
          <br />
          Common Enhancement Material
        </th>
        <th>Gacha Weapon</th>
      </>
    );
  } else if (selectType === "food") {
    headerColumns = (
      <>
        <th colSpan={2}>Food</th>
        <th>
          Rarity
          <br />
          Food Type
        </th>
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
