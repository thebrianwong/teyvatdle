import React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SelectMenu from "../../components/SelectMenu/SelectMenu";
import CharacterAPIData from "../../types/data/characterAPIData.type";

const characterData: CharacterAPIData[] = [
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

test("SelectMenu renders", () => {
  render(
    <SelectMenu
      selectType="character"
      data={characterData}
      guesses={[]}
      gameCompleted={false}
      allowInteraction={true}
      handleGuess={jest.fn()}
    />
  );
  const component = screen.getByRole("searchbox");
  expect(component).toBeInTheDocument();
});

test("Clicking on the search bar shows the select options", () => {
  render(
    <SelectMenu
      selectType="character"
      data={characterData}
      guesses={[]}
      gameCompleted={false}
      allowInteraction={true}
      handleGuess={jest.fn()}
    />
  );
  const listBeforeClick = screen.queryByRole("list");
  expect(listBeforeClick).not.toBeInTheDocument();
  const searchBar = screen.getByRole("searchbox");
  act(() => {
    userEvent.click(searchBar);
  });
  const listAfterClick = screen.getByRole("list");
  expect(listAfterClick).toBeInTheDocument();
});

describe("Selecting a select option...", () => {
  const handleGuessMock = jest.fn();

  test("...calls handleGuess", () => {
    render(
      <SelectMenu
        selectType="character"
        data={characterData}
        guesses={[]}
        gameCompleted={false}
        allowInteraction={true}
        handleGuess={handleGuessMock}
      />
    );
    const searchBar = screen.getByRole("searchbox");
    act(() => {
      userEvent.click(searchBar);
    });
    const listItem = screen.getAllByRole("listitem")[0];
    act(() => {
      userEvent.click(listItem);
    });
    expect(handleGuessMock).toBeCalledTimes(1);
  });
  test("...hides the select options", () => {
    render(
      <SelectMenu
        selectType="character"
        data={characterData}
        guesses={[]}
        gameCompleted={false}
        allowInteraction={true}
        handleGuess={handleGuessMock}
      />
    );
    const searchBar = screen.getByRole("searchbox");
    act(() => {
      userEvent.click(searchBar);
    });
    const listItem = screen.getAllByRole("listitem")[0];
    act(() => {
      userEvent.click(listItem);
    });
    const list = screen.queryByRole("list");
    expect(list).not.toBeInTheDocument();
  });
  test("...resets the search value", () => {
    render(
      <SelectMenu
        selectType="character"
        data={characterData}
        guesses={[]}
        gameCompleted={false}
        allowInteraction={true}
        handleGuess={handleGuessMock}
      />
    );
    const searchBar = screen.getByRole("searchbox");
    act(() => {
      userEvent.click(searchBar);
      userEvent.keyboard("Paimon");
    });
    expect(searchBar).toHaveAttribute("value", "Paimon");
    const listItem = screen.getAllByRole("listitem")[0];
    act(() => {
      userEvent.click(listItem);
    });
    expect(searchBar).toHaveAttribute("value", "");
  });
});
