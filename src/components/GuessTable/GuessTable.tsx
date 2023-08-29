import GuessTableRow from "../GuessTableRow/GuessTableRow";
import GuessTableProps from "./type";
import GuessTableHeader from "../GuessTableHeader/GuessTableHeader";

const GuessTable = ({ tableType, guessesProp, answer }: GuessTableProps) => {
  /*
  const [guesses, setGuesses] = useState<TableAPIData[]>([
    dummy as CharacterAPIData,
    dummyQiqi as CharacterAPIData,

    // dummyWeapon as WeaponAPIData,
    // dummyTwoStarWeapon as WeaponAPIData,

    // dummyFood as FoodAPIData,
    // dummyFood as FoodAPIData,
  ]); // keeping here for now, but will likely move this state to the page level, selecting char/weap/food will invoke callback to add the selected item to the list of guess which will be passed to the table
  */

  return (
    <div style={{ maxHeight: "50vh", maxWidth: "80vw", overflow: "auto" }}>
      <table style={{ backgroundColor: "lightgray" }}>
        <GuessTableHeader headerType={tableType} />
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
