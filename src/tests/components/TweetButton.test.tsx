import React from "react";
import { render, screen } from "@testing-library/react";
import TweetButton from "../../components/TweetButton/TweetButton";

beforeAll(() => {
  jest.useFakeTimers().setSystemTime(new Date("1337-11-22T12:00:00"));
});

afterAll(() => {
  jest.useRealTimers();
});

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
const teyvatdleBegin = "#Teyvatdle | November 22nd, 1337";
const teyvatdleEnd = "Check out Wordle meets Genshin Impact at ";

test("TweetButton renders", () => {
  render(<TweetButton emojiHeaders={["Genshin"]} emojiGuesses={["Impact"]} />);
  const a = screen.getByRole("link");
  const button = screen.getByRole("button", { name: "Share" });
  expect(a).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("The button links to Twitter tweet intent with content based on props", () => {
  render(<TweetButton emojiHeaders={["Helloㅤ"]} emojiGuesses={["You"]} />);
  const a = screen.getByRole("link");
  const constructedUrl =
    base +
    encodeURIComponent(teyvatdleBegin) +
    URL_NEW_LINE +
    URL_NEW_LINE +
    "Hello" +
    URL_HEADER_WHITESPACE +
    URL_NEW_LINE +
    "I" +
    URL_NEW_LINE +
    URL_NEW_LINE +
    encodeURIComponent(teyvatdleEnd) +
    encodeURIComponent(window.location.origin);
  expect(a).toHaveAttribute("href", constructedUrl);
});

test("The button link is different if emojiHeaders is not passed in", () => {
  render(<TweetButton emojiGuesses={["Genshin", "Impact"]} />);
  const a = screen.getByRole("link");
  const constructedUrl =
    base +
    encodeURIComponent(teyvatdleBegin) +
    URL_NEW_LINE +
    URL_NEW_LINE +
    "Genshin" +
    URL_NEW_LINE +
    "Impact" +
    URL_NEW_LINE +
    URL_NEW_LINE +
    encodeURIComponent(teyvatdleEnd) +
    encodeURIComponent(window.location.origin);
  expect(a).toHaveAttribute("href", constructedUrl);
});

test("The tweet is shortened if there are over 4 guesses", () => {
  render(
    <TweetButton
      emojiHeaders={["Numbers"]}
      emojiGuesses={[
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "You guessed today's character in 7 tries!",
      ]}
    />
  );
  const a = screen.getByRole("link");
  const constructedUrl =
    base +
    encodeURIComponent(teyvatdleBegin) +
    URL_NEW_LINE +
    URL_NEW_LINE +
    "Numbers" +
    URL_NEW_LINE +
    "One" +
    URL_NEW_LINE +
    "Two" +
    URL_NEW_LINE +
    "Three" +
    URL_NEW_LINE +
    "Four" +
    URL_NEW_LINE +
    encodeURIComponent("...and 3 more guesses!") +
    URL_NEW_LINE +
    encodeURIComponent("I guessed today's character in 7 tries!") +
    URL_NEW_LINE +
    URL_NEW_LINE +
    encodeURIComponent(teyvatdleEnd) +
    encodeURIComponent(window.location.origin);
  expect(a).toHaveAttribute("href", constructedUrl);
});
