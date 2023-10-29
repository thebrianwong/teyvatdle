import { ReactElement, useEffect, useRef } from "react";
import GuessTableCellProps from "./type";
import "./styles.scss";

const GuessTableCell = ({
  cellData,
  cellNumber,
  complete,
  playAnimations,
}: GuessTableCellProps) => {
  let cellElement: ReactElement;
  let cellClass = "table-cell-";
  const animateCell = cellNumber > 0 ? "guess-animation-start" : "";
  const cellRef = useRef<HTMLTableCellElement>(null);

  useEffect(() => {
    if (cellNumber > 0 && !complete && playAnimations) {
      const ANIMATION_TIME = 750;
      setTimeout(() => {
        cellRef.current?.scrollIntoView({
          behavior: "smooth",
        });
        cellRef.current?.classList.add("guess-animation-end");
      }, 250 + (cellNumber - 1) * ANIMATION_TIME);
    } else {
      cellRef.current?.classList.add("guess-animation-end");
    }
  }, []);

  if (cellData.dataType === "mainImage") {
    cellElement = (
      <div className="main-image-container">
        <img src={cellData.content} alt={cellData.altText} />
      </div>
    );
    cellClass = cellClass.concat("main-image");
  } else if (cellData.dataType === "textSingle") {
    const cellContent = cellData.content || "None";
    cellElement = <>{cellContent}</>;
    cellClass = cellClass.concat("text-single");
  } else if (cellData.dataType === "textDouble") {
    const cellContent1 = cellData.content1 || "None";
    const cellContent2 = cellData.content2 || "None";
    cellElement = cellData.elementalText1 ? (
      <>
        <span
          className={`elemental-text ${cellData.content1.toLowerCase()}-text`}
        >
          {cellContent1}
        </span>
        <br />
        {cellContent2}
      </>
    ) : (
      <>
        {cellContent1}
        <br />
        {cellContent2}
      </>
    );
    cellClass = cellClass.concat("text-double");
  } else if (cellData.dataType === "textImageCombo") {
    const cellContent1 = cellData.content1 || "None";
    const elements = [
      "pyro",
      "hydro",
      "anemo",
      "electro",
      "dendro",
      "cryo",
      "geo",
    ];
    const cellContent1FirstWord = cellContent1.split(" ")[0];
    if (elements.includes(cellContent1FirstWord.toLowerCase())) {
      cellElement = (
        <>
          <span
            className={`elemental-text ${cellContent1FirstWord.toLowerCase()}-text`}
          >
            {cellContent1}
          </span>
          <div className={`_${cellData.numOfImgs2}-image-container`}>
            <img src={cellData.content2} alt={cellData.altText2 + "."} />
          </div>
        </>
      );
    } else {
      cellElement = (
        <>
          {cellContent1}
          <div className={`_${cellData.numOfImgs2}-image-container`}>
            <img src={cellData.content2} alt={cellData.altText2 + "."} />
          </div>
        </>
      );
    }
    cellClass = cellClass.concat("text-image-combo");
  } else if (cellData.dataType === "imageDouble") {
    if (Array.isArray(cellData.content1) && Array.isArray(cellData.altText1)) {
      cellElement = (
        <>
          {cellData.content1.map((content, index) => {
            return (
              <div
                className={`_${cellData.numOfImgs1}-image-container`}
                key={content}
              >
                <img
                  key={content}
                  src={content}
                  alt={cellData.altText1[index] + "."}
                />
              </div>
            );
          })}
          <div className={`_${cellData.numOfImgs2}-image-container`}>
            <img src={cellData.content2!} alt={cellData.altText2 + "."} />
          </div>
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
            <div className={`_${cellData.numOfImgs2}-image-container`}>
              <img src={cellData.content2!} alt={cellData.altText2 + "."} />
            </div>
          </>
        );
      } else if (cellData.content2 === null) {
        cellElement = (
          <>
            <div className={`_${cellData.numOfImgs1}-image-container`}>
              <img src={cellData.content1} alt={cellData.altText1 + "."} />
            </div>
            None
          </>
        );
      } else {
        cellElement = (
          <>
            <div className={`_${cellData.numOfImgs1}-image-container`}>
              <img src={cellData.content1} alt={cellData.altText1 + "."} />
            </div>
            <div className={`_${cellData.numOfImgs2}-image-container`}>
              <img src={cellData.content2} alt={cellData.altText2 + "."} />
            </div>
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
    <td
      ref={cellRef}
      // style={{ opacity: 1 }}
      className={`table-cell ${cellData.answerAccuracy} ${cellClass} ${animateCell}`}
    >
      {cellElement!}
    </td>
  );
};

export default GuessTableCell;
