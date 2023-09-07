import { ReactElement } from "react";
import GuessTableCellProps from "./type";
import "./styles.scss";

const GuessTableCell = ({ cellData }: GuessTableCellProps) => {
  let cellElement: ReactElement;
  let cellClass = "table-cell-";

  if (cellData.dataType === "mainImage") {
    cellElement = <img src={cellData.content} alt={cellData.altText} />;
    cellClass = cellClass.concat("main-image");
  } else if (cellData.dataType === "textSingle") {
    const cellContent = cellData.content || "None";
    cellElement = <>{cellContent}</>;
    cellClass = cellClass.concat("text-single");
  } else if (cellData.dataType === "textDouble") {
    const cellContent1 = cellData.content1 || "None";
    const cellContent2 = cellData.content2 || "None";
    cellElement = (
      <>
        {cellContent1}
        <br />
        {cellContent2}
      </>
    );
    cellClass = cellClass.concat("text-double");
  } else if (cellData.dataType === "textImageCombo") {
    const cellContent1 = cellData.content1 || "None";
    cellElement = (
      <>
        {cellContent1}
        <img src={cellData.content2} alt={cellData.altText2 + "."} />
      </>
    );
    cellClass = cellClass.concat("text-image-combo");
  } else if (cellData.dataType === "imageDouble") {
    if (Array.isArray(cellData.content1) && Array.isArray(cellData.altText1)) {
      cellElement = (
        <>
          {cellData.content1.map((content, index) => {
            return (
              <img
                key={content}
                src={content}
                alt={cellData.altText1[index] + "."}
              />
            );
          })}
          <img src={cellData.content2!} alt={cellData.altText2 + "."} />
        </>
      );
    } else if (
      !Array.isArray(cellData.content1) &&
      !Array.isArray(cellData.altText1)
    ) {
      if (cellData.content1 === null) {
        cellElement = (
          <>
            None
            <img src={cellData.content2!} alt={cellData.altText2 + "."} />
          </>
        );
      } else if (cellData.content2 === null) {
        cellElement = (
          <>
            <img src={cellData.content1} alt={cellData.altText1 + "."} />
            None
          </>
        );
      } else {
        cellElement = (
          <>
            <img src={cellData.content1} alt={cellData.altText1 + "."} />
            <img src={cellData.content2} alt={cellData.altText2 + "."} />
          </>
        );
      }
    }
    cellClass = cellClass.concat("image-double");
  } else if (cellData.dataType === "booleanSingle") {
    const cellContent = cellData.content ? "✔️" : "✗";
    cellElement = <>{cellContent}</>;
    cellClass = cellClass.concat("boolean-single");
  }

  return (
    <td className={`table-cell ${cellData.answerAccuracy} ${cellClass}`}>
      {cellElement!}
    </td>
  );
};

export default GuessTableCell;
