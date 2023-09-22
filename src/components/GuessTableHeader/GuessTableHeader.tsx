import { ReactElement } from "react";
import GuessTableHeaderProps from "./type";
import "./styles.scss";

const GuessTableHeader = ({ selectType }: GuessTableHeaderProps) => {
  let headerColumns: ReactElement;

  if (selectType === "character") {
    headerColumns = (
      <>
        {/* all th need class with background color styling to remove transparent background */}
        <th colSpan={2}>Character</th>
        <th>
          Gender
          <br />
          Height
        </th>
        <th>
          Rarity
          <br />
          Region
        </th>
        <th>
          Element
          <br />
          Weapon
        </th>
        <th>
          Ascension Stat
          <br />
          Enhancement Material
        </th>
        <th>
          Local Specialty
          <br />
          Normal Boss Material
        </th>
        <th>
          Talent Book(s)
          <br />
          Weekly Boss Material
        </th>
        <th>Birthday</th>
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
    <thead /* style={{ position: "relative" }} */>
      <tr
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "darkgray",
        }}
      >
        {headerColumns!}
      </tr>
    </thead>
  );
};

export default GuessTableHeader;
