import React from "react";
import { screen } from "@testing-library/react";
import FoodPage from "../../pages/FoodPage/FoodPage";
import { renderWithProviders } from "../test-utils";
import invalidDailyIdState from "./utils";

window.scrollTo = jest.fn();

test("HomePage renders", async () => {
  renderWithProviders(
    <FoodPage
      dailyRecordID="0"
      guessesCounter={0}
      complete={false}
      guesses={[]}
      setGuessCounter={jest.fn()}
      setCompletedState={jest.fn()}
      updateGuesses={jest.fn()}
    />
  );
  const header = screen.getByRole("heading", {
    name: "Which Food is Paimon Thinking of...?",
  });
  const headerSubtext = screen.getByText(/Travelers have guessed Paimon's/);
  const gameArea = screen.getByRole("table");
  const credits = screen.getByRole("button", { name: "Credits" });
  const tooltip = screen.getByRole("button", { name: "?" });
  expect(header).toBeInTheDocument();
  expect(headerSubtext).toBeInTheDocument();
  expect(gameArea).toBeInTheDocument();
  expect(credits).toBeInTheDocument();
  expect(tooltip).toBeInTheDocument();
});

test("Some PageHeader text and GameArea is only rendered if dailyFoodData is loaded", async () => {
  renderWithProviders(
    <FoodPage
      dailyRecordID="0"
      guessesCounter={0}
      complete={false}
      guesses={[]}
      setGuessCounter={jest.fn()}
      setCompletedState={jest.fn()}
      updateGuesses={jest.fn()}
    />,
    { preloadedState: invalidDailyIdState }
  );
  const header = screen.queryByText(/Travelers have guessed Paimon's/);
  const gameArea = screen.queryByRole("table");
  expect(header).toBeNull();
  expect(gameArea).toBeNull();
});
