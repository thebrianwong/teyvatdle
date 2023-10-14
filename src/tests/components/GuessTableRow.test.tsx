import React from "react";
import { render, screen } from "@testing-library/react";
import GuessTableRow from "../../components/GuessTableRow/GuessTableRow";
import CharacterAPIData from "../../types/data/characterAPIData.type";
import WeaponAPIData from "../../types/data/weaponAPIData.type";
import FoodAPIData from "../../types/data/foodAPIData.type";

const TableContainer = ({ child }) => {
  return (
    <table>
      <tbody>{child}</tbody>
    </table>
  );
};

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

const weaponData: WeaponAPIData = {
  weapon_id: 1,
  weapon_name: "Cubes",
  rarity: 5,
  weapon_type: "Catalyst",
  sub_stat: "ATK",
  weapon_image_url: "dummy",
  weapon_domain_material: "dummy",
  weapon_domain_material_image_url: "dummy",
  elite_enemy_material: "dummy",
  elite_enemy_material_image_url: "dummy",
  common_enemy_material: "dummy",
  common_enemy_material_image_url: "dummy",
  gacha: true,
};

const foodData: FoodAPIData = {
  food_id: 1,
  food_name: "Paimon (Emergency Food)",
  rarity: 5,
  food_type: "Adventurer's Dishes",
  special_dish: false,
  purchasable: false,
  recipe: false,
  event: true,
  food_image_url: "dummy",
};

test("GuessTableRow renders", () => {
  render(
    <TableContainer
      child={
        <GuessTableRow
          rowType="character"
          rowDataProp={characterData}
          answer={characterData}
        />
      }
    />
  );
  const component = screen.getByRole("row");
  expect(component).toBeInTheDocument();
});

describe("The number of cells in the row varies by rowType", () => {
  test("character", () => {
    render(
      <TableContainer
        child={
          <GuessTableRow
            rowType="character"
            rowDataProp={characterData}
            answer={characterData}
          />
        }
      />
    );
    const numOfCharacterCells = 9;
    const cells = screen.getAllByRole("cell");
    expect(cells.length).toBe(numOfCharacterCells);
  });
  test("weapon", () => {
    render(
      <TableContainer
        child={
          <GuessTableRow
            rowType="weapon"
            rowDataProp={weaponData}
            answer={weaponData}
          />
        }
      />
    );
    const numOfWeaponCells = 6;
    const cells = screen.getAllByRole("cell");
    expect(cells.length).toBe(numOfWeaponCells);
  });
  test("food", () => {
    render(
      <TableContainer
        child={
          <GuessTableRow
            rowType="food"
            rowDataProp={foodData}
            answer={foodData}
          />
        }
      />
    );
    const numOfFoodCells = 7;
    const cells = screen.getAllByRole("cell");
    expect(cells.length).toBe(numOfFoodCells);
  });
});
