import React from "react";
import { render, screen } from "@testing-library/react";
import GuessTableHeader from "../../components/GuessTableHeader/GuessTableHeader";
import { GameDataType } from "../../__generated__/graphql";

const TableContainer = ({ child }) => {
  return <table>{child}</table>;
};

test("GuessTableHeader renders", () => {
  render(
    <TableContainer
      child={<GuessTableHeader selectType={GameDataType.Character} />}
    />
  );
  const component = screen.getByRole("rowgroup");
  expect(component).toBeInTheDocument();
});

describe("Header values depend on selectType", () => {
  test("character", () => {
    render(
      <TableContainer
        child={<GuessTableHeader selectType={GameDataType.Character} />}
      />
    );
    const characterHeader = screen.getByRole("columnheader", {
      name: "Character",
    });
    expect(characterHeader).toBeInTheDocument();
  });
  test("weapon", () => {
    render(
      <TableContainer
        child={<GuessTableHeader selectType={GameDataType.Weapon} />}
      />
    );
    const weaponHeader = screen.getByRole("columnheader", {
      name: "Weapon",
    });
    expect(weaponHeader).toBeInTheDocument();
  });
  test("food", () => {
    render(
      <TableContainer
        child={<GuessTableHeader selectType={GameDataType.Food} />}
      />
    );
    const foodHeader = screen.getByRole("columnheader", {
      name: "Food",
    });
    expect(foodHeader).toBeInTheDocument();
  });
});
