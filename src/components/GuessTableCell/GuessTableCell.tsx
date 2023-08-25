import { ReactElement } from "react";
import GuessTableCellProps from "./type";

const GuessTableCell = ({ cellData, cellType }: GuessTableCellProps) => {
  const isImageURL = new RegExp(/.png$/);
  console.log(cellType);

  if (typeof cellData === "object") {
    let element1: ReactElement;
    let element2: HTMLElement;
    if (!Array.isArray(cellData.attribute1)) {
      if (cellData!.altText1 && typeof cellData.attribute1 === "string") {
        element1 = <img src={cellData.attribute1} alt={cellData.altText1} />;
      }
    }
  }

  if (cellData === null) {
    // Aloy and Traveler have no region. Traveler has no boss ascension material, etc.
    return <td>None</td>;
  } else if (typeof cellData === "string" && isImageURL.exec(cellData)) {
    return (
      <td>
        <img src={cellData} alt={``} />
      </td>
    );
  } else if (
    Array.isArray(cellData) &&
    cellData.every((arrayItem) => isImageURL.exec(arrayItem)) // Multiple images for Traveler's talent books
  ) {
    return (
      <td>
        {cellData.map((arrayItem) => {
          return <img key={arrayItem} src={arrayItem} />;
        })}
      </td>
    );
  } else if (
    Array.isArray(cellData) &&
    !cellData.every((arrayItem) => isImageURL.exec(arrayItem)) // Names of Traveler's multiple talent books
  ) {
    return (
      <td>
        {cellData.map((arrayItem) => {
          return <p key={arrayItem}>{arrayItem}</p>;
        })}
      </td>
    );
  } else {
    return <td>{cellData}</td>;
  }
};

export default GuessTableCell;
