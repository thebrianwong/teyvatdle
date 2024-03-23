import GuessListItem from "../GuessListItem/GuessListItem";
import GuessListProps from "./type";
import "./styles.scss";

const GuessList = ({ guesses, answer }: GuessListProps) => {
  return (
    <ul className="guess-list">
      {guesses.map((guess) => {
        return (
          <GuessListItem
            key={guess.characterName}
            itemData={guess}
            answer={answer}
          />
        );
      })}
    </ul>
  );
};

export default GuessList;
