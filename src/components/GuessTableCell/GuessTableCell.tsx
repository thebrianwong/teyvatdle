import { ReactElement } from "react";
import GuessTableCellProps from "./type";
import "./styles.scss";

const GuessTableCell = ({ cellData }: GuessTableCellProps) => {
  let cellElement: ReactElement;

  if (cellData.dataType === "mainImage") {
    cellElement = <img src={cellData.content} alt={cellData.altText} />;
  } else if (cellData.dataType === "textSingle") {
    const cellContent = cellData.content || "None";
    cellElement = <>{cellContent}</>;
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
  } else if (cellData.dataType === "textImageCombo") {
    const cellContent1 = cellData.content1 || "None";
    cellElement = (
      <>
        {cellContent1}
        <img src={cellData.content2} alt={cellData.altText2 + "."} />
      </>
    );
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
  } else if (cellData.dataType === "booleanSingle") {
    const cellContent = cellData.content ? "✅" : "❌";
    cellElement = <>{cellContent}</>;
  }

  return <td className={`${cellData.answerAccuracy}`}>{cellElement!}</td>;
};

export default GuessTableCell;
