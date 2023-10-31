import React from "react";
import { act, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { renderWithProviders } from "./test-utils";

beforeAll(() => {
  window.scrollTo = jest.fn();
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
  jest.setTimeout(10000);
});

test("App renders", () => {
  renderWithProviders(<App />);
  const navBar = screen.getByRole("navigation");
  const pageHeader = screen.getByRole("heading", {
    name: "Which Character is Paimon Thinking of...?",
  });
  const searchBar = screen.getByRole("searchbox");
  const gameTable = screen.getByRole("table");
  const credits = screen.getByRole("button", { name: "Credits" });
  const tooltip = screen.getByRole("button", { name: "?" });
  expect(navBar).toBeInTheDocument();
  expect(pageHeader).toBeInTheDocument();
  expect(searchBar).toBeInTheDocument();
  expect(gameTable).toBeInTheDocument();
  expect(credits).toBeInTheDocument();
  expect(tooltip).toBeInTheDocument();
});

describe("Selected items are tracked and completion is calculated", () => {
  test("character (same for weapon and food)", async () => {
    renderWithProviders(<App />);
    const searchBar = screen.getByRole("searchbox");
    act(() => {
      userEvent.click(searchBar);
    });
    const paimonOption = screen.getByText("Paimon");
    act(() => {
      userEvent.click(paimonOption);
    });
    const gameComplete = await screen.findByRole(
      "heading",
      {
        name: "Nice Job, Traveler!",
      },
      { timeout: 10000 }
    );
    const paimonCell = screen.getByRole("cell", {
      name: "Paimon",
    });
    const totalGuesses = screen.getByText(/Total Guesses:/);
    expect(paimonCell).toBeInTheDocument();
    await waitFor(() => {
      expect(totalGuesses).toHaveTextContent("Total Guesses: 1");
    });
    expect(gameComplete).toBeInTheDocument();
  }, 10000);
  test("talent (same for constellation)", async () => {
    window.scrollTo = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    renderWithProviders(<App />);
    const talentLink = screen.getByRole("link", { name: "Talents" });
    act(() => {
      userEvent.click(talentLink);
    });
    const searchBar = screen.getByRole("searchbox");
    act(() => {
      userEvent.click(searchBar);
    });
    const paimonOption = screen.getByText("Paimon");
    act(() => {
      userEvent.click(paimonOption);
    });
    const talentInfo = await screen.findByRole("heading", {
      name: "Paimon's Normal Attack Talent: Eat",
    });
    const paimonListItem = screen.getByAltText(
      "One of Paimon's Paintings indicating the correct answer."
    );
    expect(talentInfo).toBeInTheDocument();
    expect(paimonListItem).toBeInTheDocument();
  });
});

describe("Using the nav links changes the page", () => {
  test("weapon", () => {
    renderWithProviders(<App />);
    const weaponLink = screen.getByRole("link", { name: "Weapons" });
    act(() => {
      userEvent.click(weaponLink);
    });
    const weaponHeader = screen.getByRole("heading", {
      name: "Which Weapon is Paimon Thinking of...?",
    });
    expect(weaponHeader).toBeInTheDocument();
  });
  test("foods", () => {
    renderWithProviders(<App />);
    const foodLink = screen.getByRole("link", { name: "Foods" });
    act(() => {
      userEvent.click(foodLink);
    });
    const foodHeader = screen.getByRole("heading", {
      name: "Which Food is Paimon Thinking of...?",
    });
    expect(foodHeader).toBeInTheDocument();
  });
  test("talents", () => {
    renderWithProviders(<App />);
    const talentLink = screen.getByRole("link", { name: "Talents" });
    act(() => {
      userEvent.click(talentLink);
    });
    const talentHeader = screen.getByRole("heading", {
      name: "Which Talent is Paimon Thinking of...?",
    });
    const gameList = screen.getByRole("list");
    expect(talentHeader).toBeInTheDocument();
    expect(gameList).toBeInTheDocument();
  });
  test("constellations", () => {
    renderWithProviders(<App />);
    const constellationLink = screen.getByRole("link", {
      name: "Constellations",
    });
    act(() => {
      userEvent.click(constellationLink);
    });
    const constellationHeader = screen.getByRole("heading", {
      name: "Which Constellation is Paimon Thinking of...?",
    });
    const gameList = screen.getByRole("list");
    expect(constellationHeader).toBeInTheDocument();
    expect(gameList).toBeInTheDocument();
  });
});
