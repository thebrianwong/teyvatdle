import { useEffect, useState } from "react";
import GuessesSummaryProp from "./type";
import determineCorrectness from "../GuessTableRow/determineCorrectness";
import "./styles.scss";
import formatBirthday from "../../utils/formatBirthday";
import getNormalizeDate from "../../utils/normalizeDates";

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

  const parseIntoTweet = () => {
    const URL_NEW_LINE = "%0a";
    const URL_WHITESPACE = "%20";
    const URL_HEADER_WHITESPACE =
      URL_WHITESPACE +
      URL_WHITESPACE +
      URL_WHITESPACE +
      URL_WHITESPACE +
      URL_WHITESPACE +
      URL_WHITESPACE;
    const base = "https://twitter.com/intent/tweet?text=";
    const date =
      formatBirthday(getNormalizeDate()) +
      ", " +
      getNormalizeDate().split("-")[0];
    const teyvatdleBegin = `#Teyvatdle | ${date}`;
    const teyvatdleEnd = "Check out Wordle meets Genshin Impact at ";
    let headerText = "";
    if (emojiHeaders && emojiHeaders.length > 0) {
      emojiHeaders.forEach((item) => {
        headerText += item.replace("ㅤ", URL_HEADER_WHITESPACE) + URL_NEW_LINE;
      });
    }
    let guessText = "";
    if (emojiGuesses!.length <= 5) {
      emojiGuesses!.forEach((item) => {
        guessText +=
          encodeURIComponent(item.replace("You", "I")) + URL_NEW_LINE;
      });
    } else {
      // only show the top 4 guesses due to tweet character limit
      for (let i = 0; i < 4; i++) {
        guessText += encodeURIComponent(emojiGuesses![i]) + URL_NEW_LINE;
      }
      const remainingGuesses = emojiGuesses!.length - 5;
      if (remainingGuesses === 1) {
        guessText += encodeURIComponent(`...and 1 more guess!`) + URL_NEW_LINE;
      } else {
        guessText +=
          encodeURIComponent(
            `...and ${emojiGuesses!.length - 5} more guesses!`
          ) + URL_NEW_LINE;
      }
      const totalGuessText = emojiGuesses![emojiGuesses!.length - 1];
      guessText +=
        encodeURIComponent(totalGuessText.replace("You", "I")) + URL_NEW_LINE;
    }
    let fullTweetIntent = "";
    if (headerText !== "") {
      fullTweetIntent =
        base +
        encodeURIComponent(teyvatdleBegin) +
        URL_NEW_LINE +
        URL_NEW_LINE +
        headerText +
        guessText +
        URL_NEW_LINE +
        encodeURIComponent(teyvatdleEnd) +
        encodeURIComponent(process.env.REACT_APP_FRONTEND_DOMAIN!);
    } else {
      fullTweetIntent =
        base +
        encodeURIComponent(teyvatdleBegin) +
        URL_NEW_LINE +
        URL_NEW_LINE +
        guessText +
        URL_NEW_LINE +
        encodeURIComponent(teyvatdleEnd) +
        encodeURIComponent(process.env.REACT_APP_FRONTEND_DOMAIN!);
    }
    return fullTweetIntent;
  };

  if (emojiGuesses) {
    console.log(parseIntoTweet());
  }

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
