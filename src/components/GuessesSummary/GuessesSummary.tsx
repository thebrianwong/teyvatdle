import { useEffect, useState } from "react";
import GuessesSummaryProp from "./type";
import determineCorrectness from "../GuessTableRow/determineCorrectness";
import "./styles.scss";

const GuessesSummary = ({
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
      headerStrings = [
        "ㅤ♂️✨🔥📊🌸😈ㅤ",
        "🧑📏🌐⚔️💪👾📖🎂",
        "---------------",
      ];
    } else if (selectType === "weapon") {
      headerStrings = ["ㅤ✨📊😈ㅤ", "🗡️⚔️💪👾🎰", "---------"];
    } else if (selectType === "food") {
      headerStrings = ["ㅤ✨ㅤㅤㅤㅤㅤ", "🍽️🍴🎀🏪✍️🎊", "-----------"];
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
          guessRow = guessRow + "🟥";
        } else if (value === "partial") {
          guessRow = guessRow + "🟨";
        } else if (value === "correct") {
          guessRow = guessRow + "🟩";
        }
      });
      guessStrings.push(guessRow);
    });
    if (guesses.length > 1) {
      guessStrings.push(
        `You got the correct ${gameType} in ${guesses.length} guesses!`
      );
    } else {
      guessStrings.push(`You got the correct ${gameType} in 1 guess!`);
    }
    setEmojiGuesses(guessStrings);
  };

  const calculateGuessesBreakdown = () => {
    const wrongCorrectBreakdown: string[] = [];
    wrongCorrectBreakdown.push(`${guesses.length - 1}x 🟥 1x 🟩`);
    if (guesses.length > 1) {
      wrongCorrectBreakdown.push(
        `You got the correct ${gameType} in ${guesses.length} guesses!`
      );
    } else {
      wrongCorrectBreakdown.push(`You got the correct ${gameType} in 1 guess!`);
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
    </div>
  );
};

export default GuessesSummary;
