import GuessListItem from "../GuessListItem/GuessListItem";
import GuessListProps from "./type";

const GuessList = ({ guesses, answer }: GuessListProps) => {
  return (
    <ul>
      {guesses.map((guess) => {
        return (
          <GuessListItem
            key={guess.character_name}
            itemData={guess}
            answer={answer}
          />
        );
      })}
    </ul>
  );
};

export default GuessList;
