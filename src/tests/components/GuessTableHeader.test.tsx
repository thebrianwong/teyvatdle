import React from "react";
import { render, screen } from "@testing-library/react";
import GuessTableHeader from "../../components/GuessTableHeader/GuessTableHeader";

const TableContainer = ({ child }) => {
  return <table>{child}</table>;
};

test("GuessTableHeader renders", () => {
  render(
    <TableContainer child={<GuessTableHeader selectType="character" />} />
  );
  const component = screen.getByRole("rowgroup");
  expect(component).toBeInTheDocument();
});

describe("Header values depend on selectType", () => {
  test("character", () => {
    render(
      <TableContainer child={<GuessTableHeader selectType="character" />} />
    );
    const characterHeader = screen.getByRole("columnheader", {
      name: "Character",
    });
    expect(characterHeader).toBeInTheDocument();
  });
  test("weapon", () => {
    render(<TableContainer child={<GuessTableHeader selectType="weapon" />} />);
    const weaponHeader = screen.getByRole("columnheader", {
      name: "Weapon",
    });
    expect(weaponHeader).toBeInTheDocument();
  });
  test("food", () => {
    render(<TableContainer child={<GuessTableHeader selectType="food" />} />);
    const foodHeader = screen.getByRole("columnheader", {
      name: "Food",
    });
    expect(foodHeader).toBeInTheDocument();
  });
});
