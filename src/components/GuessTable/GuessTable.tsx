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
    <div style={{ maxHeight: "50vh", maxWidth: "80vw", overflow: "auto" }}>
      <table
        ref={ref}
        style={{
          backgroundColor: "lightgray",
          borderCollapse: "separate",
          borderSpacing: "0",
          width: "100%",
        }}
      >
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
