import { useEffect, useState } from "react";
import GuessesSummaryProp from "./type";
import determineCorrectness from "../GuessTableRow/determineCorrectness";
import "./styles.scss";
import TweetButton from "../TweetButton/TweetButton";

const GuessSummary = ({
  gameType,
  selectType,
  guesses,
  answer,
}: GuessesSummaryProp) => {
  const [emojiHeaders, setEmojiHeaders] = useState<string[]>();
  const [emojiGuesses, setEmojiGuesses] = useState<string[]>();

  const chooseEmojiHeaders = () => {
    let headerStrings: string[];
    if (selectType === "character") {
      headerStrings = ["ㅤ♂️✨🔥📊🌸😈ㅤ", "🧑📏🌐⚔️💪👾📖🎂"];
    } else if (selectType === "weapon") {
      headerStrings = ["ㅤ✨📊😈ㅤ", "🗡️⚔️💪👾🎰"];
    } else if (selectType === "food") {
      headerStrings = ["ㅤ✨ㅤㅤㅤㅤㅤ", "🍽️🍴🎀🏪✍️🎊"];
    }
    setEmojiHeaders(headerStrings!);
  };

  const calculateEmojiGuesses = () => {
    const guessStrings: string[] = [];
    guesses.forEach((guess) => {
      const accuracyObject = determineCorrectness(selectType, guess, answer);
      let guessRow = "";
      Object.keys(accuracyObject!).forEach((key) => {
        const value = accuracyObject![key as keyof typeof accuracyObject];
        if (value === "wrong") {
          guessRow += "🟥";
        } else if (value === "partial") {
          guessRow += "🟨";
        } else if (value === "correct") {
          guessRow += "🟩";
        }
      });
      guessStrings.push(guessRow);
    });
    if (guesses.length > 1) {
      guessStrings.push(
        `You guessed today's ${gameType} in ${guesses.length} tries!`
      );
    } else {
      guessStrings.push(`You guessed today's ${gameType} in 1 try!`);
    }
    setEmojiGuesses(guessStrings);
  };

  const calculateGuessesBreakdown = () => {
    const wrongCorrectBreakdown: string[] = [];
    wrongCorrectBreakdown.push(`${guesses.length - 1}x 🟥 1x 🟩`);
    if (guesses.length > 1) {
      wrongCorrectBreakdown.push(
        `You guessed today's ${gameType} in ${guesses.length} tries!`
      );
    } else {
      wrongCorrectBreakdown.push(`You guessed today's ${gameType} in 1 try!`);
    }
    setEmojiGuesses(wrongCorrectBreakdown);
  };

  useEffect(() => {
    if (
      gameType === "character" ||
      gameType === "weapon" ||
      gameType === "food"
    ) {
      chooseEmojiHeaders();
      calculateEmojiGuesses();
    } else {
      calculateGuessesBreakdown();
    }
  }, []);

  return (
    <div className="summary-container">
      <h2>Summary</h2>
      {emojiHeaders &&
        emojiHeaders.map((header) => {
          return (
            <p className="summary-emojis" key={header}>
              {header}
            </p>
          );
        })}
      {emojiGuesses &&
        emojiGuesses.map((guess, index) => {
          return (
            <p className="summary-emojis" key={`${guess}-${index}`}>
              {guess}
            </p>
          );
        })}
      {emojiGuesses && (
        <TweetButton emojiHeaders={emojiHeaders} emojiGuesses={emojiGuesses} />
      )}
    </div>
  );
};

export default GuessSummary;
