import GuessTableRow from "../GuessTableRow/GuessTableRow";
import GuessTableProps from "./type";
import GuessTableHeader from "../GuessTableHeader/GuessTableHeader";
import { useEffect, useRef } from "react";
import "./styles.scss";

const GuessTable = ({ tableType, guessesProp, answer }: GuessTableProps) => {
  const ref = useRef<HTMLTableElement>(null);

  useEffect(() => {
    if (guessesProp.length > 0) {
      ref.current!.scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  }, [guessesProp]);

  return (
    <div className="guess-table-container">
      <table ref={ref}>
        <GuessTableHeader selectType={tableType} />
        <tbody>
          {guessesProp.map((guess) => {
            return (
              <GuessTableRow
                key={`${tableType}-${
                  guess[`${tableType}_name` as keyof typeof guess]
                }`}
                rowType={tableType}
                rowDataProp={guess}
                answer={answer}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GuessTable;
