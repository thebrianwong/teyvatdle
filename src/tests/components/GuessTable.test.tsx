import React from "react";
import { render, screen, within } from "@testing-library/react";
import GuessTable from "../../components/GuessTable/GuessTable";
import CharacterAPIData from "../../types/data/characterAPIData.type";

const characterData: CharacterAPIData = {
  character_id: 4,
  character_name: "Unknown God",
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

const characterGuesses: CharacterAPIData[] = [
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
    height: "Medium",
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
    character_id: 3,
    character_name: "Aether",
    gender: "Male",
    height: "Medium",
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

test("GuessTable renders", () => {
  render(
    <GuessTable tableType="character" guessesProp={[]} answer={characterData} />
  );
  const component = screen.getByRole("table");
  expect(component).toBeInTheDocument();
});

test("The number of rows is determined by the number of guess", () => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
  render(
    <GuessTable
      tableType="character"
      guessesProp={characterGuesses}
      answer={characterData}
    />
  );
  // 2 rowgroup's, one for table header and another for table body
  const tableBody = screen.getAllByRole("rowgroup")[1];
  const rows = within(tableBody).getAllByRole("row");
  expect(rows.length).toBe(3);
});
