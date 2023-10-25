import { useEffect, useState } from "react";
import TweetButtonProps from "./type";
import formatBirthday from "../../utils/formatBirthday";
import getNormalizeDate from "../../utils/normalizeDates";

const TweetButton = ({ emojiHeaders, emojiGuesses }: TweetButtonProps) => {
  const [tweetUrl, setTweetUrl] = useState<string>();

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
        encodeURIComponent(window.location.origin);
    } else {
      fullTweetIntent =
        base +
        encodeURIComponent(teyvatdleBegin) +
        URL_NEW_LINE +
        URL_NEW_LINE +
        guessText +
        URL_NEW_LINE +
        encodeURIComponent(teyvatdleEnd) +
        encodeURIComponent(window.location.origin);
    }
    return fullTweetIntent;
  };

  useEffect(() => {
    const parsedTweetUrl = parseIntoTweet();
    setTweetUrl(parsedTweetUrl);
  }, []);

  return (
    <a href={tweetUrl} target="_blank" rel="noopener noreferrer">
      <button>Share on Twitter</button>
    </a>
  );
};

export default TweetButton;
