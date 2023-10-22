import React from "react";
import { render, screen } from "@testing-library/react";
import GameComplete from "../../components/GameComplete/GameComplete";
import CharacterAPIData from "../../types/data/characterAPIData.type";

const characterData: CharacterAPIData = {
  character_id: 1,
  character_name: "Paimon",
  gender: "Female",
  height: "Short",
  rarity: 5,
  region: "Mondstadt",
  element: "Anemo",
  weapon_type: "Catalyst",
  ascension_stat: "ATK",
  birthday: null,
  character_image_url: "dummy",
  character_correct_image_url: "Correct!",
  character_wrong_image_url: "Wrong...",
  local_specialty: "dummy",
  local_specialty_image_url: "dummy",
  enhancement_material: "dummy",
  enhancement_material_image_url: "dummy",
  ascension_boss_material: "dummy",
  ascension_boss_material_image_url: "dummy",
  talent_boss_material: "dummy",
  talent_boss_material_image_url: "dummy",
  talent_book: ["dummy"],
  talent_book_image_url: ["dummy"],
};

test("GameComplete renders", () => {
  render(
    <GameComplete
      gameType="character"
      selectType="character"
      guesses={[]}
      answer={characterData}
    />
  );
  const header = screen.getByRole("heading", { name: "Nice Job, Traveler!" });
  const img = screen.getByAltText("A cheering and excited Paimon.");
  expect(header).toBeInTheDocument();
  expect(img).toBeInTheDocument();
});

describe("GameComplete's subtext changes based on gameType", () => {
  test("With gameType as character", () => {
    render(
      <GameComplete
        gameType="character"
        selectType="character"
        guesses={[]}
        answer={characterData}
      />
    );
    const characterText = screen.getByText(
      "Come back tomorrow and Paimon will have a new character for you to guess!"
    );
    expect(characterText).toBeInTheDocument();
  });

  test("With gameType as talent", () => {
    render(
      <GameComplete
        gameType="talent"
        selectType="character"
        guesses={[]}
        answer={characterData}
      />
    );
    const talentText = screen.getByText(
      "Come back tomorrow and Paimon will have a new talent for you to guess!"
    );
    expect(talentText).toBeInTheDocument();
  });
});
