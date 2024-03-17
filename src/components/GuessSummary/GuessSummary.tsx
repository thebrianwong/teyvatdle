import { useEffect, useState } from "react";
import GuessesSummaryProp from "./type";
import determineCorrectness from "../GuessTableRow/determineCorrectness";
import "./styles.scss";
import TweetButton from "../TweetButton/TweetButton";
import { GameDataType } from "../../__generated__/graphql";
import lowerCaseFirstLetter from "../../utils/lowerCaseFirstLetter";

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
    switch (selectType) {
      case GameDataType.Character:
        headerStrings = ["ㅤ♂️✨🔥📊🌸😈ㅤ", "🧑📏🌐⚔️💪👾📖🎂"];
        break;
      case GameDataType.Weapon:
        headerStrings = ["ㅤ✨📊😈ㅤ", "🗡️⚔️💪👾🎰"];
        break;
      case GameDataType.Food:
        headerStrings = ["ㅤ✨ㅤㅤㅤㅤㅤ", "🍽️🍴🎀🏪✍️🎊"];
        break;
      default:
        break;
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
        `You guessed today's ${lowerCaseFirstLetter(gameType)} in ${
          guesses.length
        } tries!`
      );
    } else {
      guessStrings.push(
        `You guessed today's ${lowerCaseFirstLetter(gameType)} in 1 try!`
      );
    }
    setEmojiGuesses(guessStrings);
  };

  const calculateGuessesBreakdown = () => {
    const wrongCorrectBreakdown: string[] = [];
    wrongCorrectBreakdown.push(`${guesses.length - 1}x 🟥 1x 🟩`);
    if (guesses.length > 1) {
      wrongCorrectBreakdown.push(
        `You guessed today's ${lowerCaseFirstLetter(gameType)} in ${
          guesses.length
        } tries!`
      );
    } else {
      wrongCorrectBreakdown.push(
        `You guessed today's ${lowerCaseFirstLetter(gameType)} in 1 try!`
      );
    }
    setEmojiGuesses(wrongCorrectBreakdown);
  };

  useEffect(() => {
    if (
      gameType === GameDataType.Character ||
      gameType === GameDataType.Weapon ||
      gameType === GameDataType.Food
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
