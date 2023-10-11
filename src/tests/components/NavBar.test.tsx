import React from "react";
import { act, render, screen } from "@testing-library/react";
import NavBar from "../../components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

test("NavBar renders", () => {
  render(<NavBar />, { wrapper: BrowserRouter });
  const component = screen.getByRole("navigation");
  expect(component).toBeInTheDocument();
});

test("Links to all game modes exist", () => {
  render(<NavBar />, { wrapper: BrowserRouter });
  const characterLink = screen.getByRole("link", { name: "Characters" });
  const weaponLink = screen.getByRole("link", { name: "Weapons" });
  const foodLink = screen.getByRole("link", { name: "Foods" });
  const talentLink = screen.getByRole("link", { name: "Talents" });
  const constellationLink = screen.getByRole("link", {
    name: "Constellations",
  });
  expect(characterLink).toBeInTheDocument();
  expect(weaponLink).toBeInTheDocument();
  expect(foodLink).toBeInTheDocument();
  expect(talentLink).toBeInTheDocument();
  expect(constellationLink).toBeInTheDocument();
});

test("The Teyvatdle logo exists", () => {
  render(<NavBar />, { wrapper: BrowserRouter });
  const logo = screen.getByAltText("Teyvatdle Logo.");
  expect(logo).toBeInTheDocument();
});

describe("NavBar functionality in viewports of 580px or less", () => {
  const shrinkViewport = () => {
    window.innerWidth = 580;
  };
  test("The NavBar links are gone by default", () => {
    shrinkViewport();
    render(<NavBar />, { wrapper: BrowserRouter });
    const characterLink = screen.queryByRole("link", { name: "Characters" });
    const weaponLink = screen.queryByRole("link", { name: "Weapons" });
    const foodLink = screen.queryByRole("link", { name: "Foods" });
    const talentLink = screen.queryByRole("link", { name: "Talents" });
    const constellationLink = screen.queryByRole("link", {
      name: "Constellations",
    });
    expect(characterLink).not.toBeInTheDocument();
    expect(weaponLink).not.toBeInTheDocument();
    expect(foodLink).not.toBeInTheDocument();
    expect(talentLink).not.toBeInTheDocument();
    expect(constellationLink).not.toBeInTheDocument();
  });
  test("The hamburger buttons replaces the NavBar links", () => {
    shrinkViewport();
    render(<NavBar />, { wrapper: BrowserRouter });
    const hamburgerButton = screen.getByRole("button");
    expect(hamburgerButton).toBeInTheDocument();
  });
  test("Clicking the hamburger button displays the NavBar links", () => {
    shrinkViewport();
    render(<NavBar />, { wrapper: BrowserRouter });
    const beforeCharacterLink = screen.queryByRole("link", {
      name: "Characters",
    });
    const beforeWeaponLink = screen.queryByRole("link", { name: "Weapons" });
    const beforeFoodLink = screen.queryByRole("link", { name: "Foods" });
    const beforeTalentLink = screen.queryByRole("link", { name: "Talents" });
    const beforeConstellationLink = screen.queryByRole("link", {
      name: "Constellations",
    });
    expect(beforeCharacterLink).not.toBeInTheDocument();
    expect(beforeWeaponLink).not.toBeInTheDocument();
    expect(beforeFoodLink).not.toBeInTheDocument();
    expect(beforeTalentLink).not.toBeInTheDocument();
    expect(beforeConstellationLink).not.toBeInTheDocument();
    const hamburgerButton = screen.getByRole("button");
    act(() => {
      userEvent.click(hamburgerButton);
    });
    const afterCharacterLink = screen.getByRole("link", { name: "Characters" });
    const afterWeaponLink = screen.getByRole("link", { name: "Weapons" });
    const afterFoodLink = screen.getByRole("link", { name: "Foods" });
    const afterTalentLink = screen.getByRole("link", { name: "Talents" });
    const afterConstellationLink = screen.getByRole("link", {
      name: "Constellations",
    });
    expect(afterCharacterLink).toBeInTheDocument();
    expect(afterWeaponLink).toBeInTheDocument();
    expect(afterFoodLink).toBeInTheDocument();
    expect(afterTalentLink).toBeInTheDocument();
    expect(afterConstellationLink).toBeInTheDocument();
  });
});
