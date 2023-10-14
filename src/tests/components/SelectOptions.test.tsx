import React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SelectOptions from "../../components/SelectOptions/SelectOptions";
import CharacterAPIData from "../../types/data/characterAPIData.type";

const characterDataList: CharacterAPIData[] = [
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

const characterGuess: CharacterAPIData[] = [
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
];

test("SelectOptions renders", () => {
  render(
    <SelectOptions
      dataList={characterDataList}
      dataType="character"
      filterValue=""
      guesses={[]}
      handleGuess={jest.fn()}
    />
  );
  const component = screen.getByRole("list");
  expect(component).toBeInTheDocument();
});

test("SelectOptions contains items with li, img, and p elements", () => {
  render(
    <SelectOptions
      dataList={characterDataList}
      dataType="character"
      filterValue=""
      guesses={[]}
      handleGuess={jest.fn()}
    />
  );
  const li = screen.getAllByRole("listitem");
  const img = screen.getAllByRole("img");
  const p = screen.getAllByText(/.+/);
  expect(li.length).toBeGreaterThan(0);
  expect(img.length).toBeGreaterThan(0);
  expect(p.length).toBeGreaterThan(0);
});

test("If there is no filterValue or guesses, everything from dataList is rendered", () => {
  render(
    <SelectOptions
      dataList={characterDataList}
      dataType="character"
      filterValue=""
      guesses={[]}
      handleGuess={jest.fn()}
    />
  );
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toBe(3);
});

test("Only items that contain the filterValue are rendered", () => {
  render(
    <SelectOptions
      dataList={characterDataList}
      dataType="character"
      filterValue="e"
      guesses={[]}
      handleGuess={jest.fn()}
    />
  );
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toBe(2);
});

test("filterValue is case insensitive", () => {
  render(
    <SelectOptions
      dataList={characterDataList}
      dataType="character"
      filterValue="E"
      guesses={[]}
      handleGuess={jest.fn()}
    />
  );
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toBe(2);
});

test("filterValue ignores spaces in the beginning and end", () => {
  render(
    <SelectOptions
      dataList={characterDataList}
      dataType="character"
      filterValue=" e "
      guesses={[]}
      handleGuess={jest.fn()}
    />
  );
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toBe(2);
});

test("Guesses aren't rendered", () => {
  render(
    <SelectOptions
      dataList={characterDataList}
      dataType="character"
      filterValue=""
      guesses={characterGuess}
      handleGuess={jest.fn()}
    />
  );
  const listItems = screen.getAllByRole("listitem");
  const lumine = screen.queryByText("Lumine");
  expect(listItems.length).toBe(2);
  expect(lumine).toBeNull();
});

test("filterValue and guesses can be combined together to filter further down", () => {
  render(
    <SelectOptions
      dataList={characterDataList}
      dataType="character"
      filterValue="e"
      guesses={characterGuess}
      handleGuess={jest.fn()}
    />
  );
  const listItems = screen.getAllByRole("listitem");
  const aether = screen.getByText("Aether");
  const lumine = screen.queryByText("Lumine");
  const paimon = screen.queryByText("Paimon");
  expect(listItems.length).toBe(1);
  expect(aether).toBeInTheDocument();
  expect(lumine).not.toBeInTheDocument();
  expect(paimon).not.toBeInTheDocument();
});

test("A special item is rendered if there are no valid items", () => {
  render(
    <SelectOptions
      dataList={characterDataList}
      dataType="character"
      filterValue="Dainsleif"
      guesses={characterGuess}
      handleGuess={jest.fn()}
    />
  );
  const listItems = screen.getAllByRole("listitem");
  const specialItem = screen.getByText("Paimon doesn't remember that one...");
  expect(listItems.length).toBe(1);
  expect(specialItem).toBeInTheDocument();
});

test("Clicking on an item calls handleGuess", () => {
  const handleClick = jest.fn();
  render(
    <SelectOptions
      dataList={characterDataList}
      dataType="character"
      filterValue=""
      guesses={[]}
      handleGuess={handleClick}
    />
  );
  const listItems = screen.getAllByRole("listitem");
  const listItem = listItems[0];
  act(() => {
    userEvent.click(listItem);
  });
  expect(handleClick).toHaveBeenCalled();
});

test("Clicking on the special item doesn't call handleGuess", () => {
  const handleClick = jest.fn();
  render(
    <SelectOptions
      dataList={characterDataList}
      dataType="character"
      filterValue="Dainsleif"
      guesses={[]}
      handleGuess={handleClick}
    />
  );
  const listItems = screen.getAllByRole("listitem");
  const listItem = listItems[0];
  act(() => {
    userEvent.click(listItem);
  });
  expect(handleClick).not.toHaveBeenCalled();
});
