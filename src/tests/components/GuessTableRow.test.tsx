import React from "react";
import { render, screen } from "@testing-library/react";
import GuessTableRow from "../../components/GuessTableRow/GuessTableRow";
import {
  CharacterData,
  FoodData,
  FoodType,
  GameDataType,
  Gender,
  GenshinElement,
  Height,
  Region,
  Stat,
  WeaponData,
  WeaponType,
} from "../../__generated__/graphql";

const TableContainer = ({ child }) => {
  return (
    <table>
      <tbody>{child}</tbody>
    </table>
  );
};

const characterData: CharacterData = {
  characterId: "1",
  characterName: "Paimon",
  gender: Gender.Female,
  height: Height.Short,
  rarity: 5,
  region: Region.Mondstadt,
  element: GenshinElement.Anemo,
  weaponType: WeaponType.Catalyst,
  ascensionStat: Stat.Atk,
  birthday: null,
  characterImageUrl: "dummy",
  characterCorrectImageUrl: "Correct!",
  characterWrongImageUrl: "Wrong...",
  localSpecialty: "dummy",
  localSpecialtyImageUrl: "dummy",
  enhancementMaterial: "dummy",
  enhancementMaterialImageUrl: "dummy",
  ascensionBossMaterial: "dummy",
  ascensionBossMaterialImageUrl: "dummy",
  talentBossMaterial: "dummy",
  talentBossMaterialImageUrl: "dummy",
  talentBook: ["dummy"],
  talentBookImageUrl: ["dummy"],
};

const weaponData: WeaponData = {
  weaponId: "1",
  weaponName: "Cubes",
  rarity: 5,
  weaponType: WeaponType.Catalyst,
  subStat: Stat.Atk,
  weaponImageUrl: "dummy",
  weaponDomainMaterial: "dummy",
  weaponDomainMaterialImageUrl: "dummy",
  eliteEnemyMaterial: "dummy",
  eliteEnemyMaterialImageUrl: "dummy",
  commonEnemyMaterial: "dummy",
  commonEnemyMaterialImageUrl: "dummy",
  gacha: true,
};

const foodData: FoodData = {
  foodId: "1",
  foodName: "Paimon (Emergency Food)",
  rarity: 5,
  foodType: FoodType.AdventurersDishes,
  specialDish: false,
  purchasable: false,
  recipe: false,
  event: true,
  foodImageUrl: "dummy",
};

test("GuessTableRow renders", () => {
  render(
    <TableContainer
      child={
        <GuessTableRow
          rowType={GameDataType.Character}
          rowDataProp={characterData}
          answer={characterData}
          complete={false}
          playAnimations={false}
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
            rowType={GameDataType.Character}
            rowDataProp={characterData}
            answer={characterData}
            complete={false}
            playAnimations={false}
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
            rowType={GameDataType.Weapon}
            rowDataProp={weaponData}
            answer={weaponData}
            complete={false}
            playAnimations={false}
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
            rowType={GameDataType.Food}
            rowDataProp={foodData}
            answer={foodData}
            complete={false}
            playAnimations={false}
          />
        }
      />
    );
    const numOfFoodCells = 7;
    const cells = screen.getAllByRole("cell");
    expect(cells.length).toBe(numOfFoodCells);
  });
});
