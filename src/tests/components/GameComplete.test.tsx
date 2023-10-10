import React from "react";
import { render, screen } from "@testing-library/react";
import GameComplete from "../../components/GameComplete/GameComplete";

test("GameComplete renders", () => {
  render(<GameComplete gameType="character" />);
  const header = screen.getByRole("heading", { name: "Nice Job, Traveler!" });
  const img = screen.getByAltText("A cheering and excited Paimon.");
  expect(header).toBeInTheDocument();
  expect(img).toBeInTheDocument();
});

describe("GameComplete's subtext changes based on gameType", () => {
  test("With gameType as character", () => {
    render(<GameComplete gameType="character" />);
    const characterText = screen.getByText(
      "Come back tomorrow and Paimon will have a new character for you to guess!"
    );
    expect(characterText).toBeInTheDocument();
  });

  test("With gameType as talent", () => {
    render(<GameComplete gameType="talent" />);
    const talentText = screen.getByText(
      "Come back tomorrow and Paimon will have a new talent for you to guess!"
    );
    expect(talentText).toBeInTheDocument();
  });
});
