import React from "react";
import { render, screen } from "@testing-library/react";
import GuessList from "../../components/GuessList/GuessList";
import TalentAPIData from "../../types/data/talentAPIData.type";
import CharacterAPIData from "../../types/data/characterAPIData.type";

const guesses: CharacterAPIData[] = [
  {
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
  },
  {
    character_id: 2,
    character_name: "Lumine",
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
  },
];

const answer: TalentAPIData = {
  talent_id: 1,
  talent_name: "Eat",
  talent_type: "Normal Attack",
  talent_image_url: "dummy",
  character_name: "Paimon",
  character_image_url: "dummy",
};

test("GuessList renders", () => {
  render(<GuessList guesses={[]} answer={answer} />);
  const component = screen.getByRole("list");
  expect(component).toBeInTheDocument();
});

test("The length of guess dictates the number of GuessListItems", () => {
  render(<GuessList guesses={guesses} answer={answer} />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toBe(2);
});
