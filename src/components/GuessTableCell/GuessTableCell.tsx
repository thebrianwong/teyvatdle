import { ReactElement } from "react";
import GuessTableCellProps from "./type";

const GuessTableCell = ({ cellData }: GuessTableCellProps) => {
  let cellElement: ReactElement;

  if (cellData.dataType === "mainImage") {
    cellElement = (
      <td>
        <img src={cellData.content} alt={cellData.altText + "."} />
      </td>
    );
  } else if (cellData.dataType === "textSingle") {
    const cellContent = cellData.content || "None";
    cellElement = <td>{cellContent}</td>;
  } else if (cellData.dataType === "textDouble") {
    const cellContent1 = cellData.content1 || "None";
    const cellContent2 = cellData.content2 || "None";
    cellElement = (
      <td>
        {cellContent1}
        <br />
        {cellContent2}
      </td>
    );
  } else if (cellData.dataType === "textImageCombo") {
    cellElement = (
      <td>
        {cellData.content1}
        <img src={cellData.content2} alt={cellData.altText2 + "."} />
      </td>
    );
  } else if (cellData.dataType === "imageDouble") {
    if (Array.isArray(cellData.content1) && Array.isArray(cellData.altText1)) {
      cellElement = (
        <td>
          {cellData.content1.map((content, index) => {
            return (
              <img
                key={content}
                src={content}
                alt={cellData.altText1[index] + "."}
              />
            );
          })}
          <img src={cellData.content2} alt={cellData.altText2 + "."} />
        </td>
      );
    } else if (
      !Array.isArray(cellData.content1) &&
      !Array.isArray(cellData.altText1)
    ) {
      if (cellData.content1 === null) {
        cellElement = (
          <td>
            None
            <img src={cellData.content2} alt={cellData.altText2 + "."} />
          </td>
        );
      } else if (cellData.content2 === null) {
        cellElement = (
          <td>
            <img src={cellData.content1} alt={cellData.altText1 + "."} />
            None
          </td>
        );
      } else {
        cellElement = (
          <td>
            <img src={cellData.content1} alt={cellData.altText1 + "."} />
            <img src={cellData.content2} alt={cellData.altText2 + "."} />
          </td>
        );
      }
    }
  } else if (cellData.dataType === "booleanSingle") {
    const cellContent = cellData.content ? "✅" : "❌";
    cellElement = <td>{cellContent}</td>;
  }

  return cellElement!;
};

export default GuessTableCell;
