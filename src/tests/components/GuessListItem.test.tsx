import { render, screen } from "@testing-library/react";
import React from "react";
import GuessListItem from "../../components/GuessListItem/GuessListItem";
import CharacterAPIData from "../../types/data/characterAPIData.type";
import TalentAPIData from "../../types/data/talentAPIData.type";
import ConstellationAPIData from "../../types/data/constellationAPIData.type";

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

const correctTalentData: TalentAPIData = {
  talent_id: 1,
  talent_name: "Eat",
  talent_type: "Normal Attack",
  talent_image_url: "dummy",
  character_name: "Paimon",
  character_image_url: "dummy",
};

const wrongTalentData: TalentAPIData = {
  talent_id: 1,
  talent_name: "Scary Cubes",
  talent_type: "Normal Attack",
  talent_image_url: "dummy",
  character_name: "Unknown God",
  character_image_url: "dummy",
};

const constellationData: ConstellationAPIData = {
  constellation_id: 1,
  constellation_name: "Sleep",
  constellation_level: 1,
  constellation_image_url: "dummy",
  character_name: "Paimon",
  character_image_url: "dummy",
};

describe("GuessListItem renders", () => {
  test("With talent data", () => {
    render(
      <GuessListItem itemData={characterData} answer={correctTalentData} />
    );
    const listItem = screen.getByRole("listitem");
    const characterName = screen.getByText("Paimon");
    expect(listItem).toBeInTheDocument();
    expect(characterName).toBeInTheDocument();
  });

  test("With constellation data", () => {
    render(
      <GuessListItem itemData={characterData} answer={constellationData} />
    );
    const listItem = screen.getByRole("listitem");
    const characterName = screen.getByText("Paimon");
    expect(listItem).toBeInTheDocument();
    expect(characterName).toBeInTheDocument();
  });
});

describe("The image alt text depends on the correct or a wrong answer", () => {
  test("Correct answer", () => {
    render(
      <GuessListItem itemData={characterData} answer={correctTalentData} />
    );
    const correctAltText = screen.getByAltText(
      "One of Paimon's Paintings indicating the correct answer."
    );
    expect(correctAltText).toBeInTheDocument();
  });

  test("Wrong answer", () => {
    render(<GuessListItem itemData={characterData} answer={wrongTalentData} />);
    const wrongAltText = screen.getByAltText(
      "One of Paimon's Paintings indicating a wrong answer."
    );
    expect(wrongAltText).toBeInTheDocument();
  });
});
