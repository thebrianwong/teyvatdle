import GuessTableRow from "../GuessTableRow/GuessTableRow";
import GuessTableProps from "./type";
import GuessTableHeader from "../GuessTableHeader/GuessTableHeader";
import { useEffect, useRef, useState } from "react";
import "./styles.scss";
import lowerCaseFirstLetter from "../../utils/lowerCaseFirstLetter";

const GuessTable = ({
  tableType,
  guessesProp,
  answer,
  complete,
}: GuessTableProps) => {
  const ref = useRef<HTMLTableElement>(null);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (guessesProp.length > 0 && ref.current) {
      ref.current.scrollIntoView({ inline: "start" });
    }
  }, [guessesProp]);

  useEffect(() => {
    setTimeout(() => {
      setInitialLoad(false);
    }, 0);
  }, []);

  return (
    <div className="guess-table-container">
      <table ref={ref}>
        <GuessTableHeader selectType={tableType} />
        <tbody>
          {guessesProp.map((guess) => {
            return (
              <GuessTableRow
                key={`${tableType}-${
                  guess[
                    `${lowerCaseFirstLetter(
                      tableType
                    )}Name` as keyof typeof guess
                  ]
                }`}
                rowType={tableType}
                rowDataProp={guess}
                answer={answer}
                complete={complete}
                playAnimations={!initialLoad}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GuessTable;
